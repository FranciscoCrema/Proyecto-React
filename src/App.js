import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";

function App() {
  return (
    <>
      <NavBar
        logo="logo"
        inicio="inicio"
        productos="productos"
        contacto="contacto"
      />

      <ItemListContainer />
    </>
  );
}

export default App;
