// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]



function checkCashRegister(price, cash, cid) {

    const fondosInsuficientes = {status: "INSUFFICIENT_FUNDS", change: []};
    const cambioDeEntrega = {'ONE HUNDRED': 10000, 'TWENTY': 2000, 'TEN': 1000,
   'FIVE': 500, 'ONE': 100, 'QUARTER': 25, 'DIME': 10,'NICKEL': 5,'PENNY': 1};
    const closed = {status: "CLOSED", change: cid};
   const numeroRedondo = 100;
    let arrayAcumulador = [];
    
    let cambio = (cash - price) * numeroRedondo ;
    let acumulador = 0;
    
    for (let i = 0; i < cid.length; i++) {
      acumulador += cid[i][1] * numeroRedondo;
    };
    
    if (cambio > acumulador) {
      return fondosInsuficientes;
      
    } else if (cambio === acumulador) {
      return closed; 
      
    } else { 
      cid = cid.reverse(); 
  
    for (let j = 0; j < cid.length; j++) {
         let arrayCero = [cid[j][0], 0];
        
       cid[j][1] = cid[j][1] * numeroRedondo ;
  
       while (cambio >= cambioDeEntrega[cid[j][0]] && cid[j][1] > 0) {
         
        cambio -= cambioDeEntrega[cid[j][0]];
         cid[j][1] -= cambioDeEntrega[cid[j][0]];
        
        arrayCero[1] += cambioDeEntrega[cid[j][0]] /numeroRedondo;
        }
          
       if (arrayCero[1] > 0) {
         arrayAcumulador.push(arrayCero) ;
       }
      }
      
      if (cambio > 0) {
        return fondosInsuficientes;
      } 
      return {status: "OPEN", change: arrayAcumulador};
    }
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), //{ status: 'OPEN', change: [ [ 'QUARTER', 0.5 ] ] }
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
  );