/** Lets build our store **/
E12 P3 - TOPICS

Architecture of Redux-Toolkit(Redx)
Feature build a cart flow
Build a cart page

--

## Architecture of Redux-Toolkit(Redx)

When the items are clicked how are the items going go to the CART?
When we click on any item, the cart should add the number of items

## REDUX STORE

> It is a big whole object and it is kept in a global central space
> Any component can access it in our application (Write/Read data)
> Most of the major data is kept in the redux store
> For our store not to become very big, we have something called as SLICES in our redux store

## SLICES

What?

> Small portion of our redux store
> There are multiple slices in our redux store
> To keep data seperate we make logical seperations - this is called as a SLICE

Why and When?

> cart, user slice, themes(dark/light, UI related)
> Initially the data can be empty
> Once data is added, it can be modified

How does the data go into the cart slice?

> We cannot directly modify our cart slice
> We click on the ADD button, we need to dispatch an action
> The dispatch an action will call a function
> The function(Reducer) internally modifies the cart

click on the ADD button -> dispatch an action -> call a function -> Function modifies the cart

What is this function?

> This function is known as REDUCER

- When we hit the ADD button it DISPATCHES AN ACTION which calls the REDUCER FUNCTION and which updates/modifies the SLICE of our STORE

How do we read the data from our cart slice?

- We make use of a SELECTOR to read the data from our STORE and the SELECTOR will modify our REACT COMPONENT
- This phenomenon is called as SUBSCRIBING TO THE STORE
- Our component is subscribed to the STORE using a SELECTOR

HEADER IS SUBCRIBED TO THE STORE - if the data in the store changes my header component data changes
