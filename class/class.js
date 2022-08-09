var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// implement interface
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.display = function () {
        console.log("Hello ".concat(this.name));
    };
    Person.sum = function (a, b) {
        console.log(a + b);
    };
    return Person;
}());
var person1 = new Person("ben", 20);
person1.display();
Person.sum(1, 2);
// inheritance | extend class
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, positon) {
        var _this = _super.call(this, name, age) || this;
        _this.position = positon;
        return _this;
    }
    return Employee;
}(Person));
var employee1 = new Employee("Ben", 20, "SE");
console.log(employee1.name);
console.log(employee1.age);
console.log(employee1.position);
employee1.display();
// generics