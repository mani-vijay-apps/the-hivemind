import type{FastifyInstance} from 'fastify';

export async function healthRoutes(app:FastifyInstance){
    app.get('/health', async () => {
        return { 
            status: 'ok',
            service: "the-hivemind-api",
         };
    });

    // liveness check
    app.get('/health/live', async () => {
        return { status: 'ok' };
    });

    // readiness check
    app.get('/health/ready', async (request, reply) => {
        try{
            await app.db.query("SELECT 1");
            return { 
                status: 'ready',
                checks: {
                    database: "ok",
                },
             };
        }catch(err){
            request.log.error(err);
            return reply.status(503).send({
                status: 'not_ready',
                checks: {
                    database: "failed",
                },
            });
        }
        
    });
}