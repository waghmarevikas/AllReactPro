function moduleDemo(){
    console.log("Hello");
    var a = 10
    function getXfunction(){
        return a;
    }
}
var b = function(){moduleDemo(); } 
console.log(b)
var c = b.bind(moduleDemo());
console.log(c)


//apply method

var arr = [1,2,3,6];
var max = Math.max.apply(null,arr);
console.log(max);


//call method

