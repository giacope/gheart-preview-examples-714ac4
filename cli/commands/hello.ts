export function hello(args: string[]): void {
  const json = args.includes('--json');
  const name = args.find((a) => !a.startsWith('--')) ?? 'world';
  if (json) console.log(JSON.stringify({ greeting: `Hello, ${name}!` }));
  else console.log(`Hello, ${name}!`);
}
