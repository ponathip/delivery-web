import Link from "next/link";

const links = [
  { title: "หน้าแรก", href: "/", desc: "Customer home" },
  { title: "หน้าร้าน", href: "/store", desc: "Store detail" },
  { title: "เมนูทั้งหมด", href: "/products", desc: "Product list" },
  { title: "ตะกร้า", href: "/cart", desc: "Cart page" },
  { title: "Checkout", href: "/checkout", desc: "Place order" },
  { title: "ติดตามออเดอร์", href: "/orders/1", desc: "Order tracking" },
  { title: "Admin Dashboard", href: "/admin", desc: "Store dashboard" },
  { title: "Admin Orders", href: "/admin/orders", desc: "Manage orders" },
  { title: "Admin Products", href: "/admin/products", desc: "Manage products" },
  { title: "Rider", href: "/rider", desc: "Delivery rider flow" },
  { title: "Partner", href: "/partner", desc: "Join store page" },
];

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto min-h-screen max-w-md bg-white px-5 py-6 shadow-xl">
        <h1 className="text-2xl font-bold text-gray-900">Delivery UI Demo</h1>
        <p className="mt-1 text-sm text-gray-500">
          รวมหน้าสำหรับให้ partner กดดู
        </p>

        <div className="mt-6 space-y-3">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-3xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              <p className="font-bold text-gray-900">{item.title}</p>
              <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}