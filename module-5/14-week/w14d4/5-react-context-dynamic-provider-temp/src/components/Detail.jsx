import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

const Detail = () => {
  // const horoscopesObj = useContext(HoroscopeContext);
  const { sign } = useContext(HoroscopeContext);

  return (
    <div className='details'>
      <img
        src={sign.backgroundImg}
        alt={sign.name}
      />
      <h2>{sign.name}</h2>
      <p>{sign.date}</p>
      <p>{sign.element}</p>
      <p>{sign.traits}</p>
    </div>
  );
};

export default Detail;
