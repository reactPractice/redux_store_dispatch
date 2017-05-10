This is for practicing to make two different flows on 'dispatch' of store in React-Redux.

=========================================================================================

There are 2 different ways that exist that you can build your own application using React-redux.

1. Accessing all state values & methods created by Action Creator
   - You can bring up all the values including methods you made with connect(mapStateToProps, mapDispatchToProps)().
     This might be seem to be really useful since you can access everything, the one of matters, however, you are going to
     end up facing would be that your component, whatever it is, would have a tons of Props that it would deliver its child components.
     In this example project, there are 2 state values, 'val' for value and 'diff' for difference, and 3 action methods, 'inc' for increase, 'dec' for decrease and 'setDiff' for setting-difference.
     So if you've decided to access those 5 factors and to send them to somewhere else, your very top component must have all of them.
     
     Pros - You can bring everything at once and it wouldn't make you confused easily.
     Cons - What if there are over 100 or more of values/methods?

2. Accessing only state values
   - You are also able to access 'some' parts of all by importing {store} instance that has been declared in index.js or so-and-so.js file.
     In terms of the flow and concept of Flux/Redux, the data flow must be very flexible regardless of where a component is located, which means 
     that you might have chosen to use Redux/Flux since you've been already fed up with using pure react especially on managing data.
     But, if you are still obessed with the way #1, what would be different from when you didn't use Redux/Flux?


So, I consider, bascially data can be sent to other components freely, and methods made by action creators better be handled by importing store instance
whenever you want, so you don't need to declare all of things in just 1 file.