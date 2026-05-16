import BottomNav from "../../components/BottomNav";

const stats = [
  { label: "ยอดขายวันนี้", value: "฿5,320", icon: "💰" },
  { label: "ออเดอร์วันนี้", value: "36", icon: "📦" },
  { label: "รอรับออเดอร์", value: "8", icon: "⏳" },
  { label: "สินค้าใกล้หมด", value: "5", icon: "⚠️" },
];

const latestOrders = [
  { code: "#ORD-000128", customer: "สมชาย", total: 170, status: "รอรับ" },
  { code: "#ORD-000129", customer: "โรงงาน A", total: 95, status: "กำลังเตรียม" },
  { code: "#ORD-000130", customer: "คุณแนน", total: 220, status: "จัดส่ง" },
];

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="mx-auto min-h-screen max-w-md bg-white pb-24 shadow-xl">
        <div className="rounded-b-[32px] bg-orange-500 px-5 pb-6 pt-6 text-white">
          <p className="text-sm opacity-90">Store Admin</p>
          <h1 className="text-2xl font-bold">แดชบอร์ดร้าน</h1>
          <p className="text-sm opacity-90">ภาพรวมยอดขายและออเดอร์วันนี้</p>
        </div>

        <div className="grid grid-cols-2 gap-3 px-5 py-5">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              <div className="mb-3 text-3xl">{item.icon}</div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="mt-1 text-2xl font-bold text-gray-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="px-5">
          <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-bold text-gray-900">ออเดอร์ล่าสุด</h2>
              <a href="/admin/orders" className="text-sm font-bold text-orange-600">
                ดูทั้งหมด
              </a>
            </div>

            <div className="space-y-3">
              {latestOrders.map((order) => (
                <div
                  key={order.code}
                  className="flex items-center justify-between rounded-2xl bg-gray-50 p-3"
                >
                  <div>
                    <p className="font-bold text-gray-900">{order.code}</p>
                    <p className="text-sm text-gray-500">{order.customer}</p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-orange-600">฿{order.total}</p>
                    <p className="text-xs text-gray-500">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <BottomNav />
      </section>
    </main>
  );
}