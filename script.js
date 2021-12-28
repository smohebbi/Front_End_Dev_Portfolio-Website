// Write class below
class ShiftCipher {
    constructor(shift) {
      this.shift = shift;
    }
    encrypt(string) {
      for(let i = 0; i < string.length; i++) {
        if('A'.charCodeAt(0) <=  string.charCodeAt(i) <= 'Z'.charCodeAt(0)) {
          console.log(string[i] + "+");
        //   string[i] = String.fromCharCode((string[i] + this.shift) % 26 + 'A'.charCodeAt(0));
            string[i] = 'X';
        } 
        if('a'<= string[i] <='z'){
          string[i] = String.fromCharCode((string[i] + this.shift) % 26 + 'a'.charCodeAt(0));
        }   
      }
      return string;
    }
    decrypt(string) {
      for(let i = 0; i < string.length; i++) {
        if('A' <= string[i] <= 'Z') {
          console.log(string[i]);
          string[i] = String.fromCharCode((string[i] - this.shift) % 26 + 'A'.charCodeAt(0));
        } 
        if('a'<= string[i] <='z'){
          string[i] = String.fromCharCode((string[i] - this.shift) % 26 + 'a'.charCodeAt(0));
        }   
      }
      return string;
    }
  }
  
  const cipher = new ShiftCipher(1);
  console.log(cipher.encrypt('AZ')); 
  // cipher.decrypt('K <3 OA RWRRA'); 

  // Write class below
class ShiftCipher {
  constructor(shift){
    this.shift = shift;
  }
  encrypt(plainString) {
    let encryptString = '';
    const tempString = plainString.toUpperCase();

    for (let i=0; i < tempString.length; i++) {
      let charNum = tempString.charCodeAt(i);
      
      if (charNum <= 90 && charNum >= 65) {
        charNum += this.shift;
        if (charNum > 90) {
          charNum -= 26;
        }
      }
      encryptString += String.fromCharCode(charNum);
    }
    return encryptString;
  }

  decrypt(encryptString) {
    let decryptString = '';
    const tempString = encryptString.toLowerCase();

    for (let i=0; i < tempString.length; i++) {
      let charNum = tempString.charCodeAt(i);
      
      if (charNum <= 122 && charNum >= 97) {
        charNum -= this.shift;
        if (charNum < 97) {
          charNum += 26;
        }
      }
      decryptString += String.fromCharCode(charNum);
    }
    return decryptString;
  }
}

// // Write class below
// class ShiftCipher {
//     constructor(shift){
//       this.shift = shift;
//     }
//     encrypt(plainString) {
//       let encryptString = '';
//       const tempString = plainString.toUpperCase();
  
//       for (let i=0; i < tempString.length; i++) {
//         let charNum = tempString.charCodeAt(i);
        
//         if (charNum <= 90 && charNum >= 65) {
//           charNum += this.shift;
//           if (charNum > 90) {
//             charNum -= 26;
//           }
//         }
//         encryptString += String.fromCharCode(charNum);
//       }
//       return encryptString;
//     }
  
//     decrypt(encryptString) {
//       let decryptString = '';
//       const tempString = encryptString.toLowerCase();
  
//       for (let i=0; i < tempString.length; i++) {
//         let charNum = tempString.charCodeAt(i);
        
//         if (charNum <= 122 && charNum >= 97) {
//           charNum -= this.shift;
//           if (charNum < 97) {
//             charNum += 26;
//           }
//         }
//         decryptString += String.fromCharCode(charNum);
//       }
//       return decryptString;
//     }
//   }