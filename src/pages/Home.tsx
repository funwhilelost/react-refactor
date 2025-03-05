import React, { useEffect, useState } from 'react';

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

const Home: React.FC = () => {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
        padding: '1rem'
      }}>
        {characters.map(character => (
          <div key={character.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <img 
              src={character.image} 
              alt={character.name}
              style={{ width: '100%', height: 'auto' }}
            />
            <div style={{ padding: '0.5rem' }}>
              <h3>{character.name}</h3>
              <p>{character.species} - {character.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
