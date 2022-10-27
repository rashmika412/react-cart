import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../page/CartContext";

const Productitem = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const { cart, setCart } = useContext(CartContext);

  // console.log(props);
  const { food } = props;



  const addToCart = (event, food) => {
    event.preventDefault();
    let _cart = { ...cart }; //empty object {}

    if (!_cart.items) {
      _cart.items = {};
    }

    if (_cart.items[food._id]) {
      _cart.items[food._id] += 1;
    } else {
      _cart.items[food._id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }

    _cart.totalItems += 1;
    setCart(_cart);

    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false)
    }, 1000);

    // console.log(event);
  };

  return (
    <Link to={`/products/${food._id}`}>
      <div>
        <img src={food.image} alt="pizza" />

        <div className="text-center">
          <h2 className="text-lg font-bold py-2"> {food.name}</h2>

          <span className="bg-grey-200 py-1 rounded-full text-sm px-4">
            {food.size}
          </span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span>{food.price} </span>

          <button
            disabled = {isAdding}
            onClick={(e) => {
              addToCart(e, food);
            }}
            className={`${isAdding ? 'bg-green-500': 'bg-yellow-500'} py-1 px-4 rounded-full font-bold`}
          >
            ADD{isAdding ? 'ED' : ''}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Productitem;
