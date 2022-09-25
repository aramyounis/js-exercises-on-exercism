// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {

  switch(name){
    case 'Pure Strawberry Joy':
      return 0.5
      break;
      case 'Energizer':    
    case 'Green Garden': 
      return 1.5
      break;
      case 'Tropical Island':
      return 3
      break;  
    case "All or Nothing" :
      return 5
      break;
     default:
      return 2.5
  
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {

  var corWedges =0;
  var limesNeed=0


  while(limes.length){
     
    switch(true){
      
      case (wedgesNeeded==0): return 0
      case (corWedges > wedgesNeeded): return limesNeed
      case  (limes[0] =='small'):
        limesNeed++
        corWedges +=6
        limes.shift()
        break;
      case  (limes[0]=='medium'):
        limesNeed++
        corWedges +=8
        limes.shift()
        break;
      case  (limes[0]=='large'):
        limesNeed++
        corWedges +=10
        limes.shift()
        break;
        
    }
  
  }
  return limesNeed
  
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {


  while (timeLeft > 0) {
    var oldTime = timeLeft
    switch (orders[0]) {

      case 'Pure Strawberry Joy':
        timeLeft = timeLeft - 0.5
        orders.shift()
        break;

      case 'Green Garden':
      case 'Energizer':
        timeLeft = timeLeft - 1.5
        orders.shift()
        break;

      case 'Tropical Island':
        timeLeft = timeLeft - 3
        orders.shift()
        break;


      case 'All or Nothing':
        timeLeft = timeLeft - 5
        orders.shift()
        break;

      default:
        timeLeft = timeLeft - 2.5
        orders.shift()

    }


    switch (true) {
      case (oldTime == timeLeft || timeLeft == 0):
        return orders

      default:
        break;

    }


  }




  return orders
  
}
