/*
    - TypeScript Type Definition
 */
import {Pool} from 'pg';

declare module "fastify"{
    interface FastifyInstance{
        db: Pool;
    }
}