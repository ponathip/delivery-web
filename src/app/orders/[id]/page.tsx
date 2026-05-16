import Link from "next/link";

const steps = [
  {
    title: "ร้านรับออเดอร์แล้ว",
    desc: "ร้านกำลังตรวจสอบรายการ",
    active: true,
  },
  {
    title: "กำลังเตรียมอาหาร",
    desc: "ร้านกำลังทำอาหาร",
    active: true,
  },
  {
    title: "กำลังจัดส่ง",
    desc: "ไรเดอร์กำลังเดินทาง",
    active: false,
  },
  {
    title: "จัดส่งสำเร็จ",
    desc: "ลูกค้าได้รับสินค้าแล้ว",
    active: false,
  },
];

export default function OrderTrackingPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto min-h-screen max-w-md bg-white pb-32 shadow-xl">
        <div className="bg-orange-500 px-5 pb-6 pt-6 text-white rounded-b-[32px]">
          <p className="text-sm opacity-90">Tracking Order</p>

          <h1 className="mt-1 text-2xl font-bold">
            #ORD-000128
          </h1>

          <p className="mt-2 text-sm opacity-90">
            เวลาประมาณจัดส่ง 30-40 นาที
          </p>
        </div>

        <div className="px-5 py-6">
          <div className="rounded-3xl bg-orange-50 p-5">
            <p className="text-sm text-orange-700">
              📍 จุดจัดส่ง
            </p>

            <p className="mt-1 font-bold text-gray-900">
              โรงงาน A - หน้า รปภ.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`h-5 w-5 rounded-full ${
                      step.active
                        ? "bg-orange-500"
                        : "bg-gray-300"
                    }`}
                  />

                  {index !== steps.length - 1 && (
                    <div
                      className={`mt-1 h-16 w-1 rounded-full ${
                        step.active
                          ? "bg-orange-200"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>

                <div className="-mt-1">
                  <h3
                    className={`font-bold ${
                      step.active
                        ? "text-gray-900"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`mt-1 text-sm ${
                      step.active
                        ? "text-gray-500"
                        : "text-gray-400"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-gray-900">
              รายการสินค้า
            </h2>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">
                  กะเพราหมูสับ x2
                </span>

                <span className="font-bold text-gray-700">
                  ฿110
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700">
                  ชาเย็น x1
                </span>

                <span className="font-bold text-gray-700">
                  ฿30
                </span>
              </div>
            </div>

            <div className="mt-5 border-t pt-4 flex items-center justify-between">
              <span className="font-bold text-gray-900">
                รวมทั้งหมด
              </span>

              <span className="text-xl font-bold text-orange-600">
                ฿170
              </span>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 border-t bg-white px-5 py-3">
          <Link
            href="/"
            className="block rounded-2xl bg-orange-500 py-4 text-center font-bold text-white shadow-lg"
          >
            กลับหน้าแรก
          </Link>
        </div>
      </section>
    </main>
  );
}