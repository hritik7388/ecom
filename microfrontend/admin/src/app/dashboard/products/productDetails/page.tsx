// src/app/dashboard/products/productDetails/page.tsx
"use client";

import { useState, useEffect } from "react";
import { BsHeart } from "react-icons/bs";
import { TbExchange } from "react-icons/tb";



export default function ProductDetail() {

  const [selectedImage, setSelectedImage] = useState(
    "https://images.unsplash.com/photo-1520975916090-3105956dac38"
  );
    const [price, setPrice] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 79.99;
    const duration = 2500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setPrice(parseFloat(start.toFixed(2)));
    }, 16);

    return () => clearInterval(counter);
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 44,
    seconds: 29,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else {
            if (hours > 0) {
              hours--;
              minutes = 59;
              seconds = 59;
            } else {
              if (days > 0) {
                days--;
                hours = 23;
                minutes = 59;
                seconds = 59;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

   const totalStars = 5;
  const [filledStars, setFilledStars] = useState(0);

  useEffect(() => {
    let i = 1;
    const interval = setInterval(() => {
      setFilledStars(i);
      i++;
      if (i > totalStars) clearInterval(interval);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  const [progress, setProgress] = useState(0);


  useEffect(() => {
  let current = 0;
  const target = 84; // 84%
  const interval = setInterval(() => {
    current += 1;
    if (current > target) {
      current = target;
      clearInterval(interval);
    }
    setProgress(current);
  }, 15); // speed, lower = faster
  return () => clearInterval(interval);
}, []);


  const images = [
    "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-2xl text-gray-900 font-bold mb-6">Add Product</h1>

      {/* ✅ ONLY CHANGE: grid-cols-5 */}
      <div className="bg-white p-6 rounded-xl shadow-sm grid grid-cols-5 gap-10">

        {/* LEFT SIDE (STICKY IMAGES) */}
        {/* ✅ ONLY CHANGE: col-span-2 */}
        <div className="col-span-2 flex gap-4 sticky top-6 h-fit">

          {/* THUMBNAILS */}
          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`w-[90px] h-[90px] object-cover rounded-lg cursor-pointer border ${selectedImage === img ? "border-black" : ""
                  }`}
              />
            ))}
          </div>

          {/* MAIN IMAGE */}
          <div className="flex-1">
            <img
              src={selectedImage}
              className="w-[80vh] h-[720px] object-cover rounded-xl"
            />
          </div>

        </div>

        {/* RIGHT SIDE (SCROLLABLE) */}
        {/* ✅ ONLY CHANGE: col-span-3 */}
        <div className="col-span-3 space-y-5 max-h-[85vh] overflow-y-auto pr-3 scrollbar-hide">

          <p className="text-gray-400 uppercase text-gray-900  text-sm">Clothing</p>

          <h2 className="text-3xl text-gray-900  font-bold">Stretch strap top</h2>

          {/* RATING */}
    <div className="flex items-center gap-2 text-sm">
  
 <div className="flex items-center gap-2 text-sm">
            <div className="flex text-xl">
              {[...Array(totalStars)].map((_, idx) => (
                <span
                  key={idx}
                  className={`transition-colors transform duration-300 ${
                    idx < filledStars ? "text-orange-500 scale-125" : "text-gray-300 scale-100"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-gray-900">(134 reviews)</span>
            <span className="text-orange-900">⚡ 18 sold in last 32 hours</span>
          </div> 

</div>

          {/* PRICE */}
          <div className="flex items-center gap-3">
            <span className="text-2xl text-gray-900 font-bold animate-pulse hover:scale-105 transition-transform duration-300 inline-block">
   ${price}
</span>
            <span className="line-through text-gray-900">$98.99</span>
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded text-gray-900 ">
              -25%
            </span>
          </div>

          <p className="text-gray-900 text-sm">
            The garments labelled as Committed are products that have been produced
            using sustainable fibres or processes, reducing their environmental impact.
          </p>

          <p className="text-sm text-gray-900">
            👁 28 people are viewing this right now
          </p>

          <hr />

          {/* TIMER */}
         {/* ✅ ANIMATED TIMER */}
          <div className="flex justify-between text-gray-900 items-center">
            <div>
              <p className="font-semibold text-gray-900">Hurry Up!</p>
              <p className="text-sm text-gray-900">Offer Ends in:</p>
            </div>

            <div className="flex gap-4 text-center">
              <div>
                <p className="font-bold">{timeLeft.days}</p>
                <p className="text-xs">Days</p>
              </div>
              <div>
                <p className="font-bold">{String(timeLeft.hours).padStart(2, "0")}</p>
                <p className="text-xs">Hours</p>
              </div>
              <div>
                <p className="font-bold">{String(timeLeft.minutes).padStart(2, "0")}</p>
                <p className="text-xs">Mins</p>
              </div>
              <div>
                <p className="font-bold">{String(timeLeft.seconds).padStart(2, "0")}</p>
                <p className="text-xs">Secs</p>
              </div>
            </div>
          </div>

          {/* PROGRESS */}
  <div>
  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
    <div
      className="h-full bg-orange-500 transition-[width] duration-500 ease-out"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
  <p className="text-sm mt-2">
    <span className="font-semibold text-gray-900">{progress}% Sold</span>
    <span className="text-gray-900"> - Only 24 item(s) left in stock!</span>
  </p>
</div>

          <hr />

          {/* COLORS */}
          <div>
            <p className="mb-2 text-gray-900 ">Colors: <span className="font-medium text-gray-900 ">Gray</span></p>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-black"></div>
              <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-red-400 rounded-full border-2 border-black"></div>
              <div className="w-8 h-8 bg-green-400 rounded-full"></div>
            </div>
          </div>

          {/* SIZE */}
          <div>
            <p className="mb-2 text-gray-900 ">Size: <span className="font-medium text-gray-900 ">L</span></p>
            <div className="flex gap-2">
              <button className="px-4 py-2 border rounded-lg text-gray-900 ">S</button>
              <button className="px-4 py-2 border rounded-lg text-gray-900 ">M</button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg  ">L</button>
              <button className="px-4 py-2 border rounded-lg text-gray-900 ">XL</button>
              <button className="px-4 py-2 border rounded-lg text-gray-900 ">XXL</button>
            </div>
          </div>

          {/* QUANTITY */}
          <div>
            <p className="mb-2 text-gray-900 ">Quantity:</p>
            <div className="flex items-center gap-4 border rounded-lg w-fit px-4 py-2">
              <button className="text-gray-900 ">-</button>
              <span className="text-gray-900 ">1</span>
              <button className="text-gray-900 ">+</button>
            </div>
          </div>

          <hr />

          {/* BUTTONS */}
          <div className="flex items-center gap-4">

            {/* ADD TO CART */}
            <button className="flex-1 bg-black text-white py-3 rounded-xl font-semibold border hover:bg-white hover:text-black">
              ADD TO CART - $79.99
            </button>

            {/* 🔗 Share */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer hover:border-orange-500 transition">
              <TbExchange className="text-xl text-blue-700" />
            </div>
            {/* ❤️ Wishlist */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer hover:border-orange-500 transition">
              <BsHeart className="text-xl text-red-900 hover:border-red-500 transition " />
            </div>


          </div>

          <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold">
            BUY IT NOW
          </button>

          {/* PRODUCT INFO */}
          <div className="text-sm text-gray-900 space-y-1">
            <p><strong>SKU:</strong> 53453412</p>
            <p><strong>Vendor:</strong> Dataflow</p>
            <p><strong>Available:</strong> Instock</p>
            <p><strong>Categories:</strong> Clothes, women, T-shirt</p>
          </div>

          {/* PAYMENT */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p className="font-medium whitespace-nowrap text-gray-900">
              Guaranteed safe checkout:
            </p>

            <div className="flex gap-9 items-center flex-wrap">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                className="h-6 object-contain"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="h-6 object-contain"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
                alt="Amex"
                className="h-6 object-contain"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-6 object-contain"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Discover_Card_logo.svg"
                alt="Discover"
                className="h-6 object-contain"
              />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}