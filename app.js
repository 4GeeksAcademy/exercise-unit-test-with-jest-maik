// console.log("hello world");
//  const sum = (a,b) => {
//     return a + b
// }
// module.exports = {sum};
// console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87,
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}


 const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar / oneEuroIs["USD"];
    let valueInYen = valueInEuro * oneEuroIs["JPY"];
    return valueInYen;
 }
console.log(fromDollarToYen(1));

 const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * oneEuroIs["GBP"];
    return valueInPound
 }
console.log(fromYenToPound(1));

 module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound}