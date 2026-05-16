import Image from "next/image";
import BottomNav from "../../../components/BottomNav";

const products = [
  { name: "ข้าวกะเพราหมูสับ", price: 55, image: "/demo/krapao.jpg", active: true },
  { name: "ข้าวไก่ทอด", price: 50, image: "/demo/fried-chicken.jpg", active: true },
  { name: "ชาเขียว", price: 30, image: "/demo/tea.webp", active: true },
  { name: "น้ำเปล่า", price: 10, image: "/demo/water.webp", active: false },
];

export default function AdminProductsPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="mx-auto min-h-screen max-w-md bg-white pb-28 shadow-xl">
        <div className="rounded-b-[32px] bg-orange-500 px-5 pb-6 pt-6 text-white">
          <p className="text-sm opacity-90">Store Admin</p>
          <h1 className="text-2xl font-bold">จัดการสินค้า</h1>
          <p className="text-sm opacity-90">เพิ่มสินค้า ปิดของหมด และแก้ราคา</p>
        </div>

        <div className="px-5 py-5">
          <button className="mb-5 w-full rounded-2xl bg-orange-500 py-4 font-bold text-white shadow-lg">
            + เพิ่มสินค้า
          </button>

          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex gap-3 rounded-3xl border border-gray-100 bg-white p-3 shadow-sm"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={90}
                  height={90}
                  className="h-20 w-20 rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{product.name}</h3>
                  <p className="mt-1 font-bold text-orange-600">฿{product.price}</p>

                  <span
                    className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-bold ${
                      product.active
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {product.active ? "เปิดขาย" : "ปิดขาย"}
                  </span>
                </div>

                <button className="self-center rounded-xl bg-gray-100 px-3 py-2 text-sm font-bold text-gray-700">
                  แก้ไข
                </button>
              </div>
            ))}
          </div>
        </div>

        <BottomNav />
      </section>
    </main>
  );
}