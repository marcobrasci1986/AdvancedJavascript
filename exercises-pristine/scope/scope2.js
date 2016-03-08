var foo = 'bar'; // global scope

function bar(){
	var foo = 'baz';

	function baz(foo) {
		foo = 'bam'; // scope foo
		bam = 'yay'; // global scope
	}
	baz();
}

bar(); // defined in global scope
console.log(foo); // bar
console.log(bam); // yay
baz(); // not defined in global scope