export interface Config { port: number; env: string; }
export function loadConfig(): Config {
  return { port: Number(process.env.PORT ?? 3000), env: process.env.NODE_ENV ?? 'dev' };
}
