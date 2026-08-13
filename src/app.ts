import Fastify from 'fastify';
import {healthRoutes} from './routes/health.routes.js'
import databasePlugin from './plugins/db.js';

const app = Fastify({
  logger: true,
});
app.register(databasePlugin);
app.register(healthRoutes);

export default app;