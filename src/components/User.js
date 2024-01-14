import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  //const [count2] = useState(1);
  const { name } = props;
  return (
    <div className="user-card">
      <h1>Count={count}</h1>
      <button
        onClick={() => {
          const updateCount = count + 1;
          setCount(updateCount);
        }}
      >
        Increase Count
      </button>
      <button
        onClick={() => {
          //const updateCount = count + 1;
          setCount(0);
        }}
      >
        Reset Count
      </button>
      {/* <h1>Count2={count2}</h1> */}
      <h2>Name: {name}</h2>
      <h3>Location: Bangalore</h3>
      <h4>Contact: Mohit9222</h4>
    </div>
  );
};

export default User;
