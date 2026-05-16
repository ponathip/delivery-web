import Image from "next/image";

const cartItems = [
  { name: "ข้าวกะเพราหมูสับ", price: 55, qty: 2, image: "/demo/krapao.jpg" },
  { name: "ชาเขียว", price: 30, qty: 1, image: "/demo/tea.webp" },
  { name: "น้ำเปล่า", price: 10, qty: 1, image: "/demo/water.webp" },
];

export default function CartPage() {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );
  const deliveryFee = 20;
  const grandTotal = subtotal + deliveryFee;

  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto max-w-md min-h-screen bg-white shadow-xl pb-32">
        <div className="px-5 pt-6 pb-4">
          <h1 className="text-2xl font-bold text-gray-900">ตะกร้าของฉัน</h1>
          <p className="text-sm text-gray-500">ตรวจสอบรายการก่อนสั่งซื้อ</p>
        </div>

        <div className="px-5 space-y-3">
          {cartItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 rounded-3xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={160}
                className="h-28 w-full rounded-2xl object-cover"
              />

              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  ฿{item.price} x {item.qty}
                </p>
                <p className="mt-1 font-bold text-orange-600">
                  ฿{item.price * item.qty}
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-gray-50 px-3 py-2">
                <button className="font-bold text-gray-500">-</button>
                <span className="font-bold">{item.qty}</span>
                <button className="font-bold text-orange-600">+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 px-5">
          <div className="rounded-3xl bg-gray-50 p-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">ค่าอาหาร/สินค้า</span>
              <span className="font-bold text-gray-500">฿{subtotal}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">ค่าส่ง</span>
              <span className="font-bold text-gray-500">฿{deliveryFee}</span>
            </div>

            <div className="border-t pt-3 flex justify-between">
              <span className="font-bold text-gray-900">รวมทั้งหมด</span>
              <span className="text-xl font-bold text-orange-600">
                ฿{grandTotal}
              </span>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 bg-white border-t px-5 py-3">
          <a
            href="/checkout"
            className="block w-full rounded-2xl bg-orange-500 py-4 text-center font-bold text-white shadow-lg"
          >
            ไปหน้าชำระเงิน
          </a>
        </div>
      </section>
    </main>
  );
}
