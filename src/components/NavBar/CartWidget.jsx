import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Icon = () => {
  return (
    
    <div className="widget-container">

      <FontAwesomeIcon icon={faCartShopping} />
      <span>3</span>

    </div>
    
  );
};

export default Icon;
