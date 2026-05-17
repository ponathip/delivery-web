import Link from "next/link";
import CustomerBottomNav from "../../components/CustomerBottomNav";

const orders = [
  {
    id: 1,
    code: "#ORD-000128",
    status: "กำลังเตรียมอาหาร",
    total: 170,
    time: "วันนี้ 12:30",
  },
  {
    id: 2,
    code: "#ORD-000127",
    status: "จัดส่งสำเร็จ",
    total: 95,
    time: "เมื่อวาน 18:10",
  },
];

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto min-h-screen max-w-md bg-white pb-40 shadow-xl">
        <div className="rounded-b-[32px] bg-orange-500 px-5 pb-6 pt-6 text-white">
          <p className="text-sm opacity-90">My Orders</p>
          <h1 className="text-2xl font-bold">ออเดอร์ของฉัน</h1>
        </div>

        <div className="space-y-4 px-5 py-5">
          {orders.map((order) => (
            <Link
              href={`/orders/${order.id}`}
              key={order.id}
              className="block rounded-3xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold text-gray-900">{order.code}</p>
                  <p className="mt-1 text-sm text-gray-500">{order.time}</p>
                </div>

                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                  {order.status}
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between border-t pt-4">
                <span className="text-sm text-gray-500">ยอดรวม</span>
                <span className="text-lg font-bold text-orange-600">
                  ฿{order.total}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <CustomerBottomNav />
      </section>
    </main>
  );
}