
// declaring functions to do the operations in the calculator
const add = function(num1,num2){
    return num1+num2; 
}
const subtract = function(num1,num2){
    return num1-num2;
}
const power = function(num1,num2){
    return num1**num2;
}

const factorail = function(n){
  
    if(n===1 || n===0){
      return 1

     }
     else{
        return n * factorail(n-1);
     }


     }

     const SUMarray = function sumArray(arr) {
    let sum = 0;
    arr.forEach(number => {
        sum += number;
    });
    return sum;
}

const MulArray = function MulArray(arr) {
    let mul = 1;
    arr.forEach(number => {
        mul*= number;
    });
    return mul;
} 
   
    

    


const choseOperation = document.getElementById("operations");
const AddSubtraction = document.getElementById("twoFields");
const SumMultiplication = document.getElementById("oneField");
const Factorialfield = document.getElementById("Factorial");

choseOperation.addEventListener("change", function(){
    
    AddSubtraction.hidden = true;
    SumMultiplication.hidden = true;
    Factorialfield.hidden = true;
   

    const selectedOperation = choseOperation.value;

    if ( selectedOperation==="add" || selectedOperation=== "Subtract" || selectedOperation === "Power"){
        AddSubtraction.hidden = false;
        
    }
    else if (selectedOperation === "Sum" || selectedOperation === "Multiply"){
       SumMultiplication.hidden = false;

    }
  else if(selectedOperation === "Factorial"){
    Factorialfield.hidden = false;
   }
    

})
addSubmitbutton.addEventListener("click",function(){
    const Input1 = document.getElementById("num1").value;
    const num1 = parseInt(Input1,10);
   const Input2 = document.getElementById("num2").value;
   const num2 = parseInt(Input2,10);

   if(isNaN(num1)|| isNaN(num2)){
    alert("please enter valid numbers");
    return;
   }
   let result;
   const selectedOperation = choseOperation.value;
   if(selectedOperation === "add"){
    result = add(num1,num2);

   }
   else if(selectedOperation === "Subtract"){
    result = subtract(num1,num2)
   }
   else if(selectedOperation === "Power"){
    result = power(num1,num2)
   }
  document.getElementById("AddDisplay").value = result;
})
factorialSubmitbutton.addEventListener("click",function(){
    const Input4 = document.getElementById("factorial_num").value;
    const num4 = parseInt(Input4,10);

    let result;
    const selectedOperation = choseOperation.value;

    if(selectedOperation === "Factorial"){
        result = factorail(num4)
    }
    document.getElementById("FactorailDisplay").value = result
})


sumSubmitbutton.addEventListener("click", function(){
    const Input3 = document.getElementById("num3").value;
    const num3 = parseInt( Input3,10);
    
const number = Input3.split(",").map(item => item.trim()).map(Number);
   console.log(number)
const selectedOperation = choseOperation.value;
if(selectedOperation === "Sum"){

   var result =  SUMarray(number);
   document.getElementById("sumDisplay").value = result

}

   



})

sumSubmitbutton.addEventListener("click", function(){
    const Input5 = document.getElementById("num3").value;
    const num5 = parseInt( Input5,10);
    
const number = Input5.split(",").map(item => item.trim()).map(Number);
   console.log(number)
const selectedOperation = choseOperation.value;
if(selectedOperation === "Multiply"){
    
    var result = MulArray(number);
   document.getElementById("sumDisplay").value = result

}

   



})
   



