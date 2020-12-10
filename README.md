# Sprint 2 - Module 4 : Context API

## [Training Kit](https://github.com/LambdaSchool/Full-Stack-Web-Curriculum/tree/main/03-WebApplications-II/Sprint%2002%20-%20Advanced%20State%20Management/Module%204%20-%20Context%20API)

### [Previous Lesson Plan](https://github.com/LambdaSchool/Web_ContextAPI_GuidedProject)

----

## Objectives

By the end of this module, learners should be able to:
* describe what the Context API is and the problem is solves
* provide data to the component tree with a context provider
* consume data from a context object in nested components

----

## Instructor Resources
* 🐙 [Guided Project Starter](https://github.com/LambdaSchool/web-guided-project-async-redux)
* 🐙 [Guided Project Solution](https://github.com/LambdaSchool/web-guided-project-async-redux-solution)
* 🐙 [Module Project](https://github.com/LambdaSchool/react-shopping-cart/blob/master/README.md)
* 🐙 [Module Project Solution](#)

----

## Guided Project Slack Message
> 1. Clone without forking the following repo: *base guided project repo*
> 2. Navigate into both the review and followAlong folders and run npm i to load dependences.
>
> :point_right: Technical issues spinning up the project? Please head over to the help channel!
> :point_right: If you fall behind during lecture and wish to catch up:
>
> git fetch && git reset --hard origin/lecture
>
> :point_right: Slido event: *insert slido link*

----

## Guided Project Zoom Invitation:
> Unit 3 | Sprint 2 | **Module 4: Context API**
> _______________________________________________________
> Zoom Link : *insert zoom link*
> Slido: *insert slido link*
> Guided Project: https://github.com/LambdaSchool/web-guided-project-async-redux
> Module Project: https://github.com/LambdaSchool/react-shopping-cart/blob/master/README.md

----

## Check for Understanding Questions

These are the questions used internally to check student understanding. Students will be instructed to answer these questions after the guided project. Please make sure to emphasize the concepts behind these answers.

#### What caution does the React docs give when using the context API?
* Context API causes you to use prop drilling
* Context API adds too many layers of components in the browser
* Using the context API makes passing data to children components harder
* **Using the context API makes component reuse harder**

#### What is the syntax to create a context object?
* useContext(const SampleContext = createContext)
* **const Context = useContext();**
* const SampleContext = createContext();
* const SampleContext = createContextObject()

#### To what prop on the Provider component do you pass your data?
* state
* action
* data
* **value**

#### What is the pattern called that we use to comsume context data with the Consumer component?
* context hook
* **Context Consumer pattern**
* custom hooks
* render props

#### What does the useContext hook return when called?
* A store that is seperate from the component tree structure
* a function to update the state of the Provider's component
* Whatever you passed into the Provider for that context object.
* **Any state that is managed by the Provider's component**

## Guided Project Outline

### Module Description

### Focus on Application State
* Reiterate that we have been focusing on application state vs component state.
* Engage the students on the difference.

### Highlight the two things we need to make Application State works.
* A system for storing our data and modularizing the exectution of our actions.
* A system for connecting our data to components.

### Review the approaches we have used for creating application state so far.
* State and Prop Drilling
* Reducers and Redux

### Review using State / Prop Drilling
* Pros:
  * Easy to setup
  * Keeps data code and ui in one place
* Cons:
  * Doesn't respect seperation of concerns
  * Gets Messy when spread across multiple components
* Advisement:
  * Only use for component state

### Using Reducers / Redux
* Pros:
  * Respects seperation of concerns
  * Easy to see and add to business logic at a glance
  * Can connect state to any component without prop drilling.
* Cons:
  * Lots of moving parts
  * Syntax can get confusing
  * Doesn't allow isolated application state over branches of components.
* Advisement:
  * Still the industry standard

### Using Context API
* Pros:
  * Allows even simpler access to data across components
  * Can connect to any data source you want (reducers or state)
  * It's simple to setup and you can use it across multiple parts of your component tree
* Cons:
  * Still new. Not integrated into legacy systems
  * Can still end up with issues with seperation of concerns if you go crazy with it.
* Advisement:
  * Great for new projects
  * Likely the future of React apps

### BREAK 

### Build Simple State based Application
* Import in data from data.js
* Build a 3 level deep app making use of state and prop drilling.

### Build an Idential app using Context API
* Import in needed files
```js
import { createContext, useContext} from 'react';
```
* Add in a PersonContext object
```js
export const PersonContext = createContext();
```

* Wrap all code in a Provider
```js
<PersonContext.Provider value={[person, setPerson]}>
  //Application code
<PersonContext.Provider>
```

* Use useContext(PersonContext) to access context data.
```js
const [person] = useContext(PersonContext);
```
### Setup for use for a reducer
* Create new reducer file.
* Create actions within the same file for now.
* Import useReducer and actions.
* Pass person and dispatch into Provider
* All of our display code works, just add in dispatch of actions.
* Demonstate using Consumer
```js
  <Context.Consumer>
    {
      data => {
        const {item} = data;
        return(<p>{item}</p>);
      }
    }
  </Context.Consumer>
```

### BREAK

### Introduce FollowAlong Code
* Show UI
* Show App.js highlighing state saved
* Show data structure
* Show FamilyTree, Parent and Sibling components.

### Lead breakout sessions for adding in context api.

### Walkthrough result
1. Import useContext, createContext.
2. Use createContext
3. Add Provider
4. Pass in needed data into Provider.

### Walkthrough adding data to subcomponents
1. useContext within subcomponent.
2. Make sure we export out our context.
3. 

### Describe Context

Explain what the context API is. I caution students not to use context too often by reading through the first paragraph in the **Before You Use Context** section in the [docs](https://reactjs.org/docs/context.html#before-you-use-context)

I usually draw out a component tree then discuss how data flow works with props, then explain how it would work with context/

### The Sandbox App

Help students look through the app so that you are all familiar with the data flow. Find which components are receiving data via props that we want to refactor to use context. Write this plan out with the students.

This can be done by having the students look through the app on their own and comment what they notice in a slack thread

### Creating the Context Object

- `import { createContext } from 'react';`
- Create a context object called `FamilyContext` - `export const FamilyContext = createContext();`
- console.log the context object and point out `Provider` and `Consumer`
  - these are capitalized because they are React components that we can render in our JSX

### Context Provider
- Wrap the component tree in the context Provider
- explain how we will use the `value` prop on the Provider to "provide" data to the component tree
- Pass the `activeFamily` state into the value prop
- Using the React dev tools, highlight the Provider component and show the family data being passed in
  - click on different families to show that when the state in `App.js` changes, that will be reflected in the Provider
  
### Context Consumer
I like to show one component with render props (see `Parent.js` in the solution sandbox) and one with the `useContext` hook (see `Siblings.js` in the solution sandbox). That way students see both ways that we can "consume" data in a child component
- In one of the components that you have chosen, consume data via context, whether that is with the render prop pattern or hook pattern (If you choose to show the render prop pattern, walk through it slowly, explaining each line of code thouroughly)
- Show the component in the React dev tools

### Breakout Session (optional)
- Choose another component that could potentially consume data from context. 
- Give students 10 minutes to work on using context vs props
- add this task list to slack so they know what to work on:
```
*Tasks* - Working in the `<component_name>`component:
- import the context object and the `useContext` hook
- call the context hook and pass in the context object and capture the returned value in a variable
- reference your context data in your JSX in place of referencing it with props
- make sure the app is still working
```


### Module Project Review
* [React Shopping Cart](https://github.com/LambdaSchool/react-shopping-cart/blob/master/README.md)

## Breakout Slack Messages

----

## After Class Message
Hope you all enjoyed today's guided Lesson!
A reminder if that office hours are from 3:30 - 4:30 Lambda Time. Don't forget to complete the days Check for Understanding and Pulse Checks! 

Module Project
https://github.com/LambdaSchool/react-shopping-cart/blob/master/README.md

Here is a review of today's material.

Key Terminology
* 📝 *term* - [description](#)

Key Concepts
* 📝 *concept* - [description](#)