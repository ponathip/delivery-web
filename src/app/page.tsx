import Image from "next/image";
import BottomNav from "../components/BottomNav";

const products = [
  {
    name: "ข้าวกะเพราหมูสับ",
    price: 55,
    image: "/demo/krapao.jpg",
    desc: "อาหารตามสั่ง",
  },
  {
    name: "ข้าวไก่ทอด",
    price: 50,
    image: "/demo/fried-chicken.jpg",
    desc: "กรอบนอกนุ่มใน",
  },
  {
    name: "ชาเขียว",
    price: 30,
    image: "/demo/tea.webp",
    desc: "เย็นสดชื่น",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fff4e8]">
      <section className="mx-auto min-h-screen max-w-md bg-white pb-24 shadow-xl">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 px-5 pb-6 pt-5 text-white">
          <p className="text-sm">📍 โรงงาน A - หน้า รปภ.</p>

          <div className="mt-4 rounded-2xl bg-white px-4 py-3 shadow">
            <input
              className="w-full text-gray-900 placeholder:text-gray-400 outline-none"
              placeholder="ค้นหาร้าน / เมนู"
            />
          </div>

          <div className="relative mt-5 overflow-hidden rounded-3xl bg-orange-900 p-5">
            <div className="relative z-10 max-w-[55%]">
              <h1 className="text-2xl font-extrabold leading-tight">
                สั่งง่าย ส่งไว อิ่มคุ้มทุกมื้อ
              </h1>
              <p className="mt-2 text-sm text-orange-100">
                ส่งตรงถึงโรงงานใกล้คุณ
              </p>
            </div>

            <Image
              src="/demo/banner-food.png"
              alt="food banner"
              width={220}
              height={160}
              className="absolute bottom-0 right-0 h-full w-[50%] object-cover"
            />
          </div>
        </div>

        <div className="px-5 py-5">
          <div className="grid grid-cols-4 gap-3">
            {[
              ["อาหาร", "🍛"],
              ["เครื่องดื่ม", "🥤"],
              ["ของว่าง", "🥐"],
              ["ของใช้", "🧴"],
            ].map(([label, icon]) => (
              <button key={label} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-3xl">
                  {icon}
                </div>
                <p className="mt-2 text-xs font-bold text-gray-700">{label}</p>
              </button>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">ร้านแนะนำ</h2>
            <a href="/products" className="text-sm font-bold text-orange-600">
              ดูทั้งหมด ›
            </a>
          </div>

          <a
            href="/products"
            className="mt-3 flex overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm"
          >
            <Image
              src="/demo/krapao.jpg"
              alt="store"
              width={130}
              height={130}
              className="h-32 w-32 object-cover"
            />

            <div className="flex-1 p-4">
              <h3 className="font-bold text-gray-900">ครัวเอ๊ะ</h3>
              <p className="text-sm text-gray-500">อาหารตามสั่ง</p>
              <p className="mt-2 text-sm text-gray-600">⭐ 4.8 · 30-40 นาที</p>
              <p className="mt-1 text-sm font-bold text-orange-600">
                เริ่มต้น ฿10
              </p>
            </div>
          </a>

          <h2 className="mt-7 font-bold text-gray-900">เมนูขายดี</h2>

          <div className="mt-3 space-y-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex items-center gap-3 rounded-3xl border border-gray-100 bg-white p-3 shadow-sm"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.desc}</p>
                  <p className="mt-1 font-bold text-orange-600">
                    ฿{product.price}
                  </p>
                </div>

                <button className="h-9 w-9 rounded-full bg-orange-500 text-xl font-bold text-white">
                  +
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