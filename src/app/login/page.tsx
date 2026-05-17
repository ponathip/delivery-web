import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto flex min-h-screen max-w-md flex-col justify-center bg-white px-5 shadow-xl">
        <div className="mb-10 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 text-5xl">
            🛵
          </div>

          <h1 className="mt-5 text-3xl font-bold text-gray-900">
            ยินดีต้อนรับ
          </h1>

          <p className="mt-2 text-gray-500">
            เข้าสู่ระบบเพื่อสั่งอาหารและติดตามออเดอร์
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="เบอร์โทรศัพท์"
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
          />

          <input
            type="password"
            placeholder="รหัสผ่าน"
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
          />

          <button className="w-full rounded-2xl bg-orange-500 py-4 font-bold text-white shadow-lg">
            เข้าสู่ระบบ
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            ยังไม่มีบัญชี?
          </p>

          <Link
            href="/register"
            className="mt-2 inline-block font-bold text-orange-600"
          >
            สมัครสมาชิก
          </Link>
        </div>

        <div className="mt-10 rounded-3xl bg-orange-50 p-5">
          <p className="text-sm text-orange-700">
            📍 ส่งอาหารในพื้นที่โรงงานใกล้คุณ
          </p>
        </div>
      </section>
    </main>
  );
}