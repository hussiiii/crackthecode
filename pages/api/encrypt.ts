import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  encryptedText: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { text, shift } = req.body;

  if (typeof text !== 'string' || typeof shift !== 'number') {
    res.status(400).json({ encryptedText: "Invalid input" });
    return;
  }

  const encryptedText = text.split('').map(char => {
    if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode((char.charCodeAt(0) + shift - 65) % 26 + 65);
    } else if (char >= 'a' && char <= 'z') {
      return String.fromCharCode((char.charCodeAt(0) + shift - 97) % 26 + 97);
    }
    return char;
  }).join('');

  res.status(200).json({ encryptedText });
}
