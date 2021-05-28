const crypto = require('crypto');
const secret = 'react-native-Password-Manager01x'; //32 bit key used for encryption and decryption

const encrypt = (password) => {
    // Identified for the encryption 
    const iv = Buffer.from(crypto.randomBytes(16)); // Initialization Vector (IV), needs to be randomized. Therefore, I have used crypto's built in .randomBytes function to shift 16 bytes.
    const cipher = crypto.createCipheriv('aes-256-ctr', Buffer.from(secret), iv); // Cipher uses IV shifted through the buffer from secret.

    /*
        Constant Variable called 'encryptedPassword', will concatonate the input from Buffer (secret + iv)
        and update the password's cipher (effectivly hashing it with AES-256).

        The function has a return method which pushes the IV to string and into hexidecimal,
        as well as, the password. With both being pushed to Hex, it will populate the variables 'iv' and 'password',
        with the cipher hex values (post-encryption).
    */
    const encryptedPassword = Buffer.concat([
        cipher.update(password),
        cipher.final(),
    ]);

    return {
        iv: iv.toString('hex'),
        password: encryptedPassword.toString('hex'), 
    };
};


/*
    Decryption variable, makes use of createDecipheriv function, to take
    AES-256 input previously entered from secret, as well as, the unique encryption iv key in hex.


*/

const decrypt = (encryption) => {
    const decipher = crypto.createDecipheriv(
        'aes-256-ctr',
        Buffer.from(secret),
        Buffer.from(encryption.iv, 'hex')
    );

    /*
        DecryptedPassword goes into the buffer to concatonate stored hex values from 'password' and 'iv'.
        The function first requests an update of the buffer, takes the stored values within 'password' and 
        pushes it to hex format.
    */

    const decryptedPassword = Buffer.concat([
        decipher.update(Buffer.from(encryption.password, 'hex')),
        decipher.final(),
    ]);

    return decryptedPassword.toString()
};

module.exports = { encrypt, decrypt };