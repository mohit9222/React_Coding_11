import LOGO from "../../assets/images/Food.png";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { cart, grocery, contact, about, user, search } from "../utils/Icon";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Sign In");
  //let btnName = "Login";
  //console.log("Header rendered");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const { loggedInUser } = data;
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  useEffect(() => {
    //console.log("useEffect is called");
  }, [btnNameReact]);

  return (
    <div className="flex justify-between bg-white shadow-md mb-2">
      {/* <div className="w-28"> */}
      <Link to="/" className="flex ">
        <img className="ml-2.5 w-[82px] py-1" src={LOGO} />
      </Link>
      {/* </div> */}
      <div className="flex items-center font-sans">
        <ul className="flex p-4 m-2">
          <li className="px-4 hover:text-orange-600">
            <Link to="/search" className="flex ">
              {search} Search
            </Link>
          </li>
          <li className="px-4 hover:text-orange-600">
            <Link to="/about" className="flex ">
              {about} About
            </Link>
          </li>
          <li className="px-4 hover:text-orange-600">
            <Link to="/contact" className="flex">
              {contact} Contact
            </Link>
          </li>
          <li className="px-4 hover:text-orange-600">
            <Link to="/grocery" className="flex">
              {grocery} InstaFast
            </Link>
          </li>
          <li className="px-4 flex font-bold text-md hover:text-orange-600">
            <Link to="/cart" className="flex">
              {cart} Cart ({carts.length} items)
            </Link>
          </li>
          <button
            className="px-4 flex hover:text-orange-600 font-bold"
            onClick={() => {
              btnNameReact === "Sign In"
                ? setBtnNameReact("Sign Out")
                : setBtnNameReact("Sign In");
            }}
          >
            {/* {console.log(loggedInUser)} */}
            {user}
            {/* {console.log(btnNameReact === "Sign Out")} */}
            {btnNameReact === "Sign Out" ? loggedInUser : btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
