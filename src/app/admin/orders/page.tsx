"use client";

import { useEffect, useState } from "react";
import AdminBottomNav from "../../../components/AdminBottomNav";

const orders = [
  {
    code: "#ORD-000128",
    customer: "สมชาย",
    phone: "089-xxx-xxxx",
    total: 170,
    status: "รอรับออเดอร์",
    items: "กะเพรา 2, ชาเย็น 1, น้ำเปล่า 1",
  },
  {
    code: "#ORD-000129",
    customer: "โรงงาน A",
    phone: "081-xxx-xxxx",
    total: 95,
    status: "กำลังเตรียม",
    items: "ข้าวไก่ทอด 1, น้ำเปล่า 2",
  },
  {
    code: "#ORD-000130",
    customer: "คุณแนน",
    phone: "086-xxx-xxxx",
    total: 220,
    status: "กำลังจัดส่ง",
    items: "ข้าวกล่อง 4",
  },
];

export default function AdminOrdersPage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="mx-auto min-h-screen max-w-md bg-white pb-32 shadow-xl">
        <div className="bg-orange-500 px-5 pt-6 pb-6 text-white rounded-b-[32px]">
          <p className="text-sm opacity-90">Store Admin</p>
          <h1 className="text-2xl font-bold">ออเดอร์ร้าน</h1>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white/20 p-3 text-center">
              <p className="text-xl font-bold">12</p>
              <p className="text-xs">วันนี้</p>
            </div>
            <div className="rounded-2xl bg-white/20 p-3 text-center">
              <p className="text-xl font-bold">฿2,450</p>
              <p className="text-xs">ยอดขาย</p>
            </div>
            <div className="rounded-2xl bg-white/20 p-3 text-center">
              <p className="text-xl font-bold">3</p>
              <p className="text-xs">รอรับ</p>
            </div>
          </div>
        </div>

        <div className="px-5 py-5">
          <div className="mb-4 flex gap-2 overflow-x-auto">
            {["ทั้งหมด", "รอรับ", "กำลังเตรียม", "จัดส่ง", "สำเร็จ"].map(
              (item) => (
                <button
                  key={item}
                  className="shrink-0 rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-orange-600"
                >
                  {item}
                </button>
              )
            )}
          </div>

          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.code}
                className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-gray-900">{order.code}</p>
                    <p className="text-sm text-gray-500">
                      {order.customer} • {order.phone}
                    </p>
                  </div>

                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
                    {order.status}
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-600">{order.items}</p>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold text-orange-600">
                    ฿{order.total}
                  </p>

                  <div className="flex gap-2">
                    <button className="rounded-xl bg-gray-100 px-3 py-2 text-sm font-bold text-gray-700">
                      รายละเอียด
                    </button>
                    <button className="rounded-xl bg-orange-500 px-3 py-2 text-sm font-bold text-white">
                      รับออเดอร์
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showPopup && (
          <div className="fixed left-1/2 top-5 z-50 w-full max-w-md -translate-x-1/2 px-5">
            <div className="animate-bounce rounded-3xl bg-orange-500 p-5 text-white shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm opacity-90">
                    🔔 ออเดอร์ใหม่
                  </p>

                  <h2 className="mt-1 text-xl font-bold">
                    #ORD-000130
                  </h2>

                  <p className="mt-1 text-sm opacity-90">
                    ลูกค้าใหม่ • ฿220
                  </p>
                </div>

                <button
                  onClick={() => setShowPopup(false)}
                  className="text-xl"
                >
                  ✕
                </button>
              </div>

              <button className="mt-4 w-full rounded-2xl bg-white py-3 font-bold text-orange-600">
                รับออเดอร์
              </button>
            </div>
          </div>
        )}

        <AdminBottomNav />
      </section>
    </main>
  );
}