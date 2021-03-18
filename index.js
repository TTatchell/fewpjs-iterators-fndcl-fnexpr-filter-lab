const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name) {
    return array.filter(array => array.toUpperCase() === name.toUpperCase())
}



function fuzzyMatch(array, letters) {
    return array.filter(array => array.startsWith(letters))

}



function matchName(array, name) {
    return array.filter(array => array.name === name)

}
const driversX = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

console.log(matchName(driversX, "Bobby"));

