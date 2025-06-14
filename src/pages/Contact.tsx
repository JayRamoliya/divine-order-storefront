import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="py-12 max-w-3xl mx-auto flex-1 w-full">
      <h2 className="text-3xl font-bold text-yellow-700 mb-4">Contact Us</h2>
      <form className="bg-white p-8 rounded-xl shadow-md space-y-7 border">
        <div>
          <label className="font-medium text-gray-800">Your Name</label>
          <input className="mt-1 w-full border px-4 py-2 rounded-lg" placeholder="e.g. Ramesh Kumar" />
        </div>
        <div>
          <label className="font-medium text-gray-800">Phone / WhatsApp</label>
          <input className="mt-1 w-full border px-4 py-2 rounded-lg" placeholder="e.g. 9123456789" />
        </div>
        <div>
          <label className="font-medium text-gray-800">Your Message</label>
          <textarea className="mt-1 w-full border px-4 py-2 rounded-lg" placeholder="How can we help?" rows={4} />
        </div>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl text-lg transition">
          Send via WhatsApp
        </button>
        <div className="flex items-center justify-between pt-4">
          <a
            href="tel:919999999999"
            className="text-green-700 font-medium underline"
          >
            📞 Call Support
          </a>
          <span className="text-xs text-gray-400">Available 9am – 9pm</span>
        </div>
      </form>
      <div className="mt-8 rounded-xl border border-dashed border-orange-200 p-5 text-center text-gray-500">
        Google Maps / pickup info coming soon...
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;
