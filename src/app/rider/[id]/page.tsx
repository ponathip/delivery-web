import Link from "next/link";
import Image from "next/image";

export default function RiderDetailPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto min-h-screen max-w-md bg-white pb-32 shadow-xl">
        <div className="relative h-72 overflow-hidden">
            <Image
                src="/demo/map-demo.png"
                alt="map"
                width={800}
                height={500}
                className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <div className="text-5xl drop-shadow-lg">
                🛵
                </div>

                <div className="mt-2 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-lg">
                กำลังจัดส่ง
                </div>
            </div>
        </div>

        <div className="-mt-8 rounded-t-[32px] bg-white px-5 py-6 relative z-10">
          <h1 className="text-2xl font-bold text-gray-900">#ORD-000128</h1>
          <p className="mt-1 text-sm text-gray-500">กำลังจัดส่งไปยังลูกค้า</p>

          <div className="mt-5 rounded-3xl bg-orange-50 p-5">
            <p className="text-sm text-orange-700">จุดส่ง</p>
            <p className="mt-1 font-bold text-gray-900">โรงงาน A - หน้า รปภ.</p>
            <p className="mt-1 text-sm text-gray-500">โทรก่อนถึง / รับที่ป้อมยาม</p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href="tel:0890000000"
              className="rounded-2xl bg-gray-100 py-4 text-center font-bold text-gray-700"
            >
              โทรหาลูกค้า
            </a>

            <a
              href="https://maps.google.com"
              className="rounded-2xl bg-gray-100 py-4 text-center font-bold text-gray-700"
            >
              เปิดแผนที่
            </a>
          </div>

          <div className="mt-5 rounded-3xl bg-orange-50 p-5">
            <p className="text-sm text-orange-700">
                เวลาถึงโดยประมาณ
            </p>

            <p className="mt-2 text-3xl font-bold text-gray-900">
                12 นาที
            </p>

            <p className="mt-1 text-sm text-gray-500">
                ไรเดอร์อยู่ห่างจากคุณ 1.2 กม.
            </p>
          </div>

          <div className="mt-6 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-gray-900">รายการสินค้า</h2>

            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>กะเพราหมูสับ x2</span>
                <span className="font-bold">฿110</span>
              </div>

              <div className="flex justify-between">
                <span>ชาเย็น x1</span>
                <span className="font-bold">฿30</span>
              </div>

              <div className="flex justify-between">
                <span>ค่าส่ง</span>
                <span className="font-bold">฿30</span>
              </div>
            </div>

            <div className="mt-4 border-t pt-4 flex justify-between">
              <span className="font-bold text-gray-900">รวม</span>
              <span className="text-xl font-bold text-orange-600">฿170</span>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 border-t bg-white px-5 py-3">
            <div className="grid grid-cols-2 gap-3">
                <a
                href="tel:0890000000"
                className="rounded-2xl bg-gray-100 py-4 text-center font-bold text-gray-700"
                >
                โทรลูกค้า
                </a>

                <Link
                href="/rider"
                className="rounded-2xl bg-orange-500 py-4 text-center font-bold text-white shadow-lg"
                >
                ส่งสำเร็จ
                </Link>
            </div>
        </div>
      </section>
    </main>
  );
}