// Roman Numeral Converter
// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// All roman numerals answers should be provided in upper-case.



function convertToRoman(num) {
    let numerosRomanos = {
      1000: "M",
      900: "CM",
      500: "D",
      400: "CD",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I" 
    }
   let arrayObject = Object.keys(numerosRomanos).reverse();
   //[ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]
  
    let acumulador = "";
  
   arrayObject.map(el => {
     while(el <= num) {
       acumulador += numerosRomanos[el]
        num -= el
     }
   })
  
  return acumulador;
  };
  
  console.log(convertToRoman(36),convertToRoman(2014),convertToRoman(3999)); //XXXVI MMXIV MMMCMXCIX