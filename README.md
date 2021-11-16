# Sprint 2 - Module 4 : Context API

## [Training Kit](https://github.com/BloomInstituteOfTechnology/Full-Stack-Web-Curriculum/tree/main/03-WebApplications-II/Sprint%2002%20-%20Advanced%20State%20Management/Module%204%20-%20Context%20API)

### [Previous Lesson Plan](https://github.com/BloomInstituteOfTechnology/Web_ContextAPI_GuidedProject)

----

## Objectives

By the end of this module, learners should be able to:
* describe what the Context API is and the problem is solves
* provide data to the component tree with a context provider
* consume data from a context object in nested components

----

## Instructor Resources
* 🐙 [Guided Project Starter](https://github.com/BloomInstituteOfTechnology/web-guided-project-context)
* 🐙 [Guided Project Solution](https://github.com/BloomInstituteOfTechnology/web-guided-project-context-solution)
* 🐙 [Module Project](https://github.com/BloomInstituteOfTechnology/web-module-project-context)
* 🐙 [Module Project Solution](https://github.com/BloomInstituteOfTechnology/web-module-project-context-solution)

----

## Guided Project Slack Message
> **Welcome to Unit 3**
> 1. Clone without forking the following repo: https://github.com/BloomInstituteOfTechnology/web-guided-project-context
> 2. Navigate into both the review and followAlong folders and run npm i to load dependences.
>
> :point_right: Technical issues spinning up the project? Please head over to the help channel!
>
> :point_right: If you fall behind during lecture and wish to catch up:
>
> `git fetch && git reset --hard origin/lecture`
>
> :point_right: Slido event: https://app.sli.do/event/msea4w8q

----

## Guided Project Zoom Invitation:
> **Unit 3 | Sprint 2 | Module 4: Context API**
> _______________________________________________________
> Zoom Link : https://lambdaschool.zoom.us/my/unit3withwarren
>
> Slido: https://app.sli.do/event/msea4w8q
>
> Guided Project: https://github.com/BloomInstituteOfTechnology/web-guided-project-context
>
> Module Project: https://github.com/BloomInstituteOfTechnology/web-module-project-context

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
3. Get our data using useContext(Context);

### Breakout for other subcomponents

### Module Project Review
* [React Shopping Cart](https://github.com/BloomInstituteOfTechnology/web-module-project-context)

## Breakout Slack Messages

----

## After Class Message
**Hope you all enjoyed today's guided Lesson!**
**A reminder if that office hours are from 2:30 - 3:00 Lambda Time.**
**Don't forget to complete the days Check for Understanding and Pulse Checks!**

**Here is a review of today's material.**

### Module Materials
Module Project: https://github.com/BloomInstituteOfTechnology/web-module-project-context
GP Slides: https://docs.google.com/presentation/d/1f72_l9lp0MPSr17oIO8II35zJULQwBzYtz42g6qRCws/edit?usp=sharing
Yesterday's Module Project Review: https://www.loom.com/share/e27acd4a457b4f5199c7a56d73c3ac91 PW: zeHVgo
Alternative GP Video: [Dustin Myers](https://youtu.be/fZGKUeccbKI) | [Josh Jacobson](https://youtu.be/ExgSVmW3pnw)| [Warren C. Longmire](https://youtu.be/a00j4OrWcVo) | [Brian Kirkby](https://youtu.be/RAwdfpd5GNE)

### Key Terminology
* 📝 *context api* - [A React Library that allows easy sharing of data across a component hierarchy](https://reactjs.org/docs/context.html)
* 📝 *the provider pattern* - [A design pattern where in all items contained within an element have access to an elements functionality.](https://blog.flexiple.com/provider-pattern-with-react-context-api/)

### Key Concepts
* 📝 *application state* - [The globally accessible data needed with a wide range of components.](https://stackoverflow.com/questions/22883759/what-is-the-difference-between-application-state-and-component-local-state-in-cl)

### Stretch Tutorial
* 📝 [Context Api In Classes and Hooks](https://www.taniarascia.com/using-context-api-in-react/)
