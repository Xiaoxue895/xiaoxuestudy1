import { createBrowserRouter, RouterProvider,Outlet,NavLink} from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';

const router = createBrowserRouter([
  { 
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'stocks',
        element: <Stocks />
      },
      {
        path: 'movies',
        element: <Movies />
      },
      {
        path: '*',
        element: <h1>Page Not Found</h1>
      },
      {
        path: '/not-logged-in',
        element: <h1>You Must Be Logged In To Enter.</h1>
      }
    ]
  }
]);

function Layout() {
  return (
    <div className='app'>
      <h1>App Component</h1>
      <nav className="comp nav"></nav>
      <ul>
          <li><NavLink to="/" className={({isActive}) => isActive? 'purple' : ''} style={({isActive}) => isActive ? { fontWeight: 'bold' } : {}}>Home</NavLink></li>
          <li><NavLink to="/stocks" className={({isActive}) => isActive? 'purple' : ''}>Stocks</NavLink></li>
          <li><NavLink to="/movies" className={({isActive}) => isActive? 'purple' : ''}>Movies-Anchor</NavLink></li>
        </ul>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <div className='app'>
      {/* <h1>App Component</h1> */}
      {/* <Link to="/">Home</Link> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
