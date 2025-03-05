import React from 'react';

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
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
  );
};

export default CharacterList;
