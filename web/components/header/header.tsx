export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      {/* Left: Hamburger icon (placeholder) */}
      <button className="text-2xl">☰</button>

      {/* Center: Logo */}
      <h1 className="text-xl font-semibold tracking-wide">SKUDD</h1>

      {/* Right: Cart icon (placeholder) */}
      <button className="text-2xl">🛒</button>
    </header>
  );
}