export default function Card({ title, price }: { title: string; price: string }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <span className="price">{price}</span>
    </div>
  );
}
