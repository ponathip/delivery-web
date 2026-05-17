import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto flex min-h-screen max-w-md flex-col justify-center bg-white px-5 shadow-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 text-5xl">
            🍱
          </div>

          <h1 className="mt-5 text-3xl font-bold text-gray-900">
            สมัครสมาชิก
          </h1>

          <p className="mt-2 text-gray-500">
            สร้างบัญชีเพื่อสั่งอาหารและติดตามออเดอร์
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="ชื่อ - นามสกุล"
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
          />

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

          <input
            type="password"
            placeholder="ยืนยันรหัสผ่าน"
            className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-gray-900 placeholder:text-gray-400 outline-none"
          />

          <Link
            href="/"
            className="block w-full rounded-2xl bg-orange-500 py-4 text-center font-bold text-white shadow-lg"
          >
            สมัครสมาชิก
          </Link>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">มีบัญชีแล้ว?</p>

          <Link
            href="/login"
            className="mt-2 inline-block font-bold text-orange-600"
          >
            เข้าสู่ระบบ
          </Link>
        </div>
      </section>
    </main>
  );
}