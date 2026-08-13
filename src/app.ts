import Fastify from 'fastify';
import {healthRoutes} from './routes/health.routes.js'
import databasePlugin from './plugins/db.js';

const app = Fastify({
  logger: true,
});

// Register plugin and Routes
app.register(databasePlugin);
app.register(healthRoutes);

export default app;