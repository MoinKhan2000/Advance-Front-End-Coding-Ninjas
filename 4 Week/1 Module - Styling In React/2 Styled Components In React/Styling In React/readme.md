Here is the `README.md` file with proper formatting for the four types of CSS styling in React:

```markdown
# CSS Styling in React

There are four types of CSS styling approaches in React:

## 1. CSS Stylesheets

- This is the traditional method of writing CSS in external `.css` files and importing them into React components.
- Example:

  ```css
  /* styles.css */
  .app {
    text-align: center;
  }

  .button {
    background-color: red;
    color: white;
  }
  ```

  ```javascript
  // App.js
  import './styles.css';

  function App() {
    return (
      <div className="app">
        <h1>Hello World</h1>
        <button className="button">Click Me</button>
      </div>
    );
  }

  export default App;
  ```

## 2. Inline Styling

- Inline styles are written directly in the `style` attribute in JSX as a JavaScript object.
- Example:

  ```javascript
  function App() {
    const buttonStyle = {
      backgroundColor: 'red',
      color: 'white',
      padding: '10px',
    };

    return (
      <div>
        <h1 style={{ color: 'blue' }}>Hello World</h1>
        <button style={buttonStyle}>Click Me</button>
      </div>
    );
  }

  export default App;
  ```

## 3. Styled Components

- **Styled Components** is a popular library that allows writing CSS directly in JavaScript files.
- It provides a way to create component-level styles, and it's particularly useful for large applications.
- You need to install it first:

  ```bash
  npm install styled-components
  ```

- Example:

  ```javascript
  import styled from 'styled-components';

  const Button = styled.button`
    background-color: red;
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  `;

  function App() {
    return (
      <div>
        <h1>Hello World</h1>
        <Button>Click Me</Button>
      </div>
    );
  }

  export default App;
  ```

## 4. CSS Modules

- CSS Modules locally scope CSS by default, which avoids global scope issues.
- The class names are automatically hashed to make them unique.
- To use CSS Modules, you need to name your CSS file as `ComponentName.module.css`.

  Example:

  ```css
  /* App.module.css */
  .app {
    text-align: center;
  }

  .button {
    background-color: red;
    color: white;
    padding: 10px;
  }
  ```

  ```javascript
  // App.js
  import styles from './App.module.css';

  function App() {
    return (
      <div className={styles.app}>
        <h1>Hello World</h1>
        <button className={styles.button}>Click Me</button>
      </div>
    );
  }

  export default App;
  ```

---

Each of these approaches has its own use cases depending on the size and complexity of your application.
```