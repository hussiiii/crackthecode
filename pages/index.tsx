import InputComponent from '../components/InputComponent';

import React, { useState } from 'react';

const HomePage: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  // We'll add more state and functions later

  return (
    <div>
      <h1>Crack the Code!</h1>
      <InputComponent 
        onInputChange={(value) => setInputText(value)} 
        onCipherSelect={(cipher) => console.log(cipher)} 
      />
    </div>
  );
}

export default HomePage;
