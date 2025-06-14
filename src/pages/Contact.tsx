
import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";

const Contact = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="py-8 md:py-12 max-w-xl mx-auto flex-1 w-full px-2 md:px-0">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Contact Us</h2>
      <form className="bg-card p-5 md:p-8 rounded-xl shadow-md space-y-7 border border-primary/20">
        <div>
          <label className="font-medium text-foreground">Your Name</label>
          <input className="mt-1 w-full border px-4 py-2 rounded-lg" placeholder="e.g. Ramesh Kumar" />
        </div>
        <div>
          <label className="font-medium text-foreground">Phone / WhatsApp</label>
          <input className="mt-1 w-full border px-4 py-2 rounded-lg" placeholder="e.g. 9123456789" />
        </div>
        <div>
          <label className="font-medium text-foreground">Your Message</label>
          <textarea className="mt-1 w-full border px-4 py-2 rounded-lg" placeholder="How can we help?" rows={4} />
        </div>
        <button className="w-full font-bold py-3 rounded-xl text-lg transition"
          style={{
            background: "linear-gradient(45deg,var(--cta-gradient-start),var(--cta-gradient-end))",
            color: "var(--cta-gradient-text)",
            border: "none"
          }}
        >
          Send via WhatsApp
        </button>
        <div className="flex items-center justify-between pt-4">
          <a
            href="tel:919999999999"
            className="text-secondary font-medium underline"
          >
            📞 Call Support
          </a>
          <span className="text-xs text-muted-foreground">Available 9am – 9pm</span>
        </div>
      </form>
      {/* Map and pickup info below the form */}
      <div className="mt-6 md:mt-8">
        <h3 className="text-lg font-bold text-primary flex items-center gap-2 mb-2">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18.7a7 7 0 1 1 6 0l-3 3zm1-6.7a2 2 0 1 0 4 0a2 2 0 0 0-4 0Z" /></svg>
          </span>
          Pickup Location
        </h3>
        <Map />
        <div className="text-muted-foreground text-sm mt-2 text-center">Pickup &amp; warehouse info coming soon...</div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;
