//* HW # 8
const yearOfBirth = Number(prompt('When is your year of birth'));
const userCity = prompt('In what city do you live');
const userFavoritSport = prompt ('What is your favorite sport? (Run,Basketball,Tennis, or your option)');

let userYears
let userLives
let userSport 

if (yearOfBirth) {
    userYears = `You are ${2023 - yearOfBirth} years old!`
    console.log(userYears)
} else {
    userYears = `It is a pity that you did not want to enter your date of birth!`
    console.log(userYears)
}

if (userCity === 'Kyiv') {
    userLives = 'You live in the capital of Ukraine!'
    console.log(userLives)
} else if (userCity === 'Washington') {
    userLives = 'You live in the capital of USA!'
    console.log(userLives)
} else if (userCity === 'London') {
    userLives = 'You live in the capital of England!'
    console.log(userLives)
} else if (userCity) {
    userLives = `You live in the city ${userCity}! `
    console.log(userLives)
} else {
    userLives = `It is a pity that you did not want to enter your City!`
    console.log(userLives)
}


if(userFavoritSport === 'Run') {
    userSport = 'Cool! Do you want to become Usain Bolt?'
    console.log(userSport)
} else if(userFavoritSport === 'Basketball') {
    userSport = 'Cool! Do you want to become LeBron James?'
    console.log(userSport)
} else if(userFavoritSport === 'Tennis') {
    userSport = 'Cool! Do you want to become Jimmy Connors?'
    console.log(userSport)
} else if(userFavoritSport) {
    userSport = 'Cool! keep it up!'
    console.log(userSport)
} else {
    userSport = `It is a pity that you did not want to enter your favorit sport!`
    console.log(userSport)
}

alert(`${userYears} \n ${userLives} \n ${userSport}`);
