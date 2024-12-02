### 1. **Vite 初始化 React 项目**
```bash
npm create vite@latest frontend -- --template react
```
- **解释**: 
  - 使用 Vite 创建一个名为 `frontend` 的 React 项目。
  - `--template react` 指定使用 React 模板。

---

### 2. **React 的核心功能**
#### **`useEffect`**
- **功能**:
  - 是 React 提供的一个 Hook，用于在组件的生命周期阶段执行副作用（如数据获取、订阅事件、手动 DOM 操作等）。
  - 在组件 **初次渲染** 后会执行一次（如果没有依赖数组）。
  - **依赖数组**（dependency array）允许我们控制副作用的触发条件。

- **基本语法**:
```jsx
import { useEffect } from 'react';

useEffect(() => {
  // 副作用逻辑，例如获取数据
}, [dependency]);
```
- **依赖数组**:
  - 空数组 `[]`: 副作用仅在初次渲染时执行一次。
  - 特定依赖 `[dependency]`: 当 `dependency` 改变时重新执行副作用。

- **常见用途**:
  - 数据获取 (`fetch`/`axios`)。
  - 事件订阅/取消订阅。
  - 手动操作 DOM。

---

#### **`useState`**
- **功能**:
  - 创建和管理组件中的 **状态变量**。
  - 当状态变量更新时，会触发组件的重新渲染。

- **基本语法**:
```jsx
import { useState } from 'react';

const [state, setState] = useState(initialValue);
```
- **参数**:
  - `initialValue`: 状态的初始值。
- **返回值**:
  - `state`: 当前状态。
  - `setState`: 更新状态的方法。

- **示例**:
```jsx
const [count, setCount] = useState(0);
setCount(count + 1); // 更新状态，组件会重新渲染
```

---

### 3. **React Redux**
React Redux 是 React 与 Redux 集成的工具，常用的 Hooks 包括 `useDispatch` 和 `useSelector`。

#### **`useDispatch`**
- **功能**:
  - 用于分发（`dispatch`）一个 **action 对象** 或 **thunk 函数** 到 Redux 的 Store。
  - Redux 的 Reducer 会根据分发的 action 对象，修改状态。

- **基本用法**:
```jsx
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();
dispatch(actionObject); // 分发一个 action 对象
dispatch(thunkFunction()); // 分发一个 thunk 函数
```

---

#### **`useSelector`**
- **功能**:
  - 监听 Redux Store 的状态变化。
  - 返回整个状态树或者其中的一部分。
  - 每当依赖的状态发生变化时，会触发组件重新渲染。

- **基本用法**:
```jsx
import { useSelector } from 'react-redux';

const state = useSelector((state) => state); // 返回整个 Redux 状态树
const sliceOfState = useSelector((state) => state.sliceOfState); // 返回状态的一部分
```

---

### 4. **Redux 的核心概念**
#### **Store**
- **功能**: 
  - Redux 的 Store 是一个 JavaScript 对象，用于存储整个应用的状态。
  - 提供了三大核心方法：
    - `getState()`: 获取当前状态。
    - `dispatch(action)`: 分发一个 action。
    - `subscribe(listener)`: 订阅状态变化事件。

---

#### **Reducer**
- **功能**:
  - 是一个纯函数，接收当前的 `state` 和一个 `action`，并返回新的 `state`。
  - 每当调用 `dispatch` 分发一个 action，Store 会调用相应的 reducer 来计算新的状态。

