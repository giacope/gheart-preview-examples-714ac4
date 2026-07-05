import { readEnv } from './env';
export interface Config { port: number; env: string; }
export function loadConfig(): Config {
  return { port: Number(readEnv('PORT', '3000')), env: readEnv('NODE_ENV', 'dev') };
}
