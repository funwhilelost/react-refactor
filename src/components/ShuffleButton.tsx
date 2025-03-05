import React from 'react';

interface ShuffleButtonProps {
  onShuffle: () => void;
}

const ShuffleButton: React.FC<ShuffleButtonProps> = ({ onShuffle }) => {
  return (
    <button 
      onClick={onShuffle}
      style={{
        margin: '1rem',
        padding: '0.5rem 1rem',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Randomize Characters
    </button>
  );
};

export default ShuffleButton;
