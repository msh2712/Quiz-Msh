export default  [
    {
        "question": "What is the main purpose of Redux in a React application?",
        "options": ["To manage the global state of the application", "To create components", "To handle routing in a React app", "To perform DOM manipulation"],
        "answer": "To manage the global state of the application",
        "topic": "Redux"
    },
    {
        "question": "In Redux, what is a reducer responsible for?",
        "options": ["Handling actions and returning the next state", "Rendering components", "Fetching data from an API", "Triggering side effects"],
        "answer": "Handling actions and returning the next state",
        "topic": "Redux"
    },
    {
        "question": "Which of the following are the core principles of Redux?",
        "options": ["Single source of truth, state is read-only, changes are made with pure functions", "State is mutable, actions change state directly", "State is kept inside components, reducers handle actions", "Components manage their own state and dispatch actions"],
        "answer": "Single source of truth, state is read-only, changes are made with pure functions",
        "topic": "Redux"
    },
    {
        "question": "What does the `dispatch` function do in Redux?",
        "options": ["It sends an action to the reducer", "It retrieves the state from the store", "It renders the component", "It triggers side effects like API calls"],
        "answer": "It sends an action to the reducer",
        "topic": "Redux"
    },
    {
        "question": "What is an action in Redux?",
        "options": ["A plain JavaScript object that describes a change in the application", "A function that updates the UI", "A method that triggers state updates", "A special object that fetches data"],
        "answer": "A plain JavaScript object that describes a change in the application",
        "topic": "Redux"
    },
    {
        "question": "What is the purpose of the Redux store?",
        "options": ["To hold the entire state of the application", "To fetch data from an API", "To manage the component lifecycle", "To render components in React"],
        "answer": "To hold the entire state of the application",
        "topic": "Redux"
    },
    {
        "question": "How does Redux help in managing application state?",
        "options": ["By using actions to update state and reducers to specify how state changes", "By allowing components to directly modify state", "By enabling state changes only inside components", "By managing the DOM state directly"],
        "answer": "By using actions to update state and reducers to specify how state changes",
        "topic": "Redux"
    },
    {
        "question": "Which of the following is true about Redux actions?",
        "options": ["They must have a `type` property", "They are used to trigger state updates directly in components", "They are defined within components", "They contain only the state data without a type"],
        "answer": "They must have a `type` property",
        "topic": "Redux"
    },
    {
        "question": "In Redux, what does the reducer function take as its arguments?",
        "options": ["The current state and the action", "The action and the component props", "The current state and the component state", "The state and the DOM element"],
        "answer": "The current state and the action",
        "topic": "Redux"
    },
    {
        "question": "What does the Redux store do with actions and reducers?",
        "options": ["It dispatches actions and updates the state based on the reducers", "It only stores actions", "It only stores state values", "It listens to events and triggers state updates"],
        "answer": "It dispatches actions and updates the state based on the reducers",
        "topic": "Redux"
    },
    {
        "question": "How can you connect Redux state to a React component?",
        "options": ["By using the `connect` function from `react-redux`", "By using `useState` hook", "By passing the state as props from a parent component", "By using `useEffect` to trigger state updates"],
        "answer": "By using the `connect` function from `react-redux`",
        "topic": "Redux"
    },
    {
        "question": "Which of the following is the correct pattern to dispatch an action in Redux?",
        "options": ["`dispatch(action)`", "`dispatch(updateState)`", "`dispatch({type: 'UPDATE_STATE'})`", "`dispatch(setState)`"],
        "answer": "`dispatch({type: 'UPDATE_STATE'})`",
        "topic": "Redux"
    },
    {
        "question": "Which of the following is the React hook used to dispatch Redux actions in a functional component?",
        "options": ["`useDispatch`", "`useState`", "`useEffect`", "`useSelector`"],
        "answer": "`useDispatch`",
        "topic": "Redux"
    },
    {
        "question": "What is the `useSelector` hook used for in Redux?",
        "options": ["To access the state from the Redux store", "To dispatch actions to the store", "To update the component state", "To trigger a re-render of the component"],
        "answer": "To access the state from the Redux store",
        "topic": "Redux"
    },
    {
        "question": "How do you combine multiple reducers in Redux?",
        "options": ["Using `combineReducers()`", "Using `createStore()`", "By importing them into the store", "By using `useEffect` to combine them"],
        "answer": "Using `combineReducers()`",
        "topic": "Redux"
    },
    {
        "question": "Which of the following Redux actions are pure functions?",
        "options": ["Reducers", "Dispatchers", "Components", "Selectors"],
        "answer": "Reducers",
        "topic": "Redux"
    },
    {
        "question": "Which of the following best describes the purpose of Redux middleware?",
        "options": ["To intercept and handle actions before they reach the reducer", "To manage state in the store", "To handle events like component updates", "To store actions and reducers"],
        "answer": "To intercept and handle actions before they reach the reducer",
        "topic": "Redux"
    },
    {
        "question": "What is the main role of Redux Thunk?",
        "options": ["To allow asynchronous actions in Redux", "To combine reducers", "To directly manage component state", "To store the state in local storage"],
        "answer": "To allow asynchronous actions in Redux",
        "topic": "Redux"
    },
    {
        "question": "What type of value does a reducer function return?",
        "options": ["The next state of the application", "The action that was dispatched", "A new action", "A promise or a callback function"],
        "answer": "The next state of the application",
        "topic": "Redux"
    },
    {
        "question": "Can you use Redux in a functional component?",
        "options": ["Yes, with `useDispatch` and `useSelector` hooks", "No, Redux is only for class components", "Yes, but only for state management", "No, it requires use of `connect` only"],
        "answer": "Yes, with `useDispatch` and `useSelector` hooks",
        "topic": "Redux"
    },
    {
        "question": "Which of the following is the correct flow for state updates in Redux?",
        "options": ["Action is dispatched, reducer processes the action, store updates state", "Store is directly updated, components are notified", "Component triggers an action, action updates the state", "Component calls `setState`, and Redux listens for changes"],
        "answer": "Action is dispatched, reducer processes the action, store updates state",
        "topic": "Redux"
    }, {
        "question": "What is Redux Toolkit?",
        "options": ["A set of utilities that helps manage state in Redux applications", "A library to connect Redux to React", "A tool to monitor state in React applications", "A state management solution for Vue.js"],
        "answer": "A set of utilities that helps manage state in Redux applications",
        "topic": "Redux"
    },
    {
        "question": "What is the primary purpose of `createSlice` in Redux Toolkit?",
        "options": ["To automatically generate action creators and reducers", "To create middleware for Redux", "To combine multiple reducers into one", "To connect Redux with React components"],
        "answer": "To automatically generate action creators and reducers",
        "topic": "Redux"
    },
    {
        "question": "What is the default state initialization method in Redux Toolkit's `createSlice`?",
        "options": ["`initialState`", "`state`", "`defaultState`", "`getInitialState`"],
        "answer": "`initialState`",
        "topic": "Redux"
    },
    {
        "question": "Which function does Redux Toolkit provide to configure the Redux store?",
        "options": ["`configureStore`", "`createStore`", "`storeSetup`", "`storeConfig`"],
        "answer": "`configureStore`",
        "topic": "Redux"
    },
    {
        "question": "What is the benefit of using Redux Toolkit’s `configureStore` over Redux’s `createStore`?",
        "options": ["It automatically sets up Redux DevTools and adds middleware", "It provides an API for server-side rendering", "It creates middleware automatically", "It integrates directly with React"],
        "answer": "It automatically sets up Redux DevTools and adds middleware",
        "topic": "Redux"
    },
    {
        "question": "What does the `createAsyncThunk` function in Redux Toolkit help with?",
        "options": ["It simplifies the process of handling async actions", "It combines actions into one", "It simplifies state updates", "It configures store middleware"],
        "answer": "It simplifies the process of handling async actions",
        "topic": "Redux"
    },
    {
        "question": "How does `createSlice` handle immutability?",
        "options": ["It uses Immer internally to handle state mutations in a safe way", "It enforces immutability by default", "It uses deep cloning to ensure immutability", "It doesn’t support immutability directly"],
        "answer": "It uses Immer internally to handle state mutations in a safe way",
        "topic": "Redux"
    },
    {
        "question": "Which of the following is true about Redux Toolkit’s `createReducer` function?",
        "options": ["It simplifies the process of writing reducers by automatically handling the `switch` statement", "It directly creates actions and reducers", "It automatically handles async actions", "It automatically manages state for your app"],
        "answer": "It simplifies the process of writing reducers by automatically handling the `switch` statement",
        "topic": "Redux"
    },
    {
        "question": "What is the purpose of middleware in Redux Toolkit?",
        "options": ["To provide custom logic to intercept or modify actions before they reach the reducer", "To automatically generate actions", "To handle the side effects of Redux actions", "To connect Redux state to React components"],
        "answer": "To provide custom logic to intercept or modify actions before they reach the reducer",
        "topic": "Redux"
    },
    {
        "question": "Which of the following is a common middleware used in Redux Toolkit?",
        "options": ["Redux Thunk", "Redux Logger", "Redux DevTools", "Immer"],
        "answer": "Redux Thunk",
        "topic": "Redux"
    },
    {
        "question": "How do you add middleware to a Redux store using Redux Toolkit?",
        "options": ["By passing it as an array in `configureStore`", "By using `applyMiddleware` function", "By using `createStore`", "By importing middleware into the store directly"],
        "answer": "By passing it as an array in `configureStore`",
        "topic": "Redux"
    },
    {
        "question": "Which method does Redux Toolkit provide for handling async actions in the reducer?",
        "options": ["`createAsyncThunk`", "`createReducer`", "`createSlice`", "`createStore`"],
        "answer": "`createAsyncThunk`",
        "topic": "Redux"
    },
    {
        "question": "Which of the following does the `createSlice` function automatically generate for you?",
        "options": ["Reducers, action creators, and action types", "Async actions and reducers", "State selectors", "Redux store configurations"],
        "answer": "Reducers, action creators, and action types",
        "topic": "Redux"
    },
    {
        "question": "What does `createSlice` return?",
        "options": ["An object with the reducers and actions", "A function to configure the store", "A middleware for async actions", "An array of reducers"],
        "answer": "An object with the reducers and actions",
        "topic": "Redux"
    },
    {
        "question": "How does Redux Toolkit simplify the creation of reducers?",
        "options": ["By using Immer to allow direct mutation of the state", "By providing a predefined structure for actions", "By creating middleware automatically", "By handling asynchronous actions for you"],
        "answer": "By using Immer to allow direct mutation of the state",
        "topic": "Redux"
    },
    {
        "question": "What does `createAsyncThunk` return?",
        "options": ["A thunk function that can dispatch actions", "A promise that resolves to an action", "A reducer function", "A store configuration object"],
        "answer": "A thunk function that can dispatch actions",
        "topic": "Redux"
    },
    {
        "question": "Which of the following best describes middleware in Redux Toolkit?",
        "options": ["It provides an additional layer of logic between dispatching an action and reaching the reducer", "It automatically handles async actions", "It manages state directly", "It is used to combine reducers"],
        "answer": "It provides an additional layer of logic between dispatching an action and reaching the reducer",
        "topic": "Redux"
    },
    {
        "question": "Which Redux Toolkit function is used to configure the store with middleware?",
        "options": ["`configureStore`", "`createStore`", "`setupStore`", "`combineReducers`"],
        "answer": "`configureStore`",
        "topic": "Redux"
    },
    {
        "question": "Which of the following can `createAsyncThunk` be used for?",
        "options": ["Fetching data from an API", "Combining multiple reducers", "Creating the Redux store", "Managing the UI components"],
        "answer": "Fetching data from an API",
        "topic": "Redux"
    },
    {
        "question": "What is the default middleware added by Redux Toolkit when configuring the store?",
        "options": ["Redux Thunk, Redux DevTools, and a serializable check", "Only Redux Thunk", "Redux DevTools and action logger", "Only Redux DevTools"],
        "answer": "Redux Thunk, Redux DevTools, and a serializable check",
        "topic": "Redux"
    },
    {
        "question": "In Redux Toolkit, what is the `extraReducers` property used for?",
        "options": ["To handle actions that are outside the slice", "To combine multiple reducers into one", "To specify custom action creators", "To add middleware to the store"],
        "answer": "To handle actions that are outside the slice",
        "topic": "Redux"
    },
    {
        "question": "Which of the following is true about Redux Toolkit's `createSlice`?",
        "options": ["It allows you to write reducers and actions in a simpler and more concise way", "It only handles actions, not reducers", "It automatically fetches data from APIs", "It only works with class-based components"],
        "answer": "It allows you to write reducers and actions in a simpler and more concise way",
        "topic": "Redux"
    },
    {
        "question": "What type of data structure does `createSlice` use to define reducers?",
        "options": ["An object with key-value pairs", "An array of functions", "A set of action creators", "A promise of a reducer function"],
        "answer": "An object with key-value pairs",
        "topic": "Redux"
    },
    {
        "question": "Can you add custom middleware when configuring the store in Redux Toolkit?",
        "options": ["Yes, by passing a middleware array to `configureStore`", "No, it only allows built-in middleware", "Yes, but only using `createStore`", "No, middleware is automatically added"],
        "answer": "Yes, by passing a middleware array to `configureStore`",
        "topic": "Redux"
    },
    {
        "question": "How does Redux Toolkit help with debugging?",
        "options": ["It integrates automatically with Redux DevTools", "It logs all actions to the console", "It displays an error message when state is mutated", "It triggers a rebuild of the app on state change"],
        "answer": "It integrates automatically with Redux DevTools",
        "topic": "Redux"
    }
]