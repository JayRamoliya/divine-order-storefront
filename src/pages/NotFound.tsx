import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md w-full px-2">
          <h1 className="text-5xl md:text-6xl font-black mb-2 text-primary">404</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-5">Oops! Page not found</p>
          <a href="/" className="text-accent hover:text-primary underline font-medium text-base">
            Return to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
