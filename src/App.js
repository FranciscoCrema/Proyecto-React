import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/Main/ItemListContainer";
import ItemDetailContainer from "./components/Main/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar
        logo="Lauvi"
        inicio="Inicio"
        productos="Productos"
        contacto="Contacto"
      />

      <main>
        <ItemListContainer saludo="Bienvenido a Lauvi" />
        <ItemDetailContainer />
      </main>

      <Footer />
    </>
  );
}

export default App;
