import { create } from 'zustand';
import { Character } from '../types/Character';

interface CharacterState {
  characters: Character[];
  loading: boolean;
  error: string;
  fetchCharacters: () => Promise<void>;
  shuffleCharacters: () => void;
  addCharacter: (character: Partial<Character>) => void;
}

export const useCharacterStore = create<CharacterState>((set) => ({
  characters: [],
  loading: false,
  error: '',
  
  fetchCharacters: async () => {
    set({ loading: true });
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      set({ characters: data.results, loading: false, error: '' });
    } catch (err) {
      set({ error: 'Failed to fetch characters', loading: false });
    }
  },

  shuffleCharacters: () => {
    set((state) => {
      const shuffled = [...state.characters];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return { characters: shuffled };
    });
  },

  addCharacter: (character) => set((state) => ({
    characters: [{
      name: 'Unknown',
      status: 'unknown',
      species: 'unknown',
      ...character,
      id: Math.max(...state.characters.map(c => c.id)) + 1,
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' // default image
    } as Character, ...state.characters]
  })),
}));
