import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Icon = () => {
  const { unidadesEnCarro } = useContext(CartContext);
  const dentroDelCarro = unidadesEnCarro();

  return (
    <div className="widget-container">
      <FontAwesomeIcon icon={faCartShopping} />
      <span>{dentroDelCarro}</span>
    </div>
  );
};

export default Icon;
