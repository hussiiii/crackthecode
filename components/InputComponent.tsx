import React from 'react';

interface InputProps {
  onInputChange: (value: string) => void;
  onCipherSelect: (cipher: string) => void;
  // We can add more props as needed later
}

const InputComponent: React.FC<InputProps> = ({ onInputChange, onCipherSelect }) => {
  return (
    <div>
      <input type="text" onChange={(e) => onInputChange(e.target.value)} />
      <select onChange={(e) => onCipherSelect(e.target.value)}>
        <option value="cipher1">Cipher 1</option>
        {/* Add more ciphers as you implement them */}
      </select>
    </div>
  );
}

export default InputComponent;
