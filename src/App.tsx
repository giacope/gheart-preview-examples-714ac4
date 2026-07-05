import Button from './components/Button';
import Card from './components/Card';

export default function App() {
  return (
    <main className="app">
      <h1>Acme Console</h1>
      <p>A tiny app that exists to be previewed.</p>
      <Card title="Starter" price="$0" />
      <Card title="Pro" price="$29" />
      <Button label="Get started" />
    </main>
  );
}
