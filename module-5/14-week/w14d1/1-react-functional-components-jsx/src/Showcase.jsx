import bulbasaurImage from './images/Bulbasaur.jpg'

function Showcase() {
    const favPokemon = "Bulbasaur"
    const pokeCharacteristics ={
        type:'Grass',
        move:'Vine Whip'
    }

    return (
      <div>
        <h1>{favPokemon}&apos;s Showcase</h1>
        <img src={bulbasaurImage} alt={favPokemon}/>
        <h2>
            {favPokemon}&apos;s type is <span style={{ backgroundColor: 'green', color: 'white' }}>{pokeCharacteristics.type}</span> and one of their moves is <span style={{ backgroundColor: '#ffffff', color: '#00ff00' }}>{pokeCharacteristics.move}</span>
        </h2>
      </div>
    );
  }
  
  export default Showcase;