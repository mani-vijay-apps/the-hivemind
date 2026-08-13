import fp from 'fastify-plugin';
import {Pool} from 'pg'

const databasePlugin = fp(async(app)=>{
    const pool = new Pool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });

    app.decorate("db", pool);

    app.addHook("onClose", async () => {
        await pool.end();
    });
});

export default databasePlugin;