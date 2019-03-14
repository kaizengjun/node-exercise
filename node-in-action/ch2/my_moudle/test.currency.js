const Currency = require('./currency');

const canndianDollar = 0.91;

const currency = new Currency(canndianDollar);

console.log(currency.canadianToUS(50))
console.log(currency.USToCanadian(30))