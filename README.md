Dev Stack

Dev Stack is an interactive web platform designed for software developers to explore modern technologies and curate custom tech stacks for their projects.

Technologies Used,

1.React.js (with TypeScript)
2.Tailwind CSS
3.React-Toastify
4.Vite
5.JSON Data Fetching
6.Core Features

1. Interactive Cards Grid: Dynamically displays technology tools in a responsive 3-column layout fetched from a local JSON source.

2. Stack Management Sidebar: Allows developers to add items to their stack, prevents duplicate entries, and supports individual or batch clearing.

3. Toast Feedback & Loading Spinner: Provides real-time notifications for user actions and displays a loading state while fetching data.

React Theoretical Questions & Answers

1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML directly inside JavaScript, making component rendering logical, clean, and easier to structure.

2. What is the difference between props and state?

Props: Data passed into a component from its parent (read-only/immutable).

State: Internal data owned and managed inside a component that changes over time and triggers re-renders.

3. What does the useState hook do, and where did you use it in this project?

useState allows functional components to hold and update local state. In this project, it is used to store technologies, selectedStack, loading state, and mobileMenuOpen state.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect handles side-effects in React components. It was used here to perform the fetch('/technologies.json') call once when the component initially mounts.

5. Why does every item in a .map() list need a unique key prop?

A unique key helps React efficiently track list items, update changed elements without re-rendering the whole DOM tree, and preserve component state correctly.

6. What is conditional rendering? Show one place you used it.

Conditional rendering displays specific UI elements based on state condition. Used in the sidebar: {selectedStack.length === 0 ? <EmptyMessage /> : <StackList />}.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent to Child: Data is passed down via props.

Child to Parent: Parent passes a callback function via props, which the child invokes with arguments to send data back up.
