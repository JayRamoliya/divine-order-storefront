
const DeliveryInfo = () => (
  <div className="flex flex-col justify-center items-center gap-4">
    <div className="flex gap-4">
      <div className="bg-yellow-100 rounded-lg px-6 py-3 flex items-center gap-3">
        <img src="https://img.icons8.com/color/48/delivery--v1.png" alt="Delivery" className="w-8 h-8" />
        <span className="font-medium text-lg text-orange-900">Free Shipping on ₹499+</span>
      </div>
      <div className="bg-green-100 rounded-lg px-6 py-3 flex items-center gap-3">
        <img src="https://img.icons8.com/color/48/cash-on-delivery.png" alt="COD" className="w-8 h-8" />
        <span className="font-medium text-lg text-green-800">COD Available</span>
      </div>
    </div>
    <div className="flex gap-4 mt-3">
      <div className="bg-yellow-50 rounded-lg px-4 py-2 text-gray-600 text-center text-sm">100% Genuine & Energized</div>
      <div className="bg-orange-50 rounded-lg px-4 py-2 text-gray-600 text-center text-sm">Verified by Temple Priests</div>
    </div>
  </div>
);

export default DeliveryInfo;
