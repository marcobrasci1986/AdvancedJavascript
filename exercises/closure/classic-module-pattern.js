// 1. Has to be an outer wrapping function
// 2. return a function that has access to inner scope vars
var foo = (function(){

    var o = { bar: "bar" };


    return {
        bar: function(){
            console.log(o.bar);
        }
    };

})();

foo.bar(); // "bar"