
const Checkout = () => (
  <div className="py-12 max-w-lg mx-auto flex flex-col items-center">
    <h2 className="text-3xl font-bold text-yellow-700 mb-7">Checkout</h2>
    <div className="w-full bg-white rounded-xl shadow-md p-8 border flex flex-col items-center">
      <p className="text-xl font-medium text-green-800 mb-6 text-center">
        WhatsApp-Based Ordering Only
      </p>
      <a
        href={`https://wa.me/919999999999?text=${encodeURIComponent("Hello, I want to order:\n- Product: [Product Name]\n- Quantity: [1 / 2 / 3]\n- Name:\n- Address:\n- Pincode:\n- Preferred Delivery Date (if any):\n- Gift Wrap? [Yes/No]\n- Payment Method: COD / UPI / Paytm")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky bottom-7 w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 rounded-xl transition flex items-center justify-center gap-2"
        style={{ boxShadow: "0 4px 16px 0 rgba(24,112,42,0.12)" }}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="20" fill="#25d366" />
          <path fill="#fff" d="M31 30.063A13.09 13.09 0 1 0 9.205 16.493L7 33l17.031-2.143A12.921 12.921 0 0 0 31 30.063Zm-11-1.6a11.09 11.09 0 1 1 0-22.18 11.09 11.09 0 0 1 0 22.18ZM15.583 13.502a1.175 1.175 0 0 0-.93-.55c-.234 0-.465.074-.67.215-.8.54-1.78 1.263-1.53 2.78.315 1.942 2.53 5.252 5.55 7.042.32.194.773.236 1.18.133.52-.134.8-.55 1.12-.97l.09-.126c.123-.17.254-.35.41-.449.18-.11.273-.085.386-.06.434.1 2.102.888 2.468 1.012.083.027.163.04.24.04.148 0 .288-.055.42-.164.25-.217.594-.487.368-.947-.2-.398-1.092-1.267-1.224-1.396s-.238-.184-.379-.136c-.127.042-.215.21-.305.297-.088.086-.157.155-.274.132-.657-.14-1.732-.609-3.143-2.154-.964-1.049-1.314-1.85-1.114-2.268.052-.11.168-.17.287-.19.842-.134 1.29-.805 1.267-1.19-.015-.234-.106-.394-.37-.605Z"/>
        </svg>
        Order Now on WhatsApp
      </a>
      <p className="mt-8 text-sm text-gray-600">
        You’ll be redirected to WhatsApp with a pre-filled message. Our team will confirm details and ship your order.<br/>
        <span className="block text-gray-400 mt-2">COD & Online Payment Available.</span>
      </p>
    </div>
  </div>
);

export default Checkout;
