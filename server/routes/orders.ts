import type { Request, Response } from 'express';

export function listOrders(_req: Request, res: Response): void {
  res.json({ orders: [] });
}

export function createOrder(req: Request, res: Response): void {
  const { item } = req.body as { item: string };
  res.status(201).json({ id: 1001, item, ok: true });
}
