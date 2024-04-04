// 1. Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array
// anonymous  function 
var anonymousFunction = function(array){
    var oddNumbers = [];
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
            oddNumbers.push(array[i]);
          } 
     }
     console.log("Odd numbers are ",oddNumbers)
  }
  anonymousFunction ([5,6,7,8]);

//   IIFE
  (function(array){
    var oddNumbers = [];
for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
            oddNumbers.push(array[i]);
          } 
     }
     console.log("Odd numbers are ",oddNumbers);
})([1,2,3,4]);

// b.Convert all the strings to title caps in a string array
// anonymous  function
var titleCaps = function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
  console.log (titleCaps(" my name : nani "));
// IIFE : 
(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    console.log(str.join(' '));
  })(" mY Name : nani ");

// c.Sum of all numbers in an array
// anonymous  function
var sumOfAllNumbers = function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }
  console.log(sumOfAllNumbers([6,15,9,30]));
// IIFE
(function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     console.log(sum);
  })([6,15,9,30]);

// d.Return all the prime numbers in an array
// anonymous  function
var primeNumbers = function(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}
primeNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

// IIFE
(function(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
})([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);

// e.Return all the palindromes in an array

function isPalindrome(N)//to check palindrome
    {
        var str = "" + N;
        var len = str.length;
        for (var i = 0; i < parseInt(len / 2, 10); i++)
        {
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    }
// anonymous  function
var palindrome = function (arr,n) {
    for (var i =0; i<n;i++){

        var ans = isPalindrome(arr[i]);
                if (ans == false) {
            console.log(arr[i]," is not a palindrome");
        }
        else{
            console.log(arr[i]," is a palindrome");
        }
    }
    
}
    palindrome(["civic", "radar", "level", "rotor", "kayak", "madam","abcde"],7);

// IIFE

(function (arr,n) {
    for (var i =0; i<n;i++){

        var ans = isPalindrome(arr[i]);
                if (ans == false) {
            console.log(arr[i]," is not a palindrome");
        }
        else{
            console.log(arr[i]," is a palindrome");
        }
    }
    
})(["civic", "radar", "level", "rotor", "kayak", "madam","abcde"],7);
    

// f.Return median of two sorted arrays of the same size.
// anonymous  function
var getMedian = function (ar1, ar2, n)
{
    var i = 0; /* Current index of i/p array ar1[] */
    var j = 0; /* Current index of i/p array ar2[] */
    var count, m1 = -1, m2 = -1;
 
    /* Since there are 2n elements, median will be average
    of elements at index n-1 and n in the array obtained after
    merging ar1 and ar2 */
    for (count = 0; count <= n; count++)
    {
        /*Below is to handle case where all elements of ar1[] are
        smaller than smallest(or first) element of ar2[]*/
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
        /*Below is to handle case where all elements of ar2[] are
        smaller than smallest(or first) element of ar1[]*/
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        /* equals sign because if two
            arrays have some common elements */
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; /* Store the prev median */
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; /* Store the prev median */
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
 
/* Driver program to test above function */
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
console.log("Median is "+ getMedian(ar1, ar2, n1));
else
console.log("Doesn't work for arrays of unequal size");

// IIFE
(function (ar1, ar2, n)
{
    var i = 0, j = 0, count, m1 = -1, m2 = -1;
     for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
})(console.log("Median is "+ getMedian([1, 12, 15, 26, 38], [2, 13, 17, 30, 45], 5)));

// g.Remove duplicates from an array
// anonymous  function
var removeDuplicate = function(array){
    var dup = [...new Set(array)];
    console.log(dup);
  }
  removeDuplicate([1,1,2,2,3,3,4,2,3,5,5]);
// IIFE
(function(array){
    var dup = [...new Set(array)];
    console.log(dup);
  })([1,1,2,3,4,5,5]);

// h.Rotate an array by k times
// anonymous  function
var rotateArray = function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
  }
  console.log(rotateArray([1, 2, 3, 4, 5],3));
  //IIFE
  (function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    console.log(nums);
  })([1, 2, 3, 4, 5],1);

// 2.Do the below programs in arrow functions.
// a.Print odd numbers in an array
var arrowFunctionOddNumbers = (array) => {
    var oddNumbers = [];
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
            oddNumbers.push(array[i]);
          } 
     }
     console.log("Odd numbers are ",oddNumbers)
  }
  arrowFunctionOddNumbers ([5,6,7,8]);
// b.Convert all the strings to title caps in a string array
var titleCaps = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
  console.log (titleCaps(" my name : nani "));
// c.Sum of all numbers in an array
var sumOfAllNumbers_usingArrorwFunction = (array) =>{
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }
  console.log(sumOfAllNumbers_usingArrorwFunction([6,15,9,30]));
// d.Return all the prime numbers in an array
var primeNumbersUsingArrorwFunction = (numArray) => {
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}
primeNumbersUsingArrorwFunction([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
// e.Return all the palindromes in an array
// ispalindrome used from above code
var palindromeInArrowFunction = (arr,n) => {
    for (var i =0; i<n;i++){

        var ans = isPalindrome(arr[i]);
                if (ans == false) {
            console.log(arr[i]," is not a palindrome");
        }
        else{
            console.log(arr[i]," is a palindrome");
        }
    }
    
}
    palindromeInArrowFunction(["civic", "radar", "level", "rotor", "kayak", "madam","abcde"],7);
