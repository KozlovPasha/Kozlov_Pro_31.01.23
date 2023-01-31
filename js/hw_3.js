let numOne = Number (prompt ('enter the first number'));
let numTwoo = Number (prompt ('enter next number'));

let add = +`${numOne}` + +`${numTwoo}`;
console.log(add);


let sub = +`${numOne}` - +`${numTwoo}`;
console.log(sub);


let mult= +`${numOne}` * +`${numTwoo}`;
console.log(mult);


let div= +`${numOne}` / +`${numTwoo}`;
console.log(div);


alert((numOne + '+'+ numTwoo + '=' + add) + '\n' + (numOne + '-'+ numTwoo + '=' +sub) + '\n' + (numOne + '*'+ numTwoo + '=' +mult) + '\n' + (numOne + '/'+ numTwoo + '=' +div) );

