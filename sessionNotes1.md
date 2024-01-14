/** Optimizing our App **/

E9 P1 - TOPICS
How we can optomise our code in a better way
Custom Hooks
Single Responsibility Principle
Code Modularity

## Single Responsibility Principle

> Supose we have a class, function or any single identity it much have a single responsibility
> Each component is a different function where each of the this component has a single responsibility
> Ex: RestoCard needs to just display the card, Header needs to just display the header on the page
> If we are doing multiple things in a component, it needs to be broken down into a single component

## Code Modularity

> Maintaining the code modularity (breaking the code into smaller components) - Maintainable/testable/Reusability

## Custom Hooks

> Different Hooks we have used: useState, useEffect, useParam, useRouteError

1. How we can use custom hooks
2. how we can use this custom hooks to make our code modular
3. Abstract the responsibilty of these components to a different hook

## IMP - We will abstract(take out) some responsibility from a component extract it inside a hook so that our hook and component are modular

HOOKs are like Utility function (normal function)
