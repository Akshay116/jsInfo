// function statment or function declaratin 
function a(){
	console.log('Hello this is function statment aka function declaratin ');
}

//function expression 
var b = function () {
	console.log('Hello this is function expression ');
	
}

//annyoums function
function(){
	console.log('only gives error see that');
}

// named functions 
var b = function abc() {
	console.log('Hello this is abc named function expression see on console for more details');
	
}

// first class functions ability to pass function as values and return functions 
// try with let const (temporal deadzone)
  
  var b = function(param){
  	return function xyz(){

  	}
  }
  console.log(b());
