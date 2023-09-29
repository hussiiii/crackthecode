import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InputComponent from '../components/InputComponent';  // Adjust path if necessary
import { sentences } from '../data/sentences'; // Adjust path if necessary

const HomePage: React.FC = () => {
  const [inputText, setInputText] = useState('');      // Text the user inputs to be decrypted
  const [decryptedText, setDecryptedText] = useState(''); // Decrypted result of the user's input
  const [encryptedSentence, setEncryptedSentence] = useState('');

  useEffect(() => {
    const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    // For now, using hardcoded Caesar cipher to encrypt the sentence
    const shift = 3;
    const encryptedText = randomSentence.split('').map(char => {
      if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode((char.charCodeAt(0) + shift - 65) % 26 + 65);
      } else if (char >= 'a' && char <= 'z') {
        return String.fromCharCode((char.charCodeAt(0) + shift - 97) % 26 + 97);
      }
      return char;
    }).join('');
    setEncryptedSentence(encryptedText);
  }, []);

  const handleEncrypt = async (plaintext: string, cipher: string) => {
    try {
      // For now, directly calling the encrypt API for the Caesar cipher
      const response = await axios.post('/api/encrypt', {
        text: plaintext,
        shift: 3  // for now, we're hardcoding the shift for Caesar cipher
      });
      setDecryptedText(response.data.encryptedText); // We might rename this state variable later for clarity
    } catch (error) {
      console.error("Error encrypting:", error);
      // Later, we can add UI feedback for errors
    }
};

  return (
    <div>
      <h1>Crack the Code!</h1>
      <p>Can you decrypt this? - {encryptedSentence}</p>
      
      <InputComponent onEncrypt={handleEncrypt} />
      
      {/* Display the decrypted text */}
      <div>{decryptedText}</div>
      
      {/* Later, you can add additional components like the user guess input and the About section */}
    </div>
  );
}

export default HomePage;
