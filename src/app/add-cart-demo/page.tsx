import Link from "next/link";

export default function AddCartDemoPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto flex min-h-screen max-w-md flex-col justify-center bg-white px-5 text-center shadow-xl">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 text-5xl">
          🛒
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          เพิ่มลงตะกร้าแล้ว
        </h1>

        <p className="mt-3 text-gray-500">
          สินค้าถูกเพิ่มลงตะกร้าเรียบร้อย
        </p>

        <div className="mt-8 space-y-3">
          <Link
            href="/cart"
            className="block rounded-2xl bg-orange-500 py-4 font-bold text-white shadow-lg"
          >
            ไปที่ตะกร้า
          </Link>

          <Link
            href="/products"
            className="block rounded-2xl bg-gray-100 py-4 font-bold text-gray-700"
          >
            เลือกสินค้าเพิ่ม
          </Link>
        </div>
      </section>
    </main>
  );
}