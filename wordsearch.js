const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const horizontalBackwardsJoin = letters.map(ls => ls.reverse().join(''));
  const verticalJoin = [];
  const verticalBackwardsJoin = [];


  //Create vertical and backwards joined arrays
  for (let i = 0; i < horizontalJoin[0].length; i++) {
    const verticalArray = [];
    for (let j = 0; j < horizontalJoin.length; j++) {
      verticalArray.push(horizontalJoin[j][i]);
    }
    verticalJoin.push(verticalArray.join(''));
    verticalBackwardsJoin.push(verticalArray.reverse().join(''));
  }

  //   console.log('vertical', verticalJoin);
  //   console.log('horizontal backwards', horizontalBackwardsJoin);
  //   console.log('vertical backwards', verticalBackwardsJoin);

  //Search horizontally
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  //Search vertically
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  //Seach horizontal backwards
  for (const l of horizontalBackwardsJoin) {
    if (l.includes(word)) return true;
  }
  
  //Seach vertical backwards
  for (const l of verticalBackwardsJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};


module.exports = wordSearch;