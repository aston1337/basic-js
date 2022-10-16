const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(dataParam = "no data passed") {

  if (dataParam === 'no data passed') return 'Unable to determine the time of year!'
  if (isNaN(Date.parse(dataParam))) throw new Error("Invalid date!");
  if (Object.getOwnPropertyNames(dataParam).length) throw new Error("Invalid date!");

  let month = dataParam.getMonth();
  switch (month) {
    case 11:
    case 0:
    case 1:
      return 'winter'
    case 2:
    case 3:
    case 4:
      return 'spring'
    case 5:
    case 6:
    case 7:
      return "summer"
    case 8:
    case 9:
    case 10:
      return "autumn"
  }
}

module.exports = {
  getSeason
};
