### **Redux Thunk 简介**
Redux Thunk 是一个 Redux 中间件，允许你在 Redux 中处理异步逻辑。默认情况下，Redux 只支持同步数据流，但现代应用中常需要异步操作（如从后端获取数据）。Redux Thunk 通过让你派发函数（而不是普通的 action 对象）来实现这一点。

---

### **基本概念**
1. **什么是 Thunk？**  
   Thunk 是一个返回函数的函数。例如：
   ```javascript
   const myThunk = () => {
       return (dispatch, getState) => {
           // 异步逻辑或额外操作
       };
   };
   ```

2. **为什么需要 Thunk？**  
   - 让你可以在 action 中执行异步代码（如 `fetch` 请求）。
   - 可以基于当前的 state 动态派发不同的 action。

3. **使用方式**：  
   - 安装 Redux Thunk：
     ```bash
     npm install redux-thunk
     ```
   - 在 Redux 配置中添加 Thunk 中间件：
     ```javascript
     import { configureStore } from '@reduxjs/toolkit';
     import thunk from 'redux-thunk';
     import rootReducer from './reducers';

     const store = configureStore({
         reducer: rootReducer,
         middleware: [thunk],
     });
     ```

---

### **使用 Redux Thunk 的核心步骤**
1. 创建异步 action（返回一个函数）。
2. 在这个函数中执行异步操作（如 API 调用）。
3. 根据异步操作的结果派发不同的同步 action。

---

### **案例 1：基本异步 API 请求**

#### 假设有一个需求：从后端获取用户数据，并存储到 Redux 中。

**Action Creator**：
```javascript
// 定义同步 action
const fetchUsersRequest = () => ({ type: 'FETCH_USERS_REQUEST' });
const fetchUsersSuccess = (users) => ({ type: 'FETCH_USERS_SUCCESS', payload: users });
const fetchUsersFailure = (error) => ({ type: 'FETCH_USERS_FAILURE', payload: error });

// 定义异步 action（Thunk）
export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(fetchUsersRequest()); // 开始加载
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch(fetchUsersSuccess(data)); // 加载成功
        } catch (error) {
            dispatch(fetchUsersFailure(error.message)); // 加载失败
        }
    };
};
```

**Reducer**：
```javascript
const initialState = {
    loading: false,
    users: [],
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_USERS_SUCCESS':
            return { ...state, loading: false, users: action.payload };
        case 'FETCH_USERS_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default userReducer;
```

**组件中使用**：
```javascript
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './actions';

const UserList = () => {
    const dispatch = useDispatch();
    const { loading, users, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
};

export default UserList;
```

---

### **案例 2：基于当前状态动态派发**

#### 需求：只有在用户未登录时才获取用户数据。

**异步 action**：
```javascript
export const fetchUsersIfNotLoaded = () => {
    return (dispatch, getState) => {
        const { users } = getState();
        if (!users || users.length === 0) {
            dispatch(fetchUsers()); // 只有在用户数据为空时才加载
        }
    };
};
```

**组件中使用**：
```javascript
useEffect(() => {
    dispatch(fetchUsersIfNotLoaded());
}, [dispatch]);
```

---

### **案例 3：连续异步请求**

#### 需求：先获取用户数据，然后基于用户 ID 再获取其订单数据。

**Action Creator**：
```javascript
const fetchOrders = (userId) => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_ORDERS_REQUEST' });
        try {
            const response = await fetch(`https://api.example.com/orders?userId=${userId}`);
            const data = await response.json();
            dispatch({ type: 'FETCH_ORDERS_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_ORDERS_FAILURE', payload: error.message });
        }
    };
};

export const fetchUsersAndOrders = () => {
    return async (dispatch) => {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await usersResponse.json();

        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: users });

        // 获取第一个用户的订单
        if (users.length > 0) {
            dispatch(fetchOrders(users[0].id));
        }
    };
};
```

---

### **案例 4：加载状态管理**
当需要显示加载状态时，可以使用多个 action 和 Thunk：

**Action Creator**：
```javascript
export const fetchDataWithLoading = () => {
    return async (dispatch) => {
        dispatch({ type: 'LOADING_START' });
        try {
            const data = await fetch('/api/data').then((res) => res.json());
            dispatch({ type: 'LOADING_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'LOADING_FAILURE', payload: error.message });
        } finally {
            dispatch({ type: 'LOADING_END' });
        }
    };
};
```

---

### **总结**
- **Redux Thunk 的核心作用**：让 action 可以包含异步逻辑，并通过 `dispatch` 控制数据流。
- **常见用法**：
  - 异步请求（如 API 调用）。
  - 条件派发（根据当前状态动态决定是否派发）。
  - 连续请求（例如先加载 A 数据，再加载 B 数据）。
- **优点**：
  - 简单易用，结合 Redux 原生功能即可实现强大的异步数据管理。
  - 灵活，可以通过 `dispatch` 和 `getState` 动态决定下一步操作。

如果你还有具体场景的需求，可以进一步讨论！