- **示例**:
```javascript
const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

---

#### **Action 和 Action 对象**
- **Action**:
  - 是一个描述「发生了什么」的对象，必须包含 `type` 属性。
- **Action 对象示例**:
```javascript
const incrementAction = { type: 'INCREMENT' };
const decrementAction = { type: 'DECREMENT' };
```

- **Dispatch 示例**:
```javascript
dispatch(incrementAction);
```

---

#### **Thunk**
- **功能**:
  - Redux 中间件，用于处理异步逻辑。
  - 分发的是一个函数而非普通对象。
  - 函数会接收 `dispatch` 和 `getState` 作为参数。

- **示例**:
```javascript
const fetchFruitsThunk = () => async (dispatch, getState) => {
  const response = await fetch('/api/fruits');
  const data = await response.json();
  dispatch({ type: 'LOAD_FRUITS', payload: data });
};
dispatch(fetchFruitsThunk());
```

---

### 5. **总结**
- React 使用 `useEffect` 和 `useState` 管理组件的副作用和状态。
- Redux 提供全局状态管理，`dispatch` 用于触发状态变化，`useSelector` 用于订阅状态。
- Redux Thunk 扩展了 Redux 的功能，允许我们在 action 中处理异步逻辑。

### **下面是英文**

### 1. **Vite Initializing React Project**
```bash
npm create vite@latest frontend -- --template react
```
- **Explanation**: 
  - This command creates a new React project named `frontend` using Vite.
  - The `--template react` flag specifies that it should use the React template.

---

### 2. **Core React Features**
#### **`useEffect`**
- **Purpose**:
  - A React Hook used to perform side effects (like data fetching, event subscriptions, or manual DOM manipulation) at specific points in a component's lifecycle.
  - Executes **once after the initial render** by default (if no dependency array is provided).
  - The **dependency array** lets you control when the effect is triggered.

- **Basic Syntax**:
```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Side-effect logic, e.g., fetching data
}, [dependency]);
```
- **Dependency Array**:
  - Empty array `[]`: Executes the effect only once after the initial render.
  - Specific dependencies `[dependency]`: Re-executes the effect whenever `dependency` changes.

- **Common Use Cases**:
  - Fetching data (`fetch`/`axios`).
  - Subscribing to/cleaning up event listeners.
  - Direct DOM manipulations.

---

#### **`useState`**
- **Purpose**:
  - A React Hook that creates and manages **state variables**.
  - When a state variable is updated, it triggers a re-render of the component.

- **Basic Syntax**:
```jsx
import { useState } from 'react';

const [state, setState] = useState(initialValue);
```
- **Parameters**:
  - `initialValue`: The initial value of the state.
- **Return Values**:
  - `state`: The current state.
  - `setState`: A function to update the state.

- **Example**:
```jsx
const [count, setCount] = useState(0);
setCount(count + 1); // Updates the state and triggers a re-render
```

---

### 3. **React Redux**
React Redux provides tools for integrating Redux with React. Commonly used Hooks include `useDispatch` and `useSelector`.

#### **`useDispatch`**
- **Purpose**:
  - Dispatches (sends) an **action object** or **thunk function** to the Redux Store.
  - The Reducer processes the dispatched action object to update the state.

- **Basic Usage**:
```jsx
import { useDispatch } from 'react-redux';

const dispatch = useDispatch();
dispatch(actionObject); // Dispatch an action object
dispatch(thunkFunction()); // Dispatch a thunk function
```

---

#### **`useSelector`**
- **Purpose**:
  - Subscribes to changes in the Redux Store's state.
  - Returns the entire state or a specific slice of it.
  - When the subscribed state changes, it triggers a re-render of the component.

- **Basic Usage**:
```jsx
import { useSelector } from 'react-redux';

const state = useSelector((state) => state); // Returns the entire Redux state
const sliceOfState = useSelector((state) => state.sliceOfState); // Returns a part of the state
```

---

### 4. **Core Redux Concepts**
#### **Store**
- **Purpose**: 
  - The Redux Store is a JavaScript object that holds the entire application's state.
  - It provides three core methods:
    - `getState()`: Retrieves the current state.
    - `dispatch(action)`: Dispatches an action to update the state.
    - `subscribe(listener)`: Subscribes to state change events.

---

#### **Reducer**
- **Purpose**:
  - A pure function that takes the current `state` and an `action` as inputs and returns a new `state`.
  - Every time `dispatch` is called with an action, the Store uses the Reducer to calculate the new state.

- **Example**:
```javascript
const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

---

#### **Actions and Action Objects**
- **Action**:
  - An object describing "what happened." It must contain a `type` property.
- **Action Object Example**:
```javascript
const incrementAction = { type: 'INCREMENT' };
const decrementAction = { type: 'DECREMENT' };
```

- **Dispatch Example**:
```javascript
dispatch(incrementAction);
```

---

#### **Thunk**
- **Purpose**:
  - A Redux middleware that handles asynchronous logic.
  - Allows you to dispatch a function instead of a plain object.
  - The function receives `dispatch` and `getState` as arguments.

- **Example**:
```javascript
const fetchFruitsThunk = () => async (dispatch, getState) => {
  const response = await fetch('/api/fruits');
  const data = await response.json();
  dispatch({ type: 'LOAD_FRUITS', payload: data });
};
dispatch(fetchFruitsThunk());
```

---

### 5. **Summary**
- **React**: Use `useEffect` for side effects and `useState` for managing component state.
- **Redux**: 
  - Use `dispatch` to trigger state changes.
  - Use `useSelector` to subscribe to and retrieve the state or specific slices of it.
- **Thunk**: Extends Redux, enabling asynchronous logic within actions.