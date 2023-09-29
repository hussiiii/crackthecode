export function decryptCaesarCipher(text: string, shift: number): string {
    return text.split('').map(char => {
        if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) - shift + 26) % 26 + 'A'.charCodeAt(0));
        } else if (char >= 'a' && char <= 'z') {
            return String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) - shift + 26) % 26 + 'a'.charCodeAt(0));
        } else {
            return char;
        }
    }).join('');
}
