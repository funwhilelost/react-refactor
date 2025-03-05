import React, { useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import ShuffleButton from '../components/ShuffleButton';
import { useCharacterStore } from '../stores/characterStore';

const StageTwo: React.FC = () => {
  const { characters, loading, error, fetchCharacters, shuffleCharacters } = useCharacterStore();

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <p>Now this is a "unidirectional" store - the shuffle button triggers an action at the store, the store will handle the action and mutate itself, then the new props will shake their way into this container.</p>
      <p>Business logic is now captured in the store.  Click button &gt; "shuffleCharacters action" &gt; store decides what to do about that action.</p>
      <ShuffleButton onShuffle={shuffleCharacters} />
      <CharacterList characters={characters} />
    </div>
  );
};

export default StageTwo;
