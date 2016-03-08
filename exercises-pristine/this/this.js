//function foo() {
//	var bar = 'bar1';
//	this.baz();
//}
//
//function baz() {
//	console.log(this.bar); // this is foo -> Implicit binding rule. Called from withing foo()
//}
//
//var bar = 'bar2';
//foo();



function foo(baz, bam) {
	this.baz = "baz";
	console.log(this.bar + " " + baz);
}

var bar = "bar";
var baz = new foo();

