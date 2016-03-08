var foo = 'bar'; // global scope

function bar(){
	var foo = 'baz';
}
function baz(foo) {
	foo = 'bam'; // scope foo
	bam = 'yay'; // global scope
}

bar('test');
baz()

