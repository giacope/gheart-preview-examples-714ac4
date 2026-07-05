import Button from './components/Button';
import { PricingGrid } from './components/Card';

export default function App() {
  return (
    <main className="app">
      <h1>Acme Console</h1>
      <p>Pick a plan that scales with you.</p>
      <PricingGrid />
      <Button label="Get started" />
    </main>
  );
}
