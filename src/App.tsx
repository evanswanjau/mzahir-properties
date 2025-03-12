import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import BlogPage from "@/pages/BlogPage";
import AboutPage from "@/pages/AboutPage";
import ContactUs from "@/pages/ContactUsPage";
import FAQsPage from "@/pages/FAQsPage";
import SellPropertyPage from "@/pages/SellPropertyPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/sell-property" element={<SellPropertyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
