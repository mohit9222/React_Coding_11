/** Optimizing our App **/

E9 P3 - TOPICS
Online Offline feature(Checks if the user is online or not/ Users internet is active or not)

> We will build this feature using custom hook
> Writing a custom hook -> First finalize the contract(What is the input and output of the hook)
> We dont need any information from the caller(where we use this hook) -from the component which is calling it

## Event Listner

> Browser gives us access to this window object - online event listner
> Event listner is a super power given to us by the browser and window object

    window.addEventListener("offline", () => {
        setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
