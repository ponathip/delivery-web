export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="mx-auto max-w-md min-h-screen bg-white shadow-xl pb-28">
        <div className="px-5 pt-6 pb-4">
          <h1 className="text-2xl font-bold text-gray-900">ชำระเงิน</h1>
          <p className="text-sm text-gray-500">กรอกข้อมูลการจัดส่ง</p>
        </div>

        <div className="px-5 space-y-4">
          <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm">
            <h2 className="mb-3 font-bold text-gray-900">ข้อมูลลูกค้า</h2>

            <input
              className="w-full rounded-2xl bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none"
              placeholder="ชื่อผู้รับ"
            />

            <input
              className="w-full rounded-2xl bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none"
              placeholder="เบอร์โทร"
            />
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm">
            <h2 className="mb-3 font-bold text-gray-900">จุดจัดส่ง</h2>

            <select className="w-full rounded-2xl bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none">
              <option>โรงงาน A - หน้า รปภ.</option>
              <option>โรงงาน B - อาคาร 2</option>
              <option>โรงงาน C - จุดพักพนักงาน</option>
              <option>รับเองที่ร้าน</option>
            </select>

            <textarea
              className="h-24 w-full rounded-2xl bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none"
              placeholder="หมายเหตุ เช่น ไม่ใส่พริก / โทรก่อนถึง"
            />
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm">
            <h2 className="mb-3 font-bold text-gray-900">วิธีชำระเงิน</h2>

            <label className="mb-3 flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
              <input type="radio" name="payment" defaultChecked />
              <div>
                <p className="font-bold text-gray-900">เก็บเงินปลายทาง</p>
                <p className="text-sm text-gray-500">จ่ายเมื่อได้รับสินค้า</p>
              </div>
            </label>

            <label className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4">
              <input type="radio" name="payment" />
              <div>
                <p className="font-bold text-gray-900">โอนเงิน / PromptPay</p>
                <p className="text-sm text-gray-500">แนบสลิปภายหลัง</p>
              </div>
            </label>
          </div>

          <div className="rounded-3xl bg-gray-50 p-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">ค่าอาหาร/สินค้า</span>
              <span className="font-bold text-gray-500">฿150</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-500">ค่าส่ง</span>
              <span className="font-bold text-gray-500">฿20</span>
            </div>

            <div className="border-t pt-3 flex justify-between">
              <span className="font-bold text-gray-900">รวมทั้งหมด</span>
              <span className="text-xl font-bold text-orange-600">฿170</span>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 bg-white border-t px-5 py-3">
          <a
            href="/order-success"
            className="block w-full rounded-2xl bg-orange-500 py-4 text-center font-bold text-white shadow-lg"
          >
            ยืนยันคำสั่งซื้อ
          </a>
        </div>
      </section>
    </main>
  );
}