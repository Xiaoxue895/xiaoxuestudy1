import { Navigate } from 'react-router-dom';






function Stocks() {
  const loggedIn = true;

  if (!loggedIn) {
    return <Navigate to="/not-logged-in" replace={true} />;
  }

  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
    </div>
  );
}

export default Stocks;
