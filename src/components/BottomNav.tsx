const navItems = [
  { href: "/", label: "หน้าแรก", icon: "🏠" },
  { href: "/products", label: "เมนู", icon: "🍱" },
  { href: "/cart", label: "ตะกร้า", icon: "🛒" },
  { href: "/admin/orders", label: "ร้าน", icon: "📋" },
];

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-1/2 z-50 w-full max-w-md -translate-x-1/2 border-t bg-white px-3 py-2">
      <div className="grid grid-cols-4">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex flex-col items-center justify-center rounded-2xl py-2 text-xs font-bold text-gray-500 hover:bg-orange-50 hover:text-orange-600"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="mt-1">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}