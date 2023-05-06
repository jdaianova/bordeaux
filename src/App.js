import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
  const [places, setPlaces] = useState(data);
  const [showAllPlaces, setShowAllPlaces] = useState(true);
  const [btnText, setBtnText] = useState('clear all');
  const [showText, setShowText] = useState(true);

  const detelePlace = (id) => {
    let currentPlaces = places.filter(el => el.id !== id);
    setPlaces(currentPlaces);
  };

  return (
    <div className="App">

      <header className='Header'>
        <h1>Bordeaux</h1>
        <a href='#TitleGallery' className='ChoosePlaces'>Choose your places to visit</a>
      </header>

      <div className='TitleGallery'>
        <h2 id='TitleGallery'>You can see in Bordeaux {places.length} amazing places:</h2>
      </div>

      <div className='Gallery'>
        {places.map((el) => {
          const { id, title, image, description, website, showMore } = el;

          return (
            <div className='Place' key={id}>
              <div className='TitlePlace'>{title}</div>

              <div className='ImagePlace'>
                <img src={image} width='250px' alt={title}></img>
              </div>

              <div className='DescriptionPlace' onClick={() => {
                el.showMore = !el.showMore;
                setShowText(!showText);
              }}>
                {showMore ? description : description.substring(0, 65)}
                <button className='BtnShowMore'>{showMore ? '... show less' : '... show more'}</button>
              </div>

              <div className='LinkPlace'>
                <a href={website} target="_blank">Find out more about this place &raquo; </a>
              </div>

              <button
                className='BtnDeletePlace'
                onClick={() => detelePlace(id)}>
                don't want to visit
              </button>
            </div>
          )
        })}
      </div>

      <button
        className='BtnClearAll'
        onClick={() => {
          showAllPlaces ? setPlaces([]) : setPlaces(data);
          showAllPlaces ? setBtnText('return all') : setBtnText('clear all');
          setShowAllPlaces(!showAllPlaces);
        }}>
        {btnText}
      </button>

    </div>
  );
}

export default App;
