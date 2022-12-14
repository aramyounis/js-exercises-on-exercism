// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  var total=0
  for(var i=0 ; i<= birdsPerDay.length-1;i++){
    total += birdsPerDay[i]
  }
  return total
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {

  var startWeek = week * 7 - 7
  var endWeek = startWeek + 6
  var total = 0
  for(var i=startWeek; i <= endWeek;i++){
    total += birdsPerDay[i]
  }

  return total
  
  
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {

 for (var i = 0; i < birdsPerDay.length-1; i++) {
   if(i % 2 == 0) {
     birdsPerDay[i] = birdsPerDay[i]+1
     
   }
 } 
  return birdsPerDay
}
