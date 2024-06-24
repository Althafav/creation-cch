var CryptoJS = require("crypto-js");

export default class Crypto {
  private static privateKey: string = "fünfjahreundzwei";

  static encrypt(message: string): string {
    // Encrypt
    return CryptoJS.AES.encrypt(message, this.privateKey).toString();
  }

  static decrypt(message: string): string {
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(message, this.privateKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
