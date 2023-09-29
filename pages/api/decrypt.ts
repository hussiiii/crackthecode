import type { NextApiRequest, NextApiResponse } from 'next';
import { decryptCaesarCipher } from '../../utils/cipher1';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { text, shift } = req.body;

    if (!text || typeof shift !== 'number') {
        return res.status(400).json({ error: 'Invalid input' });
    }

    const decryptedText = decryptCaesarCipher(text, shift);
    res.status(200).json({ decryptedText });
}
