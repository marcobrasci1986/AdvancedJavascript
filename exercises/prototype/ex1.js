function Foo(who) {
    this.me = who;
}
Foo.prototype.identify = function () {
    return "I am " + this.me;
};

var a1 = new Foo("a1");
var a2 = new Foo("a2");

a2.speak = function () {
    alert("Hello, " + this.identify() + ".");
};
console.log(a1.identify()); // a1
console.log(a2.identify()); // a2

console.log('a1.constructor === Foo; ' + a1.constructor === Foo);
console.log('a1.constructor === a2.constructor; ' + a1.constructor === a2.constructor);
console.log('a1.__proto__ === Foo.prototype; ' + a1.__proto__ === Foo.prototype);
console.log('a1.__proto__ === a2.__proto__; ' + a1.__proto__ === a2.__proto__);
console.log('a1.prototype === a2.prototype ' + a1.prototype === a2.prototype);

