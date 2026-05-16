export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto flex min-h-screen max-w-md flex-col justify-center bg-white px-5 text-center shadow-xl">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 text-5xl">
          ✅
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          สั่งซื้อสำเร็จ
        </h1>

        <p className="mt-3 text-gray-500">
          ร้านได้รับออเดอร์ของคุณแล้ว กรุณารอการยืนยันจากร้าน
        </p>

        <div className="mt-8 rounded-3xl bg-gray-50 p-5 text-left">
          <div className="flex justify-between">
            <span className="text-gray-500">เลขออเดอร์</span>
            <span className="font-bold text-gray-900">#ORD-000128</span>
          </div>

          <div className="mt-3 flex justify-between">
            <span className="text-gray-500">สถานะ</span>
            <span className="font-bold text-orange-600">รอร้านรับออเดอร์</span>
          </div>

          <div className="mt-3 flex justify-between">
            <span className="text-gray-500">ยอดรวม</span>
            <span className="font-bold text-gray-900">฿170</span>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <a
            href="/"
            className="block rounded-2xl bg-orange-500 py-4 font-bold text-white shadow-lg"
          >
            กลับหน้าแรก
          </a>

          <a
            href="/admin/orders"
            className="block rounded-2xl bg-gray-100 py-4 font-bold text-gray-700"
          >
            ดูหน้าออเดอร์ร้าน
          </a>
        </div>
      </section>
    </main>
  );
}