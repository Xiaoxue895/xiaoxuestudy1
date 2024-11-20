### 1. **Action Types**
```js
const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';
```
- **作用**：定义两个常量来表示不同的`action type`，即 `LOAD_ARTICLES` 和 `ADD_ARTICLE`。
  - `LOAD_ARTICLES`：用于加载文章。
  - `ADD_ARTICLE`：用于添加新文章。

### 2. **Action Creators**
#### `loadArticles` Action Creator:
```js
export const loadArticles = (articles) => {
  return {
      type: LOAD_ARTICLES,
      articles,
  };
};
```
- **作用**：创建一个用于加载文章的`action`。它接收`articles`作为参数，并返回一个包含 `type: LOAD_ARTICLES` 和 `articles` 的对象，用于触发相应的 `reducer` 来更新状态。

#### `addArticle` Action Creator:
```js
export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    article
  };
};
```
- **作用**：创建一个用于添加文章的`action`。接收一篇文章的数据`article`，并返回一个包含 `type: ADD_ARTICLE` 和 `article` 的对象。

### 3. **Thunk for Fetching Articles**
```js
export const fetchArticles = () => async dispatch => {
  const response = await fetch('/api/articles');
  const articles = await response.json();
  dispatch(loadArticles(articles));
};
```
- **作用**：这是一个 Redux Thunk，专门用于异步获取文章列表。
  1. 使用 `fetch` 发送 GET 请求到`/api/articles`，获取文章列表。
  2. 通过 `await response.json()` 将响应数据解析为 JSON 格式。
  3. 调用 `dispatch(loadArticles(articles))` 将获取到的文章数据传递给`loadArticles`，从而触发状态更新。

### 4. **Thunk for Adding Article**
```js
export const addArticleThunk = (articleFormData) => async (dispatch) => {
  const res = await fetch("/api/articles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleFormData),
  });

  if (res.ok) {
    const newArticle = await res.json();
    dispatch(addArticle([newArticle]));
    return null;
  } else {
    const errors = await res.json();
    return errors;
  }
};
```
- **作用**：这是一个用于向服务器发送新文章数据的 Redux Thunk。
  1. 发送 `POST` 请求到 `/api/articles`，通过 `body: JSON.stringify(articleFormData)` 发送新文章数据。
  2. 如果请求成功 (`res.ok`)，则将服务器返回的文章数据（`newArticle`）存储在 Redux store 中，并触发 `addArticle` 更新状态。
  3. 如果请求失败，返回错误信息。

### 5. **Alternative Thunk for Writing Article**
```js
export const writeArticle = (payload) => async dispatch => {
  const response = await fetch('/api/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const newArticle = await response.json();
  dispatch(addArticle(newArticle));
  return newArticle; 
};
```
- **作用**：与 `addArticleThunk` 类似，但没有处理错误的逻辑。它发送 `POST` 请求，将新文章数据 `payload` 发送给服务器，服务器返回新创建的文章后，触发 `addArticle` action 来更新状态。

### 6. **Initial State**
```js
const initialState = { entries: [], isLoading: true };
```
- **作用**：定义 Redux 中 `articleReducer` 的初始状态。
  - `entries`: 一个存储文章的数组，初始值为空。
  - `isLoading`: 一个布尔值，表示是否正在加载数据，初始值为 `true`。

### 7. **Article Reducer**
```js
const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      return { ...state, entries: [...state.entries, action.article] };
    default:
      return state;
  }
};
```
- **作用**：`articleReducer` 是处理文章相关状态更新的函数，它接收当前的 `state` 和 `action`，并根据 `action.type` 返回新的状态。
  - `LOAD_ARTICLES`: 更新文章列表，将 `action.articles` 的数据覆盖到 `entries` 中。
  - `ADD_ARTICLE`: 向 `entries` 中添加新文章，即在现有的 `state.entries` 数组基础上添加 `action.article`。

### 8. **导出Reducer**
```js
export default articleReducer;
```
- **作用**：将 `articleReducer` 导出，以便在 Redux store 中使用。

### 综述：
- **Action Creators**：`loadArticles` 和 `addArticle` 用于创建`action`，分别加载和添加文章。
- **Thunks**：`fetchArticles`、`addArticleThunk` 和 `writeArticle` 是异步操作，用于从服务器获取文章数据或添加新文章。
- **Reducer**：`articleReducer` 负责根据不同的`action type`更新文章数据在 Redux 状态中的存储。