var a = b();
var c = d();
a;
c;

function b() {
    return c;
}

var d = function () {
    return b;
};

//BECOMES:

function b() {
    return c;
}
var a;
var b;
var d;

a = b();
c = d();

a;
c;
d = function () {
    return b;
};