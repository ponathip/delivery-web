import CustomerBottomNav from "../../components/CustomerBottomNav";

const notifications = [
  {
    title: "ร้านรับออเดอร์แล้ว",
    desc: "ครัวเอ๊ะกำลังเตรียมอาหารของคุณ",
    time: "2 นาทีที่แล้ว",
    icon: "🍱",
  },
  {
    title: "ไรเดอร์กำลังเดินทาง",
    desc: "ไรเดอร์กำลังไปยังจุดจัดส่ง",
    time: "10 นาทีที่แล้ว",
    icon: "🛵",
  },
  {
    title: "จัดส่งสำเร็จ",
    desc: "ออเดอร์ของคุณถูกจัดส่งเรียบร้อย",
    time: "เมื่อวาน",
    icon: "✅",
  },
];

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto min-h-screen max-w-md bg-white pb-28 shadow-xl">
        <div className="rounded-b-[32px] bg-orange-500 px-5 pb-6 pt-6 text-white">
          <p className="text-sm opacity-90">Notifications</p>

          <h1 className="text-2xl font-bold">
            การแจ้งเตือน
          </h1>
        </div>

        <div className="space-y-3 px-5 py-5">
          {notifications.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-3xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl">
                {item.icon}
              </div>

              <div className="flex-1">
                <h2 className="font-bold text-gray-900">
                  {item.title}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {item.desc}
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <CustomerBottomNav />
      </section>
    </main>
  );
}