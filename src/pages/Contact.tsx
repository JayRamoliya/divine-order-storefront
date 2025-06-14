
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const Contact = () => (
//   <div className="min-h-screen flex flex-col">
//     <Header />
//     <main className="py-8 md:py-12 max-w-xl mx-auto flex-1 w-full px-2 md:px-0">
//       <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Contact Us</h2>
//       <form className="bg-card p-5 md:p-8 rounded-xl shadow-md space-y-7 border border-primary/20">
//         <div>
//           <label className="font-medium text-foreground">Your Name</label>
//           <input className="mt-1 w-full border px-4 py-2 rounded-lg" placeholder="e.g. Ramesh Kumar" />
//         </div>
//         <div>
//           <label className="font-medium text-foreground">Phone / WhatsApp</label>
//           <input className="mt-1 w-full border px-4 py-2 rounded-lg" placeholder="e.g. 9123456789" />
//         </div>
//         <div>
//           <label className="font-medium text-foreground">Your Message</label>
//           <textarea className="mt-1 w-full border px-4 py-2 rounded-lg" placeholder="How can we help?" rows={4} />
//         </div>
//         <button className="w-full font-bold py-3 rounded-xl text-lg transition"
//           style={{
//             background: "linear-gradient(45deg,var(--cta-gradient-start),var(--cta-gradient-end))",
//             color: "var(--cta-gradient-text)",
//             border: "none"
//           }}
//         >
//           Send via WhatsApp
//         </button>
//         <div className="flex items-center justify-between pt-4">
//           <a
//             href="tel:916353716421"
//             className="text-secondary font-medium underline"
//           >
//             📞 Call Support
//           </a>
//           <span className="text-xs text-muted-foreground">Available 9am – 9pm</span>
//         </div>
//       </form>
//     </main>
//     <Footer />
//   </div>
// );

// export default Contact;


import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    // Simulate sending data via WhatsApp (you can integrate actual API if needed)
    const whatsappMessage = `https://wa.me/91${formData.phone}?text=${encodeURIComponent(
      `Hi, my name is ${formData.name}. ${formData.message}`
    )}`;

    window.open(whatsappMessage, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="py-8 md:py-12 max-w-xl mx-auto flex-1 w-full px-2 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Contact Us</h2>
        <form
          className="bg-card p-5 md:p-8 rounded-xl shadow-md space-y-7 border border-primary/20"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="font-medium text-foreground">Your Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full border px-4 py-2 rounded-lg"
              placeholder="e.g. Ramesh Kumar"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="font-medium text-foreground">Phone / WhatsApp</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 w-full border px-4 py-2 rounded-lg"
              placeholder="e.g. 9123456789"
              type="tel"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="font-medium text-foreground">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full border px-4 py-2 rounded-lg"
              placeholder="How can we help?"
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full font-bold py-3 rounded-xl text-lg transition"
            style={{
              background: "linear-gradient(45deg,var(--cta-gradient-start),var(--cta-gradient-end))",
              color: "var(--cta-gradient-text)",
              border: "none",
            }}
          >
            Send via WhatsApp
          </button>

          {submitted && (
            <p className="text-green-600 text-sm text-center">Opening WhatsApp...</p>
          )}

          <div className="flex items-center justify-between pt-4">
            <a
              href="tel:916353716421"
              className="text-secondary font-medium underline"
            >
              📞 Call Support
            </a>
            <span className="text-xs text-muted-foreground">Available 9am – 9pm</span>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
