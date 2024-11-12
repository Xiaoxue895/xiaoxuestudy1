import './PokeMoveCard.css'

const PokeMoveCard = ({ id, type, move, level }) => {
  return (
    <div>
        <li className='poke-move-card'>
        <h3>Move {id}</h3>
        <h4 style={{ padding: 10 }}>{move.toUpperCase()}</h4>
        <p>Type: {type}</p>
        <p>Level: {level}</p>
    </li>

    </div>
  );
};

export default PokeMoveCard;