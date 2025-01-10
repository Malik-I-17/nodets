import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../../.env') });
import crypto, { randomInt } from 'crypto';

// Generate a random 32-byte encryption key

// const encryptionKey = crypto.randomBytes(32);
// const encryptionKey = crypto.scryptSync(`secret`, 'salt', 32); // Derive a 32-byte key from a password and salt

const secretKey = process.env.CRYPTO_SECRET_KEY;

// Generate a random 32-byte encryption key

// const encryptionKey = crypto.randomBytes(32);
const encryptionKey = crypto.scryptSync(`'${secretKey}'`, 'salt', 32); // Derive a 32-byte key from a password and salt

// Function to encrypt data
export const encryptData = async (plaintext: any) => {
  const iv = crypto.randomBytes(16); // Generate a new Initialization Vector (IV) for each encryption
  const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, iv);
  let encrypted = cipher.update(plaintext, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return `${iv.toString('hex')}:${encrypted}`;
};

// Function to decrypt data
export const decryptData = (ciphertext: any) => {
  const [ivHex, encrypted] = ciphertext.split(':');
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', encryptionKey, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};


export const generateOtp = (): string => {
  const otp = randomInt(1000, 10000); // Generates a number between 1000 and 9999
  return otp.toString();
};
