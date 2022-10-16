const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!Array.isArray(members)) return false
    let abbreviation = [];
    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
            let char =  members[i].trimStart().charAt(0).toUpperCase();
            abbreviation.push(char);
        }
    }
    if (abbreviation.length === 0) {
        return false
    }
    return abbreviation.sort().join('');
}

module.exports = {
    createDreamTeam
};
