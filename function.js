    // console.log("P");
    // console.log("R");
    // console.log("A");
    // console.log("J");
    // console.log("W");
    // console.log("A");
    // console.log("L");

function sayMyName(){
    // console.log("P");
    // console.log("R");
    // console.log("A");
    // console.log("J");
    // console.log("W");
    // console.log("A");
    // console.log("L");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);
   
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    
 }
const result = addTwoNumbers(5,6)
// console.log("result:", result);

function loginuserMessage(username){
    if(username === undefined){
        // console.log("please enter a username");
        return
        
    }
      return `${username} just logged in`
}
// console.log(loginuserMessage("Prajwal"));
// console.log(loginuserMessage());

function calculateCartPrice(val1, val2, ...num1){
  return num1
}

// console.log(calculateCartPrice(200, 500, 400, 58348, 574));

const user = {
    username: "Prajwal",
    price: 199
}

function handleObject(anyobject){
//    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
   
}
// handleObject(user)

const myNewArray = [200, 400, 100, 600]
function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(myNewArray));
