import { useState } from 'react';
//import { results } from '../../Mock/MockPage1';
import { useEffect } from 'react';
import { getCharactersAll } from './services/getCharactersAll';
import { useRef } from 'react';

export const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const refPage = useRef(1);

  useEffect(() => {
    getCharactersAll(refPage.current).then(data => setCharacters(data.results));
  }, []);

  return (
    <>
      <h2>Page render a characters Star Wars</h2>
      {characters.length > 0 ? (
        characters.map(item => (
          <div key={item.created}>
            <p>{item.name}</p>
          </div>
        ))
      ) : (
        <h4>Loading ...</h4>
      )}
    </>
  );
};
