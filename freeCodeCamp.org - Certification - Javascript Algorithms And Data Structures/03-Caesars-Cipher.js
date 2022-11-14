// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.



function rot13(str) {

    const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let acumulador = "";
    let strArray = str.split(""); //[ 'S', 'E', 'R', 'R', ' ', 'P', 'B', 'Q', 'R', ' ', 'P', 'N', 'Z', 'C' ]
    
    strArray.map((el,item) => {
      if(abecedario.indexOf(str[item]) == -1) {
        acumulador += str[item]
      } else {
        let indiceRot13 = (abecedario.indexOf(str[item]) + 13) % 26; // 26 abecedario.length
           acumulador += abecedario[indiceRot13];
      }
      
    });
    return acumulador;
  };
  
  console.log(rot13("SERR PBQR PNZC"),rot13("SERR CVMMN!"),rot13("SERR YBIR?"),rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
  //FREE CODE CAMP 
  //FREE PIZZA! 
  //FREE LOVE? 
  //THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.