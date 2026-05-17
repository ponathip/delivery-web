import Image from "next/image";
import Link from "next/link";
import CustomerBottomNav from "../../components/CustomerBottomNav";

const products = [
  {
    id: 1,
    name: "ข้าวกะเพราหมูสับ",
    price: 55,
    image: "/demo/krapao.jpg",
  },
  {
    id: 2,
    name: "ข้าวไก่ทอด",
    price: 50,
    image: "/demo/fried-chicken.jpg",
  },
  {
    id: 3,
    name: "ชาเขียว",
    price: 30,
    image: "/demo/tea.webp",
  },
];

export default function StorePage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto min-h-screen max-w-md bg-white pb-40 shadow-xl">
        <div className="relative">
          <Image
            src="/demo/store-cover.png"
            alt="store"
            width={600}
            height={300}
            className="h-50 w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-5 left-5 text-white">
            <h1 className="text-3xl font-bold">ครัวเอ๊ะ</h1>

            <p className="mt-1 text-sm">
              ⭐ 4.8 · 30-40 นาที · ส่งเริ่มต้น ฿10
            </p>
          </div>
        </div>

        <div className="px-5 py-5">
          <div className="rounded-3xl bg-orange-50 p-4">
            <p className="text-sm text-orange-700">
              📍 ส่งในพื้นที่โรงงานใกล้เคียง
            </p>

            <p className="mt-1 text-sm text-gray-600">
              เปิดทุกวัน 08:00 - 20:00
            </p>
          </div>

          <div className="sticky top-0 z-20 mt-6 flex gap-2 overflow-x-auto bg-white py-3 hide-scrollbar">
            {["ทั้งหมด", "อาหาร", "เครื่องดื่ม", "ของหวาน"].map(
              (item) => (
                <button
                  key={item}
                  className="shrink-0 rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700"
                >
                  {item}
                </button>
              )
            )}
          </div>

          <div className="mt-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900">
                อาหาร
            </h2>
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-xl font-bold text-gray-900">
                เครื่องดื่ม
            </h2>
          </div>

          <div className="space-y-4">
            {products.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="flex gap-3 rounded-3xl border border-gray-100 bg-white p-3 shadow-sm"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="h-24 w-24 rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    พร้อมส่งวันนี้
                  </p>

                  <p className="mt-2 font-bold text-orange-600">
                    ฿{product.price}
                  </p>
                </div>

                <div className="flex items-end">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-xl text-white">
                    +
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="fixed bottom-20 left-1/2 z-40 w-full max-w-md -translate-x-1/2 px-5">
            <a
                href="/cart"
                className="flex items-center justify-between rounded-2xl bg-orange-500 px-5 py-4 font-bold text-white shadow-lg"
            >
                <span>🛒 ตะกร้า 3 รายการ</span>
                <span>฿170</span>
            </a>
        </div>

        <CustomerBottomNav />
      </section>
    </main>
  );
}