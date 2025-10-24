import { useContext, useEffect } from "react";
import Nav from "./component/Nav/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Brand from "./component/Brand/Brand";
import Product from "./component/Product/Product";
import Career from "./component/Career/Career";
import Success from "./component/OurSuccess/Success";
import Blog from "./component/Blog/Blog";
import gsap from "gsap";
import ProductInfo from "./component/ProductInfo/ProductInfo";
import CSRPolicy from "./component/CSRPolicy/CSRPolicy";
import SingleBlog from "./component/Blog/SingleBlog";
import New from "./homepages/Organisation/New";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhyChoseUs from "./component/Career/WhyChooseUs";
import { CategoryContext } from "./component/Context/CategoryContext";
import Google from "./component/Google/Google";
import PopupForm from "./component/PopupForm/PopupForm";
import GoogleLanding from "./component/GoogleLanding/GoogleLanding";
import CookiePolicy from "./component/Policy/CookiePolicy/CookiePolicy";
import PrivacyPolicy from "./component/Policy/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./component/Policy/TermsAndConditions/TermsAndContions/TermsAndConditions";
import ProductSub from "./component/Product/productsub";

function App() {
  const location = useLocation();
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);
  useEffect(() => {
    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(".flair", "x", { duration: 0.8, ease: "power3" }),
      yTo = gsap.quickTo(".flair", "y", { duration: 0.8, ease: "power3" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Nav /> <ToastContainer />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/corporate-social-responsibility-csr-policy" element={<CSRPolicy />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/our-brands" element={<Brand />} />
          <Route path={`/:category`} element={<Product />} />
          <Route path={`/:category/:section`} element={<ProductSub />} />
          <Route path="/:category/:section/:id" element={<ProductInfo />} />
          <Route path="/:category/:id" element={<ProductInfo />} />
          <Route path="/career" element={<Career />} />
          <Route path="/our-success" element={<Success />} />
          {/* <Route path="/whychooseus" element={<WhyChoseUs />} /> */}
          <Route path="/googleadd" element={<Google />} />
          <Route path="/googlelanding" element={<GoogleLanding />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />
          <Route path="/new" element={<New />} />
          <Route path="/cookiepolicy" element={<CookiePolicy />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandcontion" element={<TermsAndConditions />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
