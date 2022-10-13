import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Main/ItemListContainer";
import ItemDetailContainer from "./components/Main/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Inicio from "./components/Inicio/Inicio";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <BrowserRouter>
      <NavBar
        logo="/Futbol-Club/"
        inicio="Inicio"
        productos="Productos"
        contacto="Contacto"
      />
      <Routes>
        <Route
          path="/"
          element={
            <Inicio saludo="Bienvenido a una tienda totalmente dedicada a la venta de camisetas de Fotbol" />
          }
        />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
