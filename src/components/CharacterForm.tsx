import React from 'react';
import { Form, Field } from 'react-final-form';

interface CharacterFormData {
  name: string;
  species: string;
  status: 'Alive' | 'Dead' | 'unknown';
}

interface Props {
  onSubmit: (values: CharacterFormData) => void;
}

const CharacterForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <Field name="name" component="input" type="text" placeholder="Character name" />
          </div>
          <div>
            <label>Species: </label>
            <Field name="species" component="input" type="text" placeholder="Species" />
          </div>
          <div>
            <label>Status: </label>
            <Field name="status" component="select">
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="unknown">Unknown</option>
            </Field>
          </div>
          <button type="submit">Add Character</button>
        </form>
      )}
    />
  );
};

export default CharacterForm;
