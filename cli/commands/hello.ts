export function hello(args: string[]): void {
  const name = args[0] ?? 'world';
  console.log(`Hello, ${name}!`);
}
