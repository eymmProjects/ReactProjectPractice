import { Routes, Route, Navigate } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { ProductList } from "./pages/ProductList";
// import { ProductDetail } from "./pages/ProductDetail";
// import { Contact } from "./pages/Contact/Contact";
// import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";
// import { Admin } from "./pages/Admin";
// import { PageNotFound } from "./pages/PageNotFound";
// import { ContactIn } from "./pages/ContactIn";
// import { ContactEu } from "./pages/ContactEu";
// import { ContactUs } from "./pages/ContactUs";
import { AllRoutes } from "./routes/AllRoutes";
import { Header, Footer } from "./components";
import "./App.css";

function App() {
  const user = true;
  return (
    <div className="App">
      <Header />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />}>
            <Route path="in" element={<ContactIn />} />
            <Route path="eu" element={<ContactEu />} />
            <Route path="us" element={<ContactUs />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="/admin" element={user ? <Admin /> : <PageNotFound />} />
          <Route path="*" element=<PageNotFound title="404 " /> />
        </Routes> */}
        <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
