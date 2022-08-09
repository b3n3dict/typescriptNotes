var employee = {
    id: 1,
    name: "Ben",
    retire: function (date) {
        console.log(date);
    }
};
// union types 
function kgToLbs(weight) {
    // narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
// intersection 
var weight;
var textBox = {
    drag: function () {
    },
    resize: function () {
    }
};
var quantity = 50;
// nullable 
function great(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else
        console.log('hola');
}
great(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
var customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
// type assersion   | treat entity diffrent as diffrent type
var val;
var val2 = val;
var val3 = val;
var user1 = {
    id: 1,
    name: "ben"
};
var add = function (x, y) { return x + y; };
