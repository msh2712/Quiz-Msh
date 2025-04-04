export default [
    
        {
            "question": "What is the purpose of the `useState` hook in React?",
            "options": ["To manage the state in functional components", "To perform side effects in functional components", "To fetch data from an API", "To manage routes in a React app"],
            "answer": "To manage the state in functional components",
            "topic": "useState"
        },
        {
            "question": "How do you initialize state with `useState`?",
            "options": ["const [state, setState] = useState();", "const [state] = useState(0);", "const state = useState();", "const setState = useState(0);"],
            "answer": "const [state, setState] = useState();",
            "topic": "useState"
        },
        {
            "question": "What does `useState(0)` do?",
            "options": ["Initializes state with 0", "Returns a function that sets state", "Creates a new component", "Does nothing"],
            "answer": "Initializes state with 0",
            "topic": "useState"
        },
        {
            "question": "Which of the following is the correct way to update state using `useState`?",
            "options": ["setState(newState);", "useState(newState);", "state = newState;", "state.set(newState);"],
            "answer": "setState(newState);",
            "topic": "useState"
        },
        {
            "question": "What does the `useState` hook return?",
            "options": ["A function to update state and the current state value", "The state value only", "The state update function only", "A callback function"],
            "answer": "A function to update state and the current state value",
            "topic": "useState"
        },
        {
            "question": "Can you have multiple `useState` hooks in one component?",
            "options": ["Yes, you can have as many as needed", "No, you can only have one", "Yes, but only if they are in separate components", "No, you should use `useReducer` instead"],
            "answer": "Yes, you can have as many as needed",
            "topic": "useState"
        },
        {
            "question": "What is the default value of state when using `useState`?",
            "options": ["Undefined", "Null", "Zero", "The value you pass to `useState`"],
            "answer": "The value you pass to `useState`",
            "topic": "useState"
        },
        {
            "question": "Is it necessary to initialize state with a value in `useState`?",
            "options": ["No, it can be undefined", "Yes, it must always have a value", "Yes, but the value can be null", "No, the default value is automatically assigned"],
            "answer": "No, it can be undefined",
            "topic": "useState"
        },
        {
            "question": "How do you reset the state to its initial value using `useState`?",
            "options": ["Reassign the state variable", "Use the setState function with the initial value", "Call the state variable again", "You cannot reset state in React"],
            "answer": "Use the setState function with the initial value",
            "topic": "useState"
        },
        {
            "question": "What happens when state is updated using `setState` in `useState`?",
            "options": ["The component re-renders", "Nothing happens", "Only the state is updated", "The page is completely refreshed"],
            "answer": "The component re-renders",
            "topic": "useState"
        },
        {
            "question": "Can `useState` be used in class components?",
            "options": ["No, it's only for functional components", "Yes, but it's not recommended", "Yes, with React hooks enabled", "Yes, it can be used in both"],
            "answer": "No, it's only for functional components",
            "topic": "useState"
        },
        {
            "question": "What type of value can state hold in `useState`?",
            "options": ["Any type of value", "Only strings", "Only objects", "Only numbers"],
            "answer": "Any type of value",
            "topic": "useState"
        },
        {
            "question": "Can you pass a function to `setState` in `useState`?",
            "options": ["Yes, to update state based on the previous state", "No, you can only pass a static value", "Yes, but only for arrays", "No, it is not allowed"],
            "answer": "Yes, to update state based on the previous state",
            "topic": "useState"
        },
        {
            "question": "What is a common use case for `useState`?",
            "options": ["Tracking input values in forms", "Fetching data from an API", "Managing routes", "Handling lifecycle methods"],
            "answer": "Tracking input values in forms",
            "topic": "useState"
        },
        {
            "question": "What will happen if you call `setState` multiple times in a row?",
            "options": ["The component will only re-render once", "The component will re-render multiple times", "The component will not re-render", "Nothing will happen"],
            "answer": "The component will only re-render once",
            "topic": "useState"
        },
        {
            "question": "Which hook can be used together with `useState` for more complex state management?",
            "options": ["useReducer", "useEffect", "useContext", "useMemo"],
            "answer": "useReducer",
            "topic": "useState"
        },
        {
            "question": "What does the second argument of the `useState` function represent?",
            "options": ["The function to update the state", "The initial state value", "A condition to check before updating state", "The component's render method"],
            "answer": "The initial state value",
            "topic": "useState"
        },
        {
            "question": "Can you access the updated state immediately after calling `setState`?",
            "options": ["No, state updates are asynchronous", "Yes, the state updates synchronously", "Yes, it happens immediately", "No, it requires a separate function to access it"],
            "answer": "No, state updates are asynchronous",
            "topic": "useState"
        },
        {
            "question": "What happens if you provide a function as the argument to `useState`?",
            "options": ["It will calculate the initial state lazily", "It will ignore the function and use the default value", "It will cause an error", "It will execute the function immediately"],
            "answer": "It will calculate the initial state lazily",
            "topic": "useState"
        },
        {
            "question": "How do you handle an array as state in `useState`?",
            "options": ["Just pass an array to `useState`", "Use `useArrayState` instead", "Arrays cannot be used with `useState`", "You need to spread the array in the setState function"],
            "answer": "Just pass an array to `useState`",
            "topic": "useState"
        },
        {
            "question": "What is the best practice when updating state based on the previous state?",
            "options": ["Use a function inside `setState`", "Directly assign the new value to the state", "Use a separate hook", "Update state outside of the component"],
            "answer": "Use a function inside `setState`",
            "topic": "useState"
        },
        {
            "question": "What is one way to update state using the previous state value with `useState`?",
            "options": ["setState(prevState => prevState + 1);", "setState(prevState + 1);", "setState(prevState++);", "setState(prevState * 2);"],
            "answer": "setState(prevState => prevState + 1);",
            "topic": "useState"
        },
        {
            "question": "What is an example of a value you might store in state with `useState`?",
            "options": ["A boolean flag", "An array of items", "An object with user data", "All of the above"],
            "answer": "All of the above",
            "topic": "useState"
        },
        {
            "question": "Can `useState` be used inside loops or conditions?",
            "options": ["No, it should be called at the top level of the component", "Yes, it works in loops", "Yes, it works inside if conditions", "No, it can only be used in functions"],
            "answer": "No, it should be called at the top level of the component",
            "topic": "useState"
        },
        {
            "question": "Which of these is a limitation of `useState`?",
            "options": ["It doesn't manage complex state logic well", "It doesn't trigger re-renders", "It is only for objects", "It cannot handle async operations"],
            "answer": "It doesn't manage complex state logic well",
            "topic": "useState"
        },
        {
            "question": "What happens when you try to update state using `useState` but the new state is the same as the previous one?",
            "options": ["The component does not re-render", "The component re-renders", "An error occurs", "The state value is reset to null"],
            "answer": "The component does not re-render",
            "topic": "useState"
        }
        , {
            "question": "What is the purpose of the `useEffect` hook in React?",
            "options": ["To handle side effects in functional components", "To store state in functional components", "To trigger re-renders", "To manage events in functional components"],
            "answer": "To handle side effects in functional components",
            "topic": "useEffect"
        },
        {
            "question": "When does the `useEffect` hook run in a component?",
            "options": ["After every render", "Before the component renders", "Only on the first render", "When the component mounts and unmounts"],
            "answer": "After every render",
            "topic": "useEffect"
        },
        {
            "question": "What is the syntax to use `useEffect` in a functional component?",
            "options": ["useEffect(callback, []);", "useEffect([], callback);", "useEffect(callback);", "useEffect();"],
            "answer": "useEffect(callback);",
            "topic": "useEffect"
        },
        {
            "question": "What is the second argument of `useEffect` used for?",
            "options": ["To specify dependencies for the effect", "To specify when the effect should run", "To indicate which component will handle the effect", "To clean up the effect"],
            "answer": "To specify dependencies for the effect",
            "topic": "useEffect"
        },
        {
            "question": "What does an empty dependency array (`[]`) mean in `useEffect`?",
            "options": ["The effect runs only once after the initial render", "The effect runs after every render", "The effect never runs", "The effect runs only when the component is unmounted"],
            "answer": "The effect runs only once after the initial render",
            "topic": "useEffect"
        },
        {
            "question": "Can `useEffect` be used to fetch data in a functional component?",
            "options": ["Yes, it's a common use case", "No, you must use a class component for that", "Yes, but only with the useState hook", "No, you should not use it for data fetching"],
            "answer": "Yes, it's a common use case",
            "topic": "useEffect"
        },
        {
            "question": "How do you clean up an effect in `useEffect`?",
            "options": ["By returning a cleanup function inside the effect", "By calling `useEffect` again", "By passing an empty array to the second argument", "By using `useState` to reset values"],
            "answer": "By returning a cleanup function inside the effect",
            "topic": "useEffect"
        },
        {
            "question": "What happens if you pass `null` as the second argument to `useEffect`?",
            "options": ["The effect runs after every render", "The effect never runs", "The effect runs only once", "The effect only runs when dependencies change"],
            "answer": "The effect runs after every render",
            "topic": "useEffect"
        },
        {
            "question": "Can you use `useEffect` multiple times in the same component?",
            "options": ["Yes, you can use it as many times as needed", "No, only one `useEffect` is allowed per component", "Yes, but only for side effects of the same type", "No, you should always use one `useEffect` hook per component"],
            "answer": "Yes, you can use it as many times as needed",
            "topic": "useEffect"
        },
        {
            "question": "How do you specify that an effect should only run when a certain value changes?",
            "options": ["By adding the value to the dependency array", "By calling the effect inside an event handler", "By using the `useState` hook", "By setting the value in a different `useEffect`"],
            "answer": "By adding the value to the dependency array",
            "topic": "useEffect"
        },
        {
            "question": "What is the main advantage of using `useEffect` over class-based lifecycle methods?",
            "options": ["You can use `useEffect` in functional components", "It automatically handles state changes", "It is better for managing multiple side effects", "It automatically cleans up after each render"],
            "answer": "You can use `useEffect` in functional components",
            "topic": "useEffect"
        },
        {
            "question": "Which of the following scenarios would you use `useEffect` for?",
            "options": ["Making API calls", "Adding event listeners", "Subscribing to a data stream", "All of the above"],
            "answer": "All of the above",
            "topic": "useEffect"
        },
        {
            "question": "What will happen if the dependency array of `useEffect` contains an empty object `{}`?",
            "options": ["It will cause an error", "It will behave like an empty array", "It will cause an infinite loop", "It will never run the effect"],
            "answer": "It will cause an infinite loop",
            "topic": "useEffect"
        },
        {
            "question": "What is the purpose of `useEffect`'s cleanup function?",
            "options": ["To avoid memory leaks", "To reset state variables", "To remove event listeners or cancel subscriptions", "Both A and C"],
            "answer": "Both A and C",
            "topic": "useEffect"
        },
        {
            "question": "How would you trigger an effect only when a specific variable has changed?",
            "options": ["Include that variable in the dependency array", "Use `useState` with the variable", "Call `useEffect` inside the component function", "Reinitialize the component when the variable changes"],
            "answer": "Include that variable in the dependency array",
            "topic": "useEffect"
        },
        {
            "question": "What is the correct way to update a component state after an effect runs?",
            "options": ["Use the `setState` function inside `useEffect`", "Directly modify the state inside `useEffect`", "State updates are not allowed in `useEffect`", "State must be updated before `useEffect`"],
            "answer": "Use the `setState` function inside `useEffect`",
            "topic": "useEffect"
        },
        {
            "question": "Can `useEffect` be used to handle asynchronous code?",
            "options": ["Yes, but with promises or async/await inside the effect", "No, `useEffect` cannot handle async code", "Yes, but only inside class components", "No, you should use a custom hook for that"],
            "answer": "Yes, but with promises or async/await inside the effect",
            "topic": "useEffect"
        },
        {
            "question": "What happens if you omit the dependency array in `useEffect`?",
            "options": ["The effect runs after every render", "The effect never runs", "The effect runs only once", "The effect runs only when the component unmounts"],
            "answer": "The effect runs after every render",
            "topic": "useEffect"
        },
        {
            "question": "How can you prevent an effect from running after every render?",
            "options": ["By passing a dependency array", "By calling `useEffect` inside an event handler", "By using `useState`", "By not returning a cleanup function"],
            "answer": "By passing a dependency array",
            "topic": "useEffect"
        },
        {
            "question": "What is the default behavior of `useEffect` if no dependency array is provided?",
            "options": ["It runs on every render", "It only runs on the first render", "It runs once on mount and unmount", "It never runs"],
            "answer": "It runs on every render",
            "topic": "useEffect"
        },
        {
            "question": "How do you prevent `useEffect` from running when the component re-renders multiple times?",
            "options": ["Use `useState` to store the effect result", "Use an empty dependency array", "Use `useMemo` inside the effect", "Use `useEffect` inside a conditional block"],
            "answer": "Use an empty dependency array",
            "topic": "useEffect"
        },
        {
            "question": "How can you run `useEffect` only once when the component mounts?",
            "options": ["Pass an empty array (`[]`) as the second argument", "Call `useEffect` with a function", "Return a cleanup function", "Use `useState` to track renders"],
            "answer": "Pass an empty array (`[]`) as the second argument",
            "topic": "useEffect"
        },
        {
            "question": "What can cause an effect in `useEffect` to run multiple times?",
            "options": ["Changes in dependencies", "Multiple `useEffect` hooks", "State updates", "All of the above"],
            "answer": "All of the above",
            "topic": "useEffect"
        },
        {
            "question": "Can `useEffect` be used to handle animations in React?",
            "options": ["Yes, it's commonly used for animations", "No, animations require a different hook", "Yes, but only if you are using CSS animations", "No, `useEffect` should not be used for animations"],
            "answer": "Yes, it's commonly used for animations",
            "topic": "useEffect"
        },
            {
                "question": "What does the `useContext` hook do in React?",
                "options": ["It allows components to access context values", "It manages state in functional components", "It handles routing in functional components", "It updates the component's lifecycle methods"],
                "answer": "It allows components to access context values",
                "topic": "useContext"
            },
            {
                "question": "Which of the following must be used to provide context values in React?",
                "options": ["`Context.Provider`", "`useState`", "`useEffect`", "`Component`"],
                "answer": "`Context.Provider`",
                "topic": "useContext"
            },
            {
                "question": "How do you access the context value inside a functional component using `useContext`?",
                "options": ["`const contextValue = useContext(MyContext);`", "`const contextValue = useContext(MyContext.Provider);`", "`const contextValue = MyContext.useContext();`", "`const contextValue = useContext(MyContext.ProviderValue);`"],
                "answer": "`const contextValue = useContext(MyContext);`",
                "topic": "useContext"
            },
            {
                "question": "Which of the following is a valid context provider syntax in React?",
                "options": ["`<MyContext.Provider value={value}>`", "`<MyContext.Consumer value={value}>`", "`<MyContext.Provider value={state}>`", "`<useContext.Provider value={value}>`"],
                "answer": "`<MyContext.Provider value={value}>`",
                "topic": "useContext"
            },
            {
                "question": "Can `useContext` be used outside of a component?",
                "options": ["No, it must be used inside a functional component", "Yes, it can be used anywhere in the app", "Yes, but only in class components", "No, it must be used with `useEffect`"],
                "answer": "No, it must be used inside a functional component",
                "topic": "useContext"
            },
            {
                "question": "What happens if a component consumes context using `useContext` without a matching `Context.Provider`?",
                "options": ["It returns `undefined`", "It causes an error", "It uses the default value from the context", "It returns null"],
                "answer": "It uses the default value from the context",
                "topic": "useContext"
            },
            {
                "question": "Which of the following hooks can be used to share global state across components in React?",
                "options": ["`useState`", "`useContext`", "`useReducer`", "`useMemo`"],
                "answer": "`useContext`",
                "topic": "useContext"
            },
            {
                "question": "What is the primary benefit of using `useContext`?",
                "options": ["It allows components to avoid prop-drilling", "It simplifies state management", "It allows for global routing", "It enables direct DOM manipulation"],
                "answer": "It allows components to avoid prop-drilling",
                "topic": "useContext"
            },
            {
                "question": "How would you define the default value for a context in React?",
                "options": ["`const MyContext = React.createContext(defaultValue);`", "`const MyContext = useContext(defaultValue);`", "`const MyContext = React.createContext();`", "`const MyContext = useContext();`"],
                "answer": "`const MyContext = React.createContext(defaultValue);`",
                "topic": "useContext"
            },
            {
                "question": "Can you update the context value directly by using `useContext`?",
                "options": ["No, `useContext` is only for reading the context", "Yes, `useContext` can also be used to update context", "Yes, but only if the context is a state hook", "Yes, `useContext` can modify context directly"],
                "answer": "No, `useContext` is only for reading the context",
                "topic": "useContext"
            },
            {
                "question": "How would you provide a value to context for consumption by child components?",
                "options": ["By using `Context.Provider`", "By using `useContext` directly", "By calling `useContext` in the parent component", "By passing props to each child component"],
                "answer": "By using `Context.Provider`",
                "topic": "useContext"
            },
            {
                "question": "Which of the following would you use to consume context values in a class component?",
                "options": ["`Context.Consumer`", "`useContext`", "`Context.Provider`", "`useState`"],
                "answer": "`Context.Consumer`",
                "topic": "useContext"
            },
            {
                "question": "How can you update the value of context in a component using `useContext`?",
                "options": ["Use the context update function provided by the `Context.Provider`", "Use `setContext` directly", "Update state in the component using `useState`", "You cannot update context with `useContext`"],
                "answer": "Use the context update function provided by the `Context.Provider`",
                "topic": "useContext"
            },
            {
                "question": "What is one potential drawback of using context excessively?",
                "options": ["It may cause unnecessary re-renders of all consuming components", "It can cause memory leaks", "It complicates code readability", "It requires more state management hooks"],
                "answer": "It may cause unnecessary re-renders of all consuming components",
                "topic": "useContext"
            },
            {
                "question": "Which of the following is a common use case for `useContext`?",
                "options": ["Sharing user authentication state", "Managing local component state", "Handling UI events", "Storing form inputs"],
                "answer": "Sharing user authentication state",
                "topic": "useContext"
            },
            {
                "question": "What is the default value for `useContext` if no `Context.Provider` is used?",
                "options": ["`undefined`", "`null`", "`false`", "`defaultValue` passed to `createContext`"],
                "answer": "`defaultValue` passed to `createContext`",
                "topic": "useContext"
            },
            {
                "question": "Can you pass a `useContext` hook to another hook in React?",
                "options": ["Yes, but only to custom hooks", "No, `useContext` cannot be passed to hooks", "Yes, you can pass it anywhere", "No, hooks cannot be passed as arguments"],
                "answer": "Yes, but only to custom hooks",
                "topic": "useContext"
            },
            {
                "question": "What is the main reason why `useContext` is better than prop-drilling?",
                "options": ["It allows components to share data without passing props manually", "It requires less code", "It guarantees that props will always be updated", "It automatically handles re-renders"],
                "answer": "It allows components to share data without passing props manually",
                "topic": "useContext"
            },
            {
                "question": "What is the behavior of `useContext` when you access context values that have changed?",
                "options": ["The component re-renders automatically", "The component does not re-render", "The component logs a warning", "Nothing happens"],
                "answer": "The component re-renders automatically",
                "topic": "useContext"
            },
            {
                "question": "What happens when you call `useContext` in a component that is not wrapped in a `Context.Provider`?",
                "options": ["The hook will return the default value", "The hook will return `null`", "The component will not render", "An error will be thrown"],
                "answer": "The hook will return the default value",
                "topic": "useContext"
            },
            {
                "question": "What is the first step when using `useContext` in a component?",
                "options": ["Call `useContext` with the context object", "Wrap the component with `Context.Provider`", "Create the context using `React.createContext`", "Use `useState` to manage context"],
                "answer": "Create the context using `React.createContext`",
                "topic": "useContext"
            },
            {
                "question": "Which React hook is typically used with `useContext` for managing shared global state?",
                "options": ["`useState`", "`useReducer`", "`useEffect`", "`useMemo`"],
                "answer": "`useReducer`",
                "topic": "useContext"
            },
            {
                "question": "Can you consume multiple contexts in the same component using `useContext`?",
                "options": ["Yes, you can call `useContext` for each context", "No, only one context can be consumed per component", "Yes, but only one context can be used at a time", "No, context consumption must happen in a separate component"],
                "answer": "Yes, you can call `useContext` for each context",
                "topic": "useContext"
            },
            {
                "question": "Can you nest multiple `Context.Provider` components in a React app?",
                "options": ["Yes, it’s common to nest providers", "No, you can only use one `Context.Provider` per app", "Yes, but only one can be active at a time", "No, nesting causes errors"],
                "answer": "Yes, it’s common to nest providers",
                "topic": "useContext"
            },
            {
                "question": "When using `useContext`, when is the context value updated in the consuming component?",
                "options": ["After the next render cycle", "Immediately after the context value changes", "Only when the component re-renders", "Only on the first render"],
                "answer": "After the next render cycle",
                "topic": "useContext"
            },
            {
                "question": "Can `useContext` help avoid prop-drilling when passing data deeply through nested components?",
                "options": ["Yes, it provides a more efficient way to share data", "No, `useContext` is only for global data", "Yes, but it can cause unnecessary re-renders", "No, prop-drilling cannot be avoided"],
                "answer": "Yes, it provides a more efficient way to share data",
                "topic": "useContext"
            }, {
                "question": "What does the `useRef` hook in React do?",
                "options": ["It creates a reference that persists across renders", "It stores the state in a functional component", "It updates the DOM directly", "It triggers re-renders when the value changes"],
                "answer": "It creates a reference that persists across renders",
                "topic": "useRef"
            },
            {
                "question": "How is `useRef` different from `useState`?",
                "options": ["`useRef` does not trigger re-renders when its value changes", "`useState` does not persist across renders", "`useRef` is used for state management", "`useState` is used for storing DOM references"],
                "answer": "`useRef` does not trigger re-renders when its value changes",
                "topic": "useRef"
            },
            {
                "question": "How do you create a reference using `useRef`?",
                "options": ["`const myRef = useRef();`", "`const myRef = useRef(0);`", "`const myRef = useRef('initial');`", "`const myRef = createRef();`"],
                "answer": "`const myRef = useRef();`",
                "topic": "useRef"
            },
            {
                "question": "Can you access the DOM element directly using `useRef`?",
                "options": ["Yes, by assigning the reference to a DOM element", "No, `useRef` only stores data", "Yes, but only for class components", "No, `useRef` cannot access DOM elements"],
                "answer": "Yes, by assigning the reference to a DOM element",
                "topic": "useRef"
            },
            {
                "question": "Which of the following is a common use case for `useRef`?",
                "options": ["Accessing DOM elements", "Storing mutable data", "Handling form input values", "All of the above"],
                "answer": "All of the above",
                "topic": "useRef"
            },
            {
                "question": "What value does `useRef` return?",
                "options": ["An object with a `current` property", "A function to update the ref value", "A string representing the reference", "A new state variable"],
                "answer": "An object with a `current` property",
                "topic": "useRef"
            },
            {
                "question": "Can the value of a `useRef` object change without causing a re-render?",
                "options": ["Yes", "No", "Yes, but only if the `useRef` is a state hook", "No, `useRef` triggers re-renders"],
                "answer": "Yes",
                "topic": "useRef"
            },
            {
                "question": "How do you access the value of a ref created with `useRef`?",
                "options": ["`myRef.current`", "`myRef.value`", "`myRef.get()`", "`myRef.state`"],
                "answer": "`myRef.current`",
                "topic": "useRef"
            },
            {
                "question": "What happens when you assign a `useRef` to an HTML element in JSX?",
                "options": ["It creates a reference to the DOM element", "It triggers a re-render", "It stores the component's state", "It passes data to other components"],
                "answer": "It creates a reference to the DOM element",
                "topic": "useRef"
            },
            {
                "question": "Can `useRef` be used to store a previous state value?",
                "options": ["Yes, it can store any mutable value", "No, it can only store references to DOM elements", "Yes, but only for `useState` hooks", "No, `useRef` is not persistent across renders"],
                "answer": "Yes, it can store any mutable value",
                "topic": "useRef"
            },
            {
                "question": "Which of the following is NOT a valid use of `useRef`?",
                "options": ["Accessing previous values of state", "Triggering re-renders", "Storing an interval ID", "Storing a DOM reference"],
                "answer": "Triggering re-renders",
                "topic": "useRef"
            },
            {
                "question": "How does `useRef` compare to `createRef`?",
                "options": ["`createRef` creates a new reference each time, while `useRef` persists across renders", "`createRef` is a React hook, while `useRef` is for class components", "`useRef` is not recommended for use in React", "`createRef` is faster than `useRef`"],
                "answer": "`createRef` creates a new reference each time, while `useRef` persists across renders",
                "topic": "useRef"
            },
            {
                "question": "Can you store a timer ID with `useRef`?",
                "options": ["Yes, it’s commonly used for storing timer IDs", "No, `useRef` can only store numbers", "Yes, but only for state management purposes", "No, `useRef` cannot store timers"],
                "answer": "Yes, it’s commonly used for storing timer IDs",
                "topic": "useRef"
            },
            {
                "question": "What is the behavior of a `useRef` value when the component re-renders?",
                "options": ["The value persists across re-renders", "The value is reset to `undefined`", "The value is reset to its initial value", "The value is updated automatically with each render"],
                "answer": "The value persists across re-renders",
                "topic": "useRef"
            },
            {
                "question": "Can you use `useRef` to track user input or form values?",
                "options": ["Yes, `useRef` can store form values", "No, form values must be stored with `useState`", "Yes, but only for uncontrolled components", "No, it cannot store user input"],
                "answer": "Yes, but only for uncontrolled components",
                "topic": "useRef"
            },
            {
                "question": "Which of the following would you NOT use `useRef` for?",
                "options": ["Storing a DOM element reference", "Storing the previous state value", "Storing mutable values that don’t trigger re-renders", "Managing application-wide state"],
                "answer": "Managing application-wide state",
                "topic": "useRef"
            },
            {
                "question": "How do you create a ref with an initial value using `useRef`?",
                "options": ["`const myRef = useRef(initialValue);`", "`const myRef = createRef(initialValue);`", "`const myRef = useRef();`", "`const myRef = ref(initialValue);`"],
                "answer": "`const myRef = useRef(initialValue);`",
                "topic": "useRef"
            },
            {
                "question": "Which of the following hooks is commonly used alongside `useRef` to manage the lifecycle of a component?",
                "options": ["`useEffect`", "`useState`", "`useReducer`", "`useLayoutEffect`"],
                "answer": "`useEffect`",
                "topic": "useRef"
            },
            {
                "question": "Can you use `useRef` to store a value that doesn't require rendering updates?",
                "options": ["Yes, `useRef` is perfect for mutable values that don't trigger re-renders", "No, `useRef` always triggers a re-render", "Yes, but only with `useState`", "No, `useRef` can only store references to DOM elements"],
                "answer": "Yes, `useRef` is perfect for mutable values that don't trigger re-renders",
                "topic": "useRef"
            },
            {
                "question": "What would happen if you tried to call `useRef` inside a class component?",
                "options": ["It would result in an error", "It would work as expected", "It would trigger re-renders", "It would be ignored"],
                "answer": "It would result in an error",
                "topic": "useRef"
            },
            {
                "question": "How does `useRef` persist values across re-renders?",
                "options": ["By storing the reference in a `current` property", "By using the React context", "By forcing re-renders on value change", "By storing the value in the state"],
                "answer": "By storing the reference in a `current` property",
                "topic": "useRef"
            },
            {
                "question": "When should you consider using `useRef` instead of `useState`?",
                "options": ["When you don't need the value to trigger a re-render", "When the value needs to be reactive", "When the value should be used to store data", "When managing component lifecycle is required"],
                "answer": "When you don't need the value to trigger a re-render",
                "topic": "useRef"
            },
            {
                "question": "Which of the following is NOT a recommended use case for `useRef`?",
                "options": ["Accessing DOM elements", "Storing mutable data", "Triggering re-renders", "Storing previous values of state"],
                "answer": "Triggering re-renders",
                "topic": "useRef"
            },
            {
                "question": "How can you clear the value stored in `useRef`?",
                "options": ["By setting `myRef.current = null`", "By calling `useRef.clear()`", "By passing an empty argument to `useRef()`", "By using `useState` to reset the value"],
                "answer": "By setting `myRef.current = null`",
                "topic": "useRef"
            },  {
                "question": "What is the primary purpose of the `useReducer` hook in React?",
                "options": ["It manages complex state logic", "It manages props", "It manages context", "It triggers re-renders based on state changes"],
                "answer": "It manages complex state logic",
                "topic": "useReducer"
            },
            {
                "question": "How does `useReducer` differ from `useState`?",
                "options": ["`useReducer` is used for more complex state logic with actions", "`useReducer` is for accessing context", "`useReducer` doesn't trigger re-renders", "`useState` is for managing refs"],
                "answer": "`useReducer` is used for more complex state logic with actions",
                "topic": "useReducer"
            },
            {
                "question": "What is the syntax to initialize state using `useReducer`?",
                "options": ["`const [state, dispatch] = useReducer(reducer, initialState);`", "`const [state, setState] = useReducer(initialState);`", "`const [state, dispatch] = useState(reducer);`", "`const [dispatch, state] = useReducer(reducer);`"],
                "answer": "`const [state, dispatch] = useReducer(reducer, initialState);`",
                "topic": "useReducer"
            },
            {
                "question": "What does the `dispatch` function do in `useReducer`?",
                "options": ["It dispatches actions to modify the state", "It sets the initial state", "It re-renders the component", "It clears the state values"],
                "answer": "It dispatches actions to modify the state",
                "topic": "useReducer"
            },
            {
                "question": "Which of the following is required for `useReducer` to work?",
                "options": ["A reducer function", "A context provider", "A default state", "A component lifecycle method"],
                "answer": "A reducer function",
                "topic": "useReducer"
            },
            {
                "question": "What does the reducer function take as its arguments in `useReducer`?",
                "options": ["The current state and the action", "The initial state and the event", "The component props and state", "The state and the component ref"],
                "answer": "The current state and the action",
                "topic": "useReducer"
            },
            {
                "question": "Which of the following is true about `useReducer`?",
                "options": ["It is used for managing complex state with multiple sub-values", "It is simpler than `useState`", "It is only for class components", "It is used for handling DOM events"],
                "answer": "It is used for managing complex state with multiple sub-values",
                "topic": "useReducer"
            },
            {
                "question": "Which type of values can be managed using `useReducer`?",
                "options": ["Complex states like arrays or objects", "Only simple strings or numbers", "Only boolean values", "Only form inputs"],
                "answer": "Complex states like arrays or objects",
                "topic": "useReducer"
            },
            {
                "question": "How is the action passed to the reducer function in `useReducer`?",
                "options": ["As the second argument of the `dispatch` function", "As a parameter to the reducer function", "As the initial state", "As a prop to the component"],
                "answer": "As the second argument of the `dispatch` function",
                "topic": "useReducer"
            },
            {
                "question": "What is the return value of the `useReducer` hook?",
                "options": ["An array with state and dispatch", "A state value", "A component method", "A reference to the DOM element"],
                "answer": "An array with state and dispatch",
                "topic": "useReducer"
            },
            {
                "question": "Which of the following is a typical use case for `useReducer`?",
                "options": ["When managing state that depends on multiple actions", "When you need to store only one value", "When using a context provider", "When accessing DOM elements"],
                "answer": "When managing state that depends on multiple actions",
                "topic": "useReducer"
            },
            {
                "question": "How does the state change when using `useReducer`?",
                "options": ["The state is updated based on the action type", "The state is replaced by the action", "The state is updated immediately after the component renders", "The state is only updated once per event"],
                "answer": "The state is updated based on the action type",
                "topic": "useReducer"
            },
            {
                "question": "In the reducer function, what should the return value be?",
                "options": ["The new state after applying the action", "The old state", "The previous action", "The action type"],
                "answer": "The new state after applying the action",
                "topic": "useReducer"
            },
            {
                "question": "Can `useReducer` be used with `useContext` for managing global state?",
                "options": ["Yes, it's commonly used for global state management", "No, `useReducer` can only be used with `useState`", "Yes, but only with hooks in class components", "No, `useReducer` cannot work with context"],
                "answer": "Yes, it's commonly used for global state management",
                "topic": "useReducer"
            },
            {
                "question": "What does the `dispatch` function do in the context of `useReducer`?",
                "options": ["It sends actions to the reducer", "It initiates the state change", "It updates the component’s props", "It re-renders the component"],
                "answer": "It sends actions to the reducer",
                "topic": "useReducer"
            },
            {
                "question": "What is the first argument of the reducer function in `useReducer`?",
                "options": ["The current state", "The action object", "The dispatch function", "The component props"],
                "answer": "The current state",
                "topic": "useReducer"
            },
            {
                "question": "What should the reducer function return when no action matches?",
                "options": ["The current state", "A default value", "A new object", "Null"],
                "answer": "The current state",
                "topic": "useReducer"
            },
            {
                "question": "When would you use `useReducer` instead of `useState`?",
                "options": ["When the state logic is more complex and involves multiple sub-values", "When you need to update the state based on user input", "When the state is a simple boolean", "When you don’t want to trigger re-renders"],
                "answer": "When the state logic is more complex and involves multiple sub-values",
                "topic": "useReducer"
            },
            {
                "question": "Can `useReducer` be used for local state management in React?",
                "options": ["Yes, it is commonly used for managing local state", "No, `useReducer` is only for global state", "Yes, but only with class components", "No, it is only used with context"],
                "answer": "Yes, it is commonly used for managing local state",
                "topic": "useReducer"
            },
            {
                "question": "Which of the following is a potential downside of using `useReducer`?",
                "options": ["It can introduce complexity when managing simple state", "It cannot be used with context", "It triggers too many re-renders", "It cannot store nested objects"],
                "answer": "It can introduce complexity when managing simple state",
                "topic": "useReducer"
            },
            {
                "question": "How can you trigger an update to the state in `useReducer`?",
                "options": ["By calling the dispatch function", "By directly modifying the state object", "By using `useState`", "By triggering a re-render"],
                "answer": "By calling the dispatch function",
                "topic": "useReducer"
            },
            {
                "question": "What happens if you pass an action to the `dispatch` function that doesn't match any case in the reducer?",
                "options": ["The state remains unchanged", "An error is thrown", "The default value is returned", "The state is reset to the initial state"],
                "answer": "The state remains unchanged",
                "topic": "useReducer"
            },
            {
                "question": "What is the purpose of `useReducer`'s second argument, `initialState`?",
                "options": ["It sets the initial state value", "It defines the action types", "It stores the component's default props", "It defines the dispatch function"],
                "answer": "It sets the initial state value",
                "topic": "useReducer"
            },
            {
                "question": "Can the `useReducer` state be modified directly outside of the reducer function?",
                "options": ["No, it should only be updated through the `dispatch` function", "Yes, it can be modified directly", "Yes, but only for nested values", "No, the state cannot be modified directly in React"],
                "answer": "No, it should only be updated through the `dispatch` function",
                "topic": "useReducer"
            },
            {
                "question": "What type of action can be passed to `dispatch` in `useReducer`?",
                "options": ["Any object", "An array", "A string", "A function"],
                "answer": "Any object",
                "topic": "useReducer"
            }, {
                "question": "What is the purpose of the `useMemo` hook in React?",
                "options": ["It memoizes the result of a computation to optimize performance", "It allows the component to re-render on state change", "It stores a reference to a DOM element", "It triggers an effect after the component renders"],
                "answer": "It memoizes the result of a computation to optimize performance",
                "topic": "use Memo/Call.."
            },
            {
                "question": "When should you use `useMemo`?",
                "options": ["When a computation is expensive and should only be recalculated when dependencies change", "When you need to manage state across components", "When you need to handle events in a component", "When you need to fetch data from an API"],
                "answer": "When a computation is expensive and should only be recalculated when dependencies change",
                "topic": "use Memo/Call.."
            },
            {
                "question": "What does `useMemo` return?",
                "options": ["The memoized value of a computation", "A function that can trigger re-renders", "The previous value of state", "A reference to a DOM element"],
                "answer": "The memoized value of a computation",
                "topic": "use Memo/Call.."
            },
            {
                "question": "Which of the following is NOT a valid use case for `useMemo`?",
                "options": ["Memoizing the result of a heavy computation", "Avoiding unnecessary re-renders", "Memoizing the reference of a function", "Managing global state"],
                "answer": "Managing global state",
                "topic": "use Memo/Call.."
            },
            {
                "question": "How do you pass dependencies to `useMemo`?",
                "options": ["As the second argument", "As the first argument", "Inside the `useMemo` function", "It doesn't need dependencies"],
                "answer": "As the second argument",
                "topic": "use Memo/Call.."
            },
            {
                "question": "Which of the following is a potential downside of using `useMemo`?",
                "options": ["It can introduce unnecessary complexity", "It prevents the component from re-rendering", "It always reduces performance", "It triggers unnecessary re-renders"],
                "answer": "It can introduce unnecessary complexity",
                "topic": "use Memo/Call.."
            },
            {
                "question": "How does React know when to recompute the memoized value in `useMemo`?",
                "options": ["It compares the dependencies passed as an array", "It compares the values of the previous and current state", "It checks for DOM mutations", "It depends on the component lifecycle"],
                "answer": "It compares the dependencies passed as an array",
                "topic": "use Memo/Call.."
            },
            {
                "question": "What happens if you pass an empty array `[]` as the dependency to `useMemo`?",
                "options": ["The memoized value will only be computed once", "The memoized value will never change", "The memoized value will always recompute", "The memoized value will trigger an error"],
                "answer": "The memoized value will only be computed once",
                "topic": "use Memo/Call.."
            },
            {
                "question": "Does `useMemo` trigger re-renders?",
                "options": ["No, it only optimizes the computation", "Yes, when dependencies change", "Yes, every time the component renders", "No, it prevents all re-renders"],
                "answer": "Yes, when dependencies change",
                "topic": "use Memo/Call.."
            },
            {
                "question": "Which of the following is the correct syntax for using `useMemo`?",
                "options": ["`const memoizedValue = useMemo(() => computeExpensiveValue(), [dependency]);`", "`const memoizedValue = useMemo(computeExpensiveValue(), []);`", "`const memoizedValue = useMemo([dependency], computeExpensiveValue());`", "`const memoizedValue = useMemo(() => [dependency], computeExpensiveValue());`"],
                "answer": "`const memoizedValue = useMemo(() => computeExpensiveValue(), [dependency]);`",
                "topic": "use Memo/Call.."
            },
            {
                "question": "Can `useMemo` be used with arrays or objects?",
                "options": ["Yes, it can memoize complex data like arrays and objects", "No, it can only memoize primitive values", "Yes, but only for arrays", "No, it only works with functions"],
                "answer": "Yes, it can memoize complex data like arrays and objects",
                "topic": "use Memo/Call.."
            },
            {
                "question": "Which of the following hooks would you use alongside `useMemo` to optimize performance when rendering a large list?",
                "options": ["`useCallback`", "`useState`", "`useReducer`", "`useEffect`"],
                "answer": "`useCallback`",
                "topic": "use Memo/Call.."
            },
            {
                "question": "Which of the following best describes a typical use case for `useMemo`?",
                "options": ["Memoizing the result of a computation to prevent recalculation on every render", "Memoizing event handlers to optimize rendering", "Memoizing state values that trigger re-renders", "Storing DOM references for later use"],
                "answer": "Memoizing the result of a computation to prevent recalculation on every render",
                "topic": "use Memo/Call.."
            },
            {
                "question": "Does `useMemo` help reduce unnecessary re-renders by itself?",
                "options": ["No, it only optimizes expensive computations", "Yes, it helps optimize state updates", "Yes, it prevents re-renders when dependencies change", "No, it triggers re-renders by default"],
                "answer": "No, it only optimizes expensive computations",
                "topic": "use Memo/Call.."
            },
            {
                "question": "In which scenario would `useMemo` not be effective?",
                "options": ["When computations are simple and fast", "When there are no dependencies to track", "When you want to prevent re-renders", "When the computation is expensive"],
                "answer": "When computations are simple and fast",
                "topic": "use Memo/Call.."
            },
            {
                "question": "What is the return type of `useMemo`?",
                "options": ["The memoized value", "A reference to a DOM element", "A component function", "The previous state value"],
                "answer": "The memoized value",
                "topic": "use Memo/Call.."
            },  {
                "question": "What is the purpose of the `useCallback` hook in React?",
                "options": ["It memoizes functions to prevent unnecessary re-creations", "It stores a function for later use", "It triggers re-renders for specific events", "It fetches data from the server"],
                "answer": "It memoizes functions to prevent unnecessary re-creations",
                "topic": "use Memo/Call.."
            },
            {
                "question": "When should you use `useCallback`?",
                "options": ["When you need to memoize functions to avoid unnecessary re-creations", "When you need to fetch data from an API", "When you need to store values in state", "When you want to trigger an effect after render"],
                "answer": "When you need to memoize functions to avoid unnecessary re-creations",
                "topic": "use Memo/Call.."
            },
            {
                "question": "What does `useCallback` return?",
                "options": ["The memoized function", "A reference to the DOM element", "The previous value of state", "The current value of state"],
                "answer": "The memoized function",
                "topic": "use Memo/Call.."
            },
            {
                "question": "How does `useCallback` work with dependencies?",
                "options": ["It memoizes the function until the dependencies change", "It always returns a new function", "It doesn’t use dependencies", "It only works with state dependencies"],
                "answer": "It memoizes the function until the dependencies change",
                "topic": "use Memo/Call.."
            },
            {
                "question": "Which of the following is a valid use case for `useCallback`?",
                "options": ["To optimize performance when passing functions as props", "To trigger side effects after every render", "To store state values in the context", "To prevent re-renders in the component"],
                "answer": "To optimize performance when passing functions as props",
                "topic": "use Memo/Call.."
            },
            {
                "question": "How do you pass dependencies to `useCallback`?",
                "options": ["As the second argument", "As the first argument", "Inside the `useCallback` function", "It doesn't require dependencies"],
                "answer": "As the second argument",
                "topic": "use Memo/Call.."
            },
            {
                "question": "What happens if you pass an empty array `[]` as the dependency to `useCallback`?",
                "options": ["The function will only be created once", "The function will be recreated on every render", "The function will never be recreated", "The function will throw an error"],
                "answer": "The function will only be created once",
                "topic": "use Memo/Call.."
            },
            {
                "question": "Can `useCallback` be used to store event handlers?",
                "options": ["Yes, to prevent unnecessary re-creations of event handlers", "No, it can only store state values", "Yes, but only in class components", "No, it is not used for event handling"],
                "answer": "Yes, to prevent unnecessary re-creations of event handlers",
                "topic": "use Memo/Call.."
            },
            {
                "question": "What type of values can you pass as dependencies to `useCallback`?",
                "options": ["Any values that can change over time, such as state or props", "Only primitive values", "Only arrays", "Only functions"],
                "answer": "Any values that can change over time, such as state or props",
                "topic": "use Memo/Call.."
            },
            {
                "question": "What does `useCallback` help avoid in React components?",
                "options": ["Unnecessary function re-creations", "State updates", "Re-renders of the component", "Reinitialization of components"],
                "answer": "Unnecessary function re-creations",
                "topic": "use Memo/Call.."
            },
            {
                "question": "Which of the following is NOT a use case for `useCallback`?",
                "options": ["Memoizing event handlers passed to child components", "Memoizing the result of computations", "Preventing re-renders caused by passing new functions to child components", "Storing component state"],
                "answer": "Memoizing the result of computations",
                "topic": "use Memo/Call.."
            },
            {
                "question": "Does `useCallback` always reduce the number of re-renders?",
                "options": ["No, it only prevents unnecessary re-creation of functions", "Yes, it optimizes all renders", "Yes, it completely stops re-renders", "No, it only works with `useState`"],
                "answer": "No, it only prevents unnecessary re-creation of functions",
                "topic": "use Memo/Call.."
            },
            {
                "question": "What is the return value of `useCallback`?",
                "options": ["A memoized function", "A state value", "A component method", "A reference to a DOM element"],
                "answer": "A memoized function",
                "topic": "use Memo/Call.."
            },
            {
                "question": "Which hook is commonly used alongside `useCallback` to optimize performance in a functional component?",
                "options": ["`useMemo`", "`useState`", "`useEffect`", "`useReducer`"],
                "answer": "`useMemo`",
                "topic": "use Memo/Call.."
            },
            {
                "question": "How does `useCallback` relate to `useMemo`?",
                "options": ["`useCallback` memoizes functions, while `useMemo` memoizes values", "`useCallback` is used for DOM manipulation, while `useMemo` is used for state management", "`useCallback` and `useMemo` are used interchangeably", "They are unrelated"],
                "answer": "`useCallback` memoizes functions, while `useMemo` memoizes values",
                "topic": "use Memo/Call.."
            }
        
        
    
    
]