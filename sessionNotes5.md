/** Optimizing our App **/

E9 P5 - TOPICS
How we can optimize our app even more (how do we improve the performance of an application)
Parcel = "It is a bundler"
Lazy loading

## Parcel

> Basic job is to do bundling (bundles our application)
> It means it bundles all our files and into one file
> The entire code will be compressed one single file(one JS file)
> Everything is one a single file but the size of the single page will be very big as the app grows(As the component size grows)

We cannot have multple calls by the browser or have 1000 files on to a single file
We will need to make smaller bundles of these files
This process is called as App Chunking / Code spliting / Dynamic bundling / Lazy loading / On demand import

## App Chunking / Code spliting / Dynamic bundling / Lazy loading / On demand import / Dynamic import

How to make smaller bundles / What should be there in the smaller bundles
We need to make a LOGICAL seperation of the bundles -> Means a bundle should have enough code for a major feature

Example: Makemytrip app - We have flights, trains, hotels, homestays, buses, cabs forex etc. All these can have a seperate Logical seperation for their bundles. Flights can be one bundle which may have 100 components. Similarly we can have for trains and the other major features.

SMALLER APPLICATIONS WITHIN A SINGLE APPLICATION - which reduces the load on a single bundle

We will create different bundles for groceries, different bundle for our food app and one bundle for the entire application

We want to have a different bundle for our grocery and its components and we will not directly import our grocery.
import Grocer from './components/Grocery' -> we will not do this

We will make use of lazy loading/ On Demand loading

## why do we call it as lazy loading?

> When our app loads it will not load the code for grocery
> Only when we go to the grocery page, only when we go to the link we load it

## How do we load lazy loading into our app?

const Grocery = lazy()

lazy() is function which is given to us by react(react package)
Comes as a named export

import { lazy } from 'react'

lazy takes a callback function:

lazy(() => import("./components/Grocery")) - >> It has a lot of power this one line code

This 'import' is a function which takes the path of the grocery component

- ERROR: React Router caught the following error during render Error: A component suspended while responding to synchronous input.

Grocery takes 7 ms to come to the browser - React tried to load the grocery component but the code was not there that is why React suspended the component.

React tries to render that state which doesnt have that value which causes that error.

## How do we resolve that state?

We make use of a component called "Suspense" which comes from React as a named import
We can wrap our component in suspense and give it a placeholder or a fallback what should react load/render when the code is not available

<Suspense fallback={<h1>Loading..</h1>}>
<Grocery />
</Suspense>
