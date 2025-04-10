import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl">My Portfolio</h1>
      <Navigation />
    </header>
  );
}
