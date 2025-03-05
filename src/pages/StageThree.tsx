import React, { useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import ShuffleButton from '../components/ShuffleButton';
import CharacterForm from '../components/CharacterForm';
import { useCharacterStore } from '../stores/characterStore';

const StageThree: React.FC = () => {
  const { characters, loading, error, fetchCharacters, shuffleCharacters, addCharacter } = useCharacterStore();

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <p>Now the app includes a form.  All form handling is internal to `react-final-form` and the submit action will fire an action to your store - which can make an API call, then update the store based on the results.</p>
      <CharacterForm onSubmit={addCharacter} />
      <ShuffleButton onShuffle={shuffleCharacters} />
      <CharacterList characters={characters} />
    </div>
  );
};

export default StageThree;
