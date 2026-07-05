import type { Request, Response } from 'express';

export function listUsers(_req: Request, res: Response): void {
  res.json({ users: [] });
}

export function getUser(req: Request, res: Response): void {
  res.json({ id: req.params.id, name: 'Ada' });
}
