import Link from "next/link";

const orders = [
  {
    id: 1,
    code: "#ORD-000128",
    customer: "โรงงาน A",
    total: 170,
    distance: "1.2 km",
  },
  {
    id: 2,
    code: "#ORD-000129",
    customer: "โรงงาน B",
    total: 95,
    distance: "2.4 km",
  },
];

export default function RiderPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto min-h-screen max-w-md bg-white pb-24 shadow-xl">
        <div className="rounded-b-[32px] bg-orange-500 px-5 pb-6 pt-6 text-white">
          <p className="text-sm opacity-90">Rider App</p>

          <h1 className="text-2xl font-bold">
            งานจัดส่ง
          </h1>

          <p className="mt-1 text-sm opacity-90">
            ออเดอร์พร้อมจัดส่งในพื้นที่
          </p>
        </div>

        <div className="space-y-4 px-5 py-5">
          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-bold text-gray-900">
                    {order.code}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    📍 {order.customer}
                  </p>
                </div>

                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                  {order.distance}
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between border-t pt-4">
                <div>
                  <p className="text-sm text-gray-500">
                    รายได้งานนี้
                  </p>

                  <p className="font-bold text-orange-600">
                    ฿{order.total}
                  </p>
                </div>

                <Link
                  href={`/rider/${order.id}`}
                  className="rounded-2xl bg-orange-500 px-5 py-3 font-bold text-white"
                >
                  รับงาน
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}