//* HW #6   1/2
const oneString = prompt ('enter a word #1')
console.log(oneString)
const twoString = prompt ('enter a word #2')
console.log(twoString)
const threeString = prompt ('enter a word #3')
console.log(threeString)

const allStrings = (oneString + twoString + threeString)
alert(allStrings)


//* HW #6   2/2
const numb = 12345;

const numbSrt = numb.toString()

const numbWithSpace =(`${numbSrt [0]} ${numbSrt [1]} ${numbSrt [2]} ${numbSrt [3]} ${numbSrt [4]}`);
console.log( numbWithSpace);