import Button from './components/Button';
import Card from './components/Card';
import Toggle from './components/Toggle';

export default function App() {
  return (
    <main className="app dark">
      <header className="topbar">
        <h1>Acme Console</h1>
        <Toggle />
      </header>
      <p>A tiny app that exists to be previewed.</p>
      <Card title="Starter" price="$0" />
      <Card title="Pro" price="$29" />
      <Button label="Get started" />
    </main>
  );
}
