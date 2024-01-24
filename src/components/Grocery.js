import { useState } from "react";
const Grocery = () => {
  const [show, setShow] = useState(false);
  const [showc, setShowC] = useState(false);
  const handleClick = (props) => {
    console.log(props);
    setShow(!show);
  };
  const handleClick1 = () => {
    console.log("test");
    setShowC(!showc);
  };
  return <>{}</>;
};

export default Grocery;
