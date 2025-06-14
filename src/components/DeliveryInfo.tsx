
import { Truck } from "lucide-react";

const DeliveryInfo = () => (
  <div className="flex flex-col justify-center items-center gap-5 w-full">
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
      {/* Free Shipping Section */}
      <div className="flex flex-1 items-center gap-3 bg-yellow-100/80 rounded-xl px-5 py-3 shadow transition-all w-full">
        <span className="inline-flex items-center justify-center bg-yellow-200 rounded-full p-2">
          <Truck className="w-7 h-7 text-yellow-700" aria-label="Free Shipping" />
        </span>
        <span className="font-semibold text-base sm:text-lg text-orange-900">
          Free Shipping <span className="font-normal text-sm sm:text-base">on ₹499+</span>
        </span>
      </div>
      {/* COD Available Section */}
      <div className="flex flex-1 items-center gap-3 bg-green-50 rounded-xl px-5 py-3 shadow transition-all w-full">
        <span className="inline-flex items-center justify-center bg-green-200 rounded-full p-2">
          {/* Using a recognizable cash icon */}
          <img
            src="https://img.icons8.com/color/48/cash-on-delivery.png"
            alt="Cash on Delivery"
            className="w-7 h-7"
            style={{ minWidth: 28, minHeight: 28 }}
          />
        </span>
        <div className="flex flex-col">
          <span className="font-semibold text-base sm:text-lg text-green-800">
            Cash on Delivery
          </span>
          <span className="text-xs text-green-700 leading-tight font-medium">COD Available</span>
        </div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full max-w-2xl">
      <div className="bg-yellow-50 rounded-lg px-4 py-2 text-gray-600 text-center text-xs sm:text-sm flex-1">100% Genuine & Energized</div>
      <div className="bg-orange-50 rounded-lg px-4 py-2 text-gray-600 text-center text-xs sm:text-sm flex-1">Verified by Temple Priests</div>
    </div>
  </div>
);

export default DeliveryInfo;

