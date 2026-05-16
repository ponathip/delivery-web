"use client";

import Image from "next/image";

const banners = [
  "/demo/banner-food.png",
  "/demo/store-cover.png",
];

export default function PromoSlider() {
  return (
    <div className="hide-scrollbar flex gap-3 overflow-x-auto pb-2">
      {banners.map((banner, index) => (
        <div
          key={index}
          className="relative min-w-full overflow-hidden rounded-3xl"
        >
          <Image
            src={banner}
            alt="โปรโมชั่น"
            width={600}
            height={260}
            className="h-48 w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute bottom-5 left-5 text-white">
            <h2 className="text-2xl font-bold">
              ส่งไว อิ่มคุ้มทุกมื้อ
            </h2>

            <p className="mt-1 text-sm text-white/90">
              ส่งตรงถึงโรงงานใกล้คุณ
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}