# React Context API - Setup Guide

This guide will help you configure and use React's Context API to manage global states and avoid prop drilling in your applications. The process involves three main steps:

1. **Create Context**
2. **Provide Context**
3. **Consume Context**

---

### Table of Contents
1. [Create Context](#create-context)
2. [Provide Context](#provide-context)
3. [Consume Context](#consume-context)
4. [Full Example](#full-example)

---

## 1. Create Context

First, you need to create a context object using `React.createContext()`. This context will hold the data (state) you want to share globally.

```jsx
import React, { createContext } from 'react';

// Create a context
export const MyContext = createContext(null);
```

Here, `MyContext` is now the shared context object that can hold state and pass it to components in your app.

---

## 2. Provide Context

The next step is to **provide** this context to your component tree. This is done by wrapping your component (or a subtree of components) inside a `Context.Provider` and passing down the value (state).

```jsx
import React, { useState } from 'react';
import { MyContext } from './MyContext'; // Import the created context

const MyProvider = ({ children }) => {
  // Define the state you want to share
  const [sharedValue, setSharedValue] = useState('Hello, Context!');

  return (
    <MyContext.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
```

Here, the `MyProvider` component wraps its children and provides the `sharedValue` and `setSharedValue` to any component inside it. 

- **`value`**: This is the state you want to pass down.
- **`children`**: These are the nested components that can access the provided context.

---

## 3. Consume Context

To use (or **consume**) the context in any child component, you can use either the `useContext` hook or the `Context.Consumer` component.

### Using the `useContext` Hook (Preferred in Functional Components):

```jsx
import React, { useContext } from 'react';
import { MyContext } from './MyContext'; // Import the context

const MyComponent = () => {
  const { sharedValue, setSharedValue } = useContext(MyContext);

  return (
    <div>
      <p>{sharedValue}</p>
      <button onClick={() => setSharedValue('New Value!')}>
        Update Context
      </button>
    </div>
  );
};

export default MyComponent;
```

### Using the `Context.Consumer` Component (For Class Components or Optional Use):

```jsx
import React from 'react';
import { MyContext } from './MyContext';

const MyComponent = () => {
  return (
    <MyContext.Consumer>
      {({ sharedValue, setSharedValue }) => (
        <div>
          <p>{sharedValue}</p>
          <button onClick={() => setSharedValue('Updated Value')}>
            Update Value
          </button>
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default MyComponent;
```

In both examples, the `MyComponent` accesses the shared state (`sharedValue`) and the function to update it (`setSharedValue`).

---

## Full Example

Here’s how you can put it all together:

### `MyContext.js`
```jsx
import { createContext } from 'react';

// Create a context
export const MyContext = createContext(null);
```

### `MyProvider.js`
```jsx
import React, { useState } from 'react';
import { MyContext } from './MyContext'; // Import the created context

const MyProvider = ({ children }) => {
  const [sharedValue, setSharedValue] = useState('Hello, Context!');

  return (
    <MyContext.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
```

### `MyComponent.js`
```jsx
import React, { useContext } from 'react';
import { MyContext } from './MyContext'; // Import the context

const MyComponent = () => {
  const { sharedValue, setSharedValue } = useContext(MyContext);

  return (
    <div>
      <p>{sharedValue}</p>
      <button onClick={() => setSharedValue('New Value!')}>
        Update Context
      </button>
    </div>
  );
};

export default MyComponent;
```

### `App.js`
```jsx
import React from 'react';
import MyProvider from './MyProvider'; // Import the provider
import MyComponent from './MyComponent'; // Import the consumer component

const App = () => {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
};

export default App;
```

---

### Summary

1. **Create Context**: Use `createContext()` to create a context.
2. **Provide Context**: Wrap your components in a `Context.Provider` to provide the context data.
3. **Consume Context**: Use `useContext()` or `Context.Consumer` to access the context data in any child component.

This setup allows you to manage global state easily and avoids passing props down multiple layers of components.

