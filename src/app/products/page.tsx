import Image from "next/image";

const products = [
  { name: "ข้าวกะเพราหมูสับ", price: 55, image: "/demo/krapao.jpg", category: "อาหาร" },
  { name: "ข้าวไก่ทอด", price: 50, image: "/demo/fried-chicken.jpg", category: "อาหาร" },
  { name: "ชาเขียว", price: 30, image: "/demo/tea.webp", category: "เครื่องดื่ม" },
  { name: "น้ำเปล่า", price: 10, image: "/demo/water.webp", category: "เครื่องดื่ม" },
  { name: "ก๋วยเตี๋ยว", price: 20, image: "/demo/kaytel.jpg", category: "อาหาร" },
  { name: "ไก่ตุ๋นไวน์แดง", price: 15, image: "/demo/red-wine-chicken-stew.jpg", category: "อาหาร" },
  { name: "ล็อบสเตอร์อบชีส", price: 15, image: "/demo/baked-lobster-with-cheese.jpg", category: "อาหาร" },
  { name: "ออสเซียตราคาเวียร์", price: 15, image: "/demo/caverl.jpg", category: "อาหาร" },
  { name: "ทรัฟเฟิลชีท", price: 15, image: "/demo/Truffle.jpg", category: "อาหาร" },
  { name: "ไอศครีมทองคำ", price: 15, image: "/demo/icescremgold.jpg", category: "อาหาร" },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto max-w-md min-h-screen bg-white shadow-xl pb-24">
        <div className="bg-orange-500 px-5 pt-6 pb-6 text-white rounded-b-[32px]">
          <a href="/" className="text-sm opacity-90">← กลับหน้าแรก</a>
          <h1 className="mt-3 text-2xl font-bold">เมนูทั้งหมด</h1>
          <p className="text-sm opacity-90">อาหาร เครื่องดื่ม และของใช้ในร้าน</p>

          <div className="mt-5 rounded-2xl bg-white p-3 text-gray-800 shadow-lg">
            <input
              className="w-full outline-none"
              placeholder="ค้นหาสินค้า..."
            />
          </div>
        </div>

        <div className="px-5 py-5">
          <div className="mb-4 flex gap-2 overflow-x-auto">
            {["ทั้งหมด", "อาหาร", "เครื่องดื่ม", "ของชำ", "ของใช้"].map((item) => (
              <button
                key={item}
                className="shrink-0 rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-orange-600"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-3xl border border-gray-100 bg-white p-3 shadow-sm"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={160}
                  className="h-28 w-full rounded-2xl object-cover"
                />

                <p className="mt-3 text-xs font-bold text-orange-600">
                  {product.category}
                </p>

                <h3 className="mt-1 min-h-10 font-bold text-gray-900">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center justify-between">
                  <p className="font-bold text-orange-600">฿{product.price}</p>
                  <button className="h-9 w-9 rounded-full bg-orange-500 text-xl text-white shadow-md">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 bg-white border-t px-5 py-3">
          <a
            href="/cart"
            className="block w-full rounded-2xl bg-orange-500 py-4 text-center font-bold text-white shadow-lg"
          >
            ดูตะกร้า
          </a>
        </div>
      </section>
    </main>
  );
}