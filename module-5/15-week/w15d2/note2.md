以下是使用 **Redux Thunk** 的多个实际案例，展示如何通过不同场景处理后端数据的获取和管理：

---

### **案例 1：分页获取数据**

#### 场景
从后端获取大数据集时，通常需要分页加载。

#### 实现
```javascript
// actions.js
export const fetchPageDataRequest = () => ({ type: 'FETCH_PAGE_DATA_REQUEST' });
export const fetchPageDataSuccess = (data) => ({ type: 'FETCH_PAGE_DATA_SUCCESS', payload: data });
export const fetchPageDataFailure = (error) => ({ type: 'FETCH_PAGE_DATA_FAILURE', payload: error });

export const fetchPageData = (page = 1, limit = 10) => {
  return async (dispatch) => {
    dispatch(fetchPageDataRequest());
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
      const data = await response.json();
      dispatch(fetchPageDataSuccess(data));
    } catch (error) {
      dispatch(fetchPageDataFailure(error.message));
    }
  };
};
```

#### Reducer
```javascript
const initialState = {
  loading: false,
  data: [],
  error: null,
};

const pageDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PAGE_DATA_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_PAGE_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_PAGE_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default pageDataReducer;
```

#### React 组件
```javascript
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPageData } from './actions';

const PaginatedComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.pageData);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPageData(page));
  }, [dispatch, page]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default PaginatedComponent;
```

---

### **案例 2：串行调用多个接口**

#### 场景
需要依次从多个接口获取数据，并整合成一个结果。

#### 实现
```javascript
// actions.js
export const fetchCombinedData = () => {
  return async (dispatch) => {
    try {
      const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await usersResponse.json();

      const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await postsResponse.json();

      const combinedData = users.map((user) => ({
        ...user,
        posts: posts.filter((post) => post.userId === user.id),
      }));

      dispatch({ type: 'FETCH_COMBINED_DATA_SUCCESS', payload: combinedData });
    } catch (error) {
      dispatch({ type: 'FETCH_COMBINED_DATA_FAILURE', payload: error.message });
    }
  };
};
```

#### Reducer
```javascript
const initialState = {
  data: [],
  error: null,
};

const combinedDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COMBINED_DATA_SUCCESS':
      return { ...state, data: action.payload };
    case 'FETCH_COMBINED_DATA_FAILURE':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
export default combinedDataReducer;
```

#### React 组件
```javascript
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCombinedData } from './actions';

const CombinedDataComponent = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.combinedData);

  useEffect(() => {
    dispatch(fetchCombinedData());
  }, [dispatch]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <ul>
            {user.posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CombinedDataComponent;
```

---

### **案例 3：条件获取数据**

#### 场景
根据当前状态决定是否需要发起网络请求。

#### 实现
```javascript
// actions.js
export const fetchDataIfNeeded = () => {
  return (dispatch, getState) => {
    const { data } = getState().conditionalData;

    if (!data || data.length === 0) {
      dispatch(fetchData());
    }
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
  };
};
```

#### Reducer
```javascript
const initialState = {
  data: null,
  error: null,
};

const conditionalDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return { ...state, data: action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
export default conditionalDataReducer;
```

#### React 组件
```javascript
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataIfNeeded } from './actions';

const ConditionalDataComponent = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.conditionalData);

  useEffect(() => {
    dispatch(fetchDataIfNeeded());
  }, [dispatch]);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default ConditionalDataComponent;
```

---

### **总结**
通过 Redux Thunk，可以处理以下场景：
1. **分页加载数据**：分批次加载大数据集。
2. **串行接口调用**：整合多个接口的数据。
3. **条件数据加载**：避免不必要的网络请求。
4. **复杂交互**：如触发多个异步请求或根据前一个请求的结果决定后续操作。

这些场景的模式可以自由组合，满足各种复杂的后端数据处理需求。