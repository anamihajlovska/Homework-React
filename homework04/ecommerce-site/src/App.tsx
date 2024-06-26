import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { ContextProvider } from "./context/context";
import { AddProduct } from "./components/AddProduct/AddProduct";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="addProduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
