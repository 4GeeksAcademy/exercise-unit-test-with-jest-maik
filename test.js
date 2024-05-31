// const{sum} = require('./app.js');

// test('adds 14 + 9 to equal 23',() =>{
//     let total = sum (14,9);

//     expect(total).toBe(23);
// });
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    


    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test('one dollar should be 146.26 yen', function(){
    const {fromDollarToYen} = require('./app.js');
const yen = fromDollarToYen(3.5);
const expected = 3.5 * 146.26;

expect(Number(fromDollarToYen(3.5).toFixed(2))).toBe(511.92);
})

test('one yen should be 0.87 pound', function(){
    const {fromYenToPound} = require('./app.js');
    const pound = fromYenToPound (3.5) 
    const expected = 3.5 * 0.87;
    expect(Number(fromYenToPound(3.5).toFixed(2))).toBe(3.04)
})