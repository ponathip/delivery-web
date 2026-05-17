import Link from "next/link";

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto min-h-screen max-w-md bg-white px-5 py-8 shadow-xl">
        <div className="rounded-[32px] bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white">
          <p className="text-sm opacity-90">For Local Stores</p>
          <h1 className="mt-2 text-3xl font-bold">
            เข้าร่วมเป็นร้านค้ากับเรา
          </h1>
          <p className="mt-3 text-sm opacity-90">
            เพิ่มช่องทางขายอาหารและสินค้าให้ลูกค้าในพื้นที่โรงงาน
          </p>
        </div>

        <div className="mt-6 space-y-3">
          {[
            ["📦", "รับออเดอร์ออนไลน์", "ลูกค้าสั่งผ่านเว็บได้ทันที"],
            ["🛵", "จัดส่งในพื้นที่", "รองรับเดลิเวอรี่ใกล้ร้าน"],
            ["📊", "ดูยอดขาย", "มีแดชบอร์ดสำหรับร้านค้า"],
            ["🍱", "จัดการเมนู", "เพิ่ม/แก้ไข/ปิดขายสินค้าได้"],
          ].map(([icon, title, desc]) => (
            <div
              key={title}
              className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="text-3xl">{icon}</div>
              <h2 className="mt-3 font-bold text-gray-900">{title}</h2>
              <p className="mt-1 text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl bg-orange-50 p-5">
          <h2 className="font-bold text-gray-900">เหมาะสำหรับ</h2>
          <p className="mt-2 text-sm text-gray-600">
            ร้านอาหาร ร้านน้ำ ร้านของชำ และร้านค้าใกล้โรงงานที่อยากเพิ่มยอดขาย
          </p>
        </div>

        <Link
          href="/"
          className="mt-6 block rounded-2xl bg-orange-500 py-4 text-center font-bold text-white shadow-lg"
        >
          กลับหน้าแรก
        </Link>
      </section>
    </main>
  );
}