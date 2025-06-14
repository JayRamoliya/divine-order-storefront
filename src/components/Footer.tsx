
const Footer = () => (
  <footer className="bg-stone-50 border-t py-8 mt-16">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-y-3 text-center">
      <div className="text-orange-700 font-semibold">
        &copy; {new Date().getFullYear()} Divine Store
      </div>
      <div className="text-sm text-gray-500">Handcrafted in India with <span className="text-red-400">❤</span></div>
    </div>
  </footer>
);

export default Footer;
