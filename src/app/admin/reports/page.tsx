import AdminBottomNav from "../../../components/AdminBottomNav";

const topProducts = [
  { name: "ข้าวกะเพราหมูสับ", qty: 42, total: 2310 },
  { name: "ข้าวไก่ทอด", qty: 31, total: 1550 },
  { name: "ชาเย็น", qty: 28, total: 840 },
];

export default function AdminReportsPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="mx-auto min-h-screen max-w-md bg-white pb-28 shadow-xl">
        <div className="rounded-b-[32px] bg-orange-500 px-5 pb-6 pt-6 text-white">
          <p className="text-sm opacity-90">Store Reports</p>
          <h1 className="text-2xl font-bold">รายงานยอดขาย</h1>
          <p className="text-sm opacity-90">สรุปภาพรวมวันนี้</p>
        </div>

        <div className="grid grid-cols-2 gap-3 px-5 py-5">
          <div className="rounded-3xl bg-white p-4 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">ยอดขายวันนี้</p>
            <p className="mt-2 text-2xl font-bold text-orange-600">฿5,320</p>
          </div>

          <div className="rounded-3xl bg-white p-4 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">ออเดอร์วันนี้</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">36</p>
          </div>
        </div>

        <div className="px-5">
          <div className="rounded-3xl bg-orange-50 p-5">
            <p className="text-sm font-bold text-orange-700">ช่วงเวลาขายดี</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">11:00 - 13:00</p>
            <p className="mt-1 text-sm text-gray-500">เหมาะกับรอบส่งมื้อกลางวัน</p>
          </div>
        </div>

        <div className="px-5 mt-5">
          <h2 className="mb-3 font-bold text-gray-900">สินค้าขายดี</h2>

          <div className="space-y-3">
            {topProducts.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-3xl border border-gray-100 bg-white p-4 shadow-sm"
              >
                <div>
                  <p className="font-bold text-gray-900">
                    #{index + 1} {item.name}
                  </p>
                  <p className="text-sm text-gray-500">ขายแล้ว {item.qty} รายการ</p>
                </div>

                <p className="font-bold text-orange-600">฿{item.total}</p>
              </div>
            ))}
          </div>
        </div>

        <AdminBottomNav />
      </section>
    </main>
  );
}