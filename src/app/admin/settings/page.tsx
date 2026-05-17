import Image from "next/image";
import AdminBottomNav from "../../../components/AdminBottomNav";

export default function AdminSettingsPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="mx-auto min-h-screen max-w-md bg-white pb-28 shadow-xl">
        <div className="rounded-b-[32px] bg-orange-500 px-5 pb-6 pt-6 text-white">
          <p className="text-sm opacity-90">Store Settings</p>
          <h1 className="text-2xl font-bold">ตั้งค่าร้าน</h1>
        </div>

        <div className="px-5 py-5 space-y-5">
          <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm">
            <h2 className="mb-3 font-bold text-gray-900">รูปหน้าร้าน</h2>

            <Image
              src="/demo/store-cover.jpg"
              alt="store cover"
              width={500}
              height={220}
              className="h-40 w-full rounded-2xl object-cover"
            />

            <button className="mt-3 w-full rounded-2xl bg-gray-100 py-3 font-bold text-gray-700">
              เปลี่ยนรูปหน้าร้าน
            </button>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm">
            <h2 className="mb-3 font-bold text-gray-900">ข้อมูลร้าน</h2>

            <input
              defaultValue="ครัวเอ๊ะ"
              className="mb-3 w-full rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 outline-none"
            />

            <input
              defaultValue="อาหารตามสั่ง เครื่องดื่ม และของใช้"
              className="mb-3 w-full rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 outline-none"
            />

            <input
              defaultValue="089-xxx-xxxx"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 outline-none"
            />
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm">
            <h2 className="mb-3 font-bold text-gray-900">เวลาเปิด-ปิด</h2>

            <div className="grid grid-cols-2 gap-3">
              <input
                defaultValue="08:00"
                className="rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 outline-none"
              />
              <input
                defaultValue="20:00"
                className="rounded-2xl border border-gray-200 px-4 py-3 text-gray-900 outline-none"
              />
            </div>
          </div>

          <button className="w-full rounded-2xl bg-orange-500 py-4 font-bold text-white shadow-lg">
            บันทึกการตั้งค่า
          </button>
        </div>

        <AdminBottomNav />
      </section>
    </main>
  );
}