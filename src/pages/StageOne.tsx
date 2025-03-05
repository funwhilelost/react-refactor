import React, { useEffect, useState } from 'react';
import CharacterList from '../components/CharacterList';
import ShuffleButton from '../components/ShuffleButton';

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

const StageOne: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch characters');
        setLoading(false);
      });
  }, []);

  const shuffleCharacters = () => {
    setCharacters(prevCharacters => {
      const shuffled = [...prevCharacters];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <p>Now this is a "Smart Component" with all the business logic, and "dumb components" that just accept props.  It's bi-directional by passing an event handler down to the shuffle button.</p>
      <p>Business logic is still stored in the "smart component" - which might be good enough.</p>
      <ShuffleButton onShuffle={shuffleCharacters} />
      <CharacterList characters={characters} />
    </div>
  );
};

export default StageOne;
