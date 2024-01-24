/** Lets build our store **/
E12 P4 - TOPICS

## Redux Toolkit

> Install @reduxjs/toolkit and react-redux
> Build our own store
> Connect our store to the App
> Create a slice(cart - add items)
> Dispatch action
> Selector

## Install @reduxjs/toolkit and react-redux

npm i @reduxjs/toolkit
npm i react-redux

## Build our own store

> Create a new file in utils - appStore.js

import { configureStore } from "reduxjs/toolkit";

const appStore = configureStore();

> This comes from as a named import from @reduxjs/toolkit

## Adding our store to our Application

> We need to provide our store to our application
> This RTK library has things to do with redux
> We need to Provide this to STORE to our APPLICATION is react-reduxs job
> These two are coming from two different libraries

import { Provider } from 'react-redux';

<Provider store={appStore}>
// Wrapping our code in the root level to be able to access the centralised data
</Provider>

## How do we provide to our App?

> We will wrap our entire to our entire Application
> The react-redux library will export this Provider along with the store as a Props which takes appStore

 <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
          {/* <Footer /> */}
        </div>
      </UserContext.Provider>
    </Provider>

> Where we need our redux we wrap it inside it

## Creating cart slice

> Create a new file in utils - cartSlice.js
> This comes from as a named import from @reduxjs/toolkit
> The createSlice is a function which takes a configuration to create a slice
> Name of the slice, initialState (what will be the cart items) - > which takes items as an empty array, reducers empty object (Here we will write reducer functions corresponding to the actions)

Action (Small APIS to communicate to the REDUX store) - Add, remove, clear the cart

the addItems {An action} = (state, action) => {
// modifies the slice of the store
// gets access to the state and action
}
This an action which has a reducer function which modifies the data inside this slice
Modifies the state based on the action

reducers: {
addItem: (state, action) => {
state.items.push(action.payload);
},

> We will get this payload when we will call this addItem(dispatch this fn)

ACTIONS and REDUCERS need to be exported

## Adding a reducer to the store

> Very IMP - The configure Store has its own REDUCER which modifies the app store
> For each slice we will have a reducer

We make use of a selector in react using a HOOK

useSelector hook -> react/redux library

> Subscribing to our selector using a selector
> This selector helps us to read what portion of our store we need to read (useSelector Hook)

const cart = useSelector((store) => store.cart.items); -> reading

## Dispatching an action

we get the dispatch from a use effect hook called as dispatch

const dispatch = useDispatch();

dispatch(addItems("pizza"));

## Difference between the three:

onClick={handleClick}
onClick={handleClick(item)}
onClick={() => handleClick(item)}
