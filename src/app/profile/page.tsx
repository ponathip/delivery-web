import CustomerBottomNav from "../../components/CustomerBottomNav";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto min-h-screen max-w-md bg-white pb-28 shadow-xl">
        <div className="rounded-b-[32px] bg-orange-500 px-5 pb-6 pt-6 text-white">
          <p className="text-sm opacity-90">My Account</p>
          <h1 className="text-2xl font-bold">บัญชีของฉัน</h1>
        </div>

        <div className="px-5 py-5">
          <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl">
                👤
              </div>

              <div>
                <h2 className="font-bold text-gray-900">คุณลูกค้า</h2>
                <p className="text-sm text-gray-500">089-xxx-xxxx</p>
              </div>
            </div>
          </div>

          <h2 className="mt-6 mb-3 font-bold text-gray-900">จุดจัดส่งประจำ</h2>

          <div className="space-y-3">
            {[
              "โรงงาน A - หน้า รปภ.",
              "โรงงาน B - อาคาร 2",
              "โรงงาน C - จุดพักพนักงาน",
            ].map((address) => (
              <div
                key={address}
                className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm"
              >
                <p className="font-bold text-gray-900">📍 {address}</p>
                <p className="mt-1 text-sm text-gray-500">
                  ใช้เป็นจุดรับสินค้าประจำ
                </p>
              </div>
            ))}
          </div>

          <button className="mt-5 w-full rounded-2xl bg-orange-500 py-4 font-bold text-white shadow-lg">
            + เพิ่มจุดจัดส่ง
          </button>
        </div>

        <CustomerBottomNav />
      </section>
    </main>
  );
}