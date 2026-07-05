export default function Card({ title, price }: { title: string; price: string }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <span className="price">{price}</span>
    </div>
  );
}

export function PricingGrid() {
  const tiers = [
    { title: 'Starter', price: '$0' },
    { title: 'Pro', price: '$29' },
    { title: 'Scale', price: '$99' },
  ];
  return <div className="grid">{tiers.map((t) => <Card key={t.title} {...t} />)}</div>;
}
