import Image from "next/image";
import Link from "next/link";

const products = {
  "1": {
    name: "ข้าวกะเพราหมูสับ",
    price: 55,
    image: "/demo/krapao.jpg",
    desc: "กะเพราหมูสับร้อน ๆ พร้อมข้าวสวย เหมาะสำหรับมื้อกลางวัน",
  },
  "2": {
    name: "ข้าวไก่ทอด",
    price: 50,
    image: "/demo/fried-chicken.jpg",
    desc: "ไก่ทอดกรอบ เสิร์ฟพร้อมข้าวสวยและน้ำจิ้ม",
  },
};

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products[params.id as keyof typeof products] || products["1"];

  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto min-h-screen max-w-md bg-white shadow-xl pb-32">
        <div className="relative">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={360}
            className="h-72 w-full object-cover"
          />

          <Link
            href="/products"
            className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl shadow"
          >
            ←
          </Link>
        </div>

        <div className="rounded-t-[32px] bg-white px-5 py-6 -mt-8 relative z-10">
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>

          <p className="mt-2 text-gray-500">{product.desc}</p>

          <p className="mt-4 text-2xl font-bold text-orange-600">
            ฿{product.price}
          </p>

          <div className="mt-6">
            <h2 className="mb-3 font-bold text-gray-900">ตัวเลือก</h2>

            {["ไม่เผ็ด", "เผ็ดน้อย", "เผ็ดปกติ", "เผ็ดมาก"].map((item) => (
              <label
                key={item}
                className="mb-3 flex items-center justify-between rounded-2xl bg-gray-50 p-4"
              >
                <span className="font-medium text-gray-700">{item}</span>
                <input type="radio" name="spicy" />
              </label>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="mb-3 font-bold text-gray-900">เพิ่มเติม</h2>

            {[
              { name: "ไข่ดาว", price: 10 },
              { name: "ข้าวเพิ่ม", price: 10 },
              { name: "พิเศษ", price: 15 },
            ].map((item) => (
              <label
                key={item.name}
                className="mb-3 flex items-center justify-between rounded-2xl bg-gray-50 p-4"
              >
                <span className="font-medium text-gray-700">
                  {item.name} +฿{item.price}
                </span>
                <input type="checkbox" />
              </label>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="mb-3 font-bold text-gray-900">หมายเหตุ</h2>
            <textarea
              className="h-24 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none"
              placeholder="เช่น ไม่ใส่ผัก / แยกน้ำปลา / โทรก่อนถึง"
            />
          </div>
        </div>

        <div className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 border-t bg-white px-5 py-3">
          <Link
            href="/add-cart-demo"
            className="block rounded-2xl bg-orange-500 py-4 text-center font-bold text-white shadow-lg"
          >
            เพิ่มลงตะกร้า • ฿{product.price}
          </Link>
        </div>
      </section>
    </main>
  );
}