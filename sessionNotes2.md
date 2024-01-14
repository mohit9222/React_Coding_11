/** Optimizing our App **/

E9 P2 - TOPICS

## Custom Hooks (Contin...)

> Creating a custom hook is not madatory but it is good because it makes our code Maintainable, resuable, redeable
> Ex: ResturantMenu does two things: 1. Fetches the data 2. Displaying the data on the UI
> It shouldnt worry about the fetch

> Ex : If we could create a custom hook

const resInfo = useResturantMenu();
//abstracting the fetch data logic and put it indside the custom hook
key take aways - It doesnt need to worry about fetching, managing the state, it needs to worry about how to display this data
ResturantMenu() -> Has a Single Responsibility, doesnt have to worry about the implementation of this new hook

## How do we write our custom Hook

Hooks are normal utility functions/ helper functions
Best way to create these helper/utility functions are in utils folder

Good Practices while creating a custom hook -

1. Seperate file for a seperate hook
2. File name will be the same name of the hook
3. start with small case and "use" -> react understands its a hook

what is the responsibilty of this hook - takes a resId and its job is to return a resturant resInfo after fetching the data

import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useResturantMenu = (resId) => {
const [resInfo, setResInfo] = useState(null);
useEffect(() => {
fetchData();
}, []);

const fetchData = async () => {
const data = await fetch(MENU_URL + resId);
const json = await data.json();
setResInfo(json.data);
};

return resInfo;
};

export default useResturantMenu;

we have a custom hook -> what it takes as the input, what it gives as a output
We fetch the data just like how we do it in a normal function inside a custom hook

We create local state variables inside our hooks as well
It hepls in testing, suppose we want to test our fetching then we will test the useResturantMenu Hook directly. Similarly if we want to test the displaying the data we will test the ResturatMenu.js file
