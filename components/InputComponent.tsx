import React, { useState } from 'react';

interface InputProps {
  onEncrypt: (plaintext: string, cipher: string) => void;
}

const InputComponent: React.FC<InputProps> = ({ onEncrypt }) => {
  const [text, setText] = useState('');
  const [selectedCipher, setSelectedCipher] = useState('cipher1');

  const handleEncryptClick = () => {
    onEncrypt(text, selectedCipher);
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <select value={selectedCipher} onChange={(e) => setSelectedCipher(e.target.value)}>
        <option value="cipher1">Cipher 1</option>
        {/* Add more ciphers as you implement them */}
      </select>
      <button onClick={handleEncryptClick}>Encrypt</button>

    </div>
  );
}

export default InputComponent;
