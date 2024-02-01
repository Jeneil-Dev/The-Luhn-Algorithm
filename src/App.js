import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


//DUMMY NUMS 4408041234567893 
console.log('4408041234567893')
function App() {

let [input, setInput]=useState('') 
let [validation, setValidation]=useState('') 

useEffect( calc, [input])


  function inputChange(e){
    //e.target = inputbox and the .val is the value of what ever is typed
    //this set input is the same as input = e.target.value - this is how you use the use state
    setInput(e.target.value)
    console.log(e.target.value)
  }

  function calc(){

  let creditCardNum = input.split('') //creates an array of strings (input vals)
  console.log(creditCardNum)
  let newCreditCardNum = creditCardNum.reverse()
  console.log(newCreditCardNum)
  // console.log(input.split('')) 
  
  //take the string input value (e.target.value) and set it to an array
  // as the user types a card number we check if is it valid or not

// Looping through the array of numbers from the input using odds and evens

  let newArr=[]

  // for(let j=creditCardNum.length; j>0;j-=2){
  //   newArr.push(creditCardNum[j-1]*1)
  // }
  for (let i=1; i<=newCreditCardNum.length;i++){ // looping through the evens and multiplying by 2
    //checing if the index is even or odd

    if(i%2 === 0){
      // then multiple the value at that index by 2
      let num = parseInt(newCreditCardNum[i-1]) * 2
      num = num.toString()
      if(num.length > 1){
        let num2 = parseInt(num[0]) + parseInt(num[1])
        newArr.push(num2)
      }else{
        newArr.push(parseInt(num))
      }
      console.log(newArr)
    }else{
      //push the value to new array
      newArr.push(parseInt(newCreditCardNum[i-1]))
      console.log(newCreditCardNum)
    }
    // console.log(i-1,creditCardNum[i-1],creditCardNum[i-1] * 2)
    // console.log(creditCardNum[i-1] * 2)
    // newArr.push(creditCardNum[i-1] * 2)
  } 

  // adding each number in the array

  let sum = 0
  for(let i = 0; i<newArr.length;i++){
    sum += newArr[i]
  }
  console.log(sum)
  
  // confirm sum % ===0
  if(input.length === 0 ){
    setValidation('Enter your credit card number')
  }else if(sum % 10 === 0 ){
    setValidation('Your credit card is valid!') 
  }else{
    setValidation('Your credit card is NOT valid!')
  }
  

} // closing calc

  // console.log(newArr + "  NEWARR") // gives us out new array of our numbers
  // let splitArr = newArr.join('') //returns new string by concatenating all elements into 1 
  // splitArr = splitArr.split('')
  // console.log(splitArr) 
  // console.log(typeof newArr)
  // console.log('NEW NUMS')
  // // console.log(splitArr.split('')) // gives us an array of individual strings containing 1 single digit number!
  
  // splitArr.map((nums) => {parseInt(nums,10)
  // console.log(nums)
// })
 
  //  splitArr.reduce( (prv, cur) => prv + cur) % 10 === 0

  // adding the numbers together

  


  return (
    <div className="App">
      <h1>The Luhn Algorithm</h1>
      <p>{validation}</p>
      <input value={input} onChange={inputChange}/>
    </div>
  );
}

export default App;
