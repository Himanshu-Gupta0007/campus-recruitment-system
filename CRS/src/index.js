
// Problem:

// Ek integer array nums aur ek integer target diya gaya hai.

// Aise 2 numbers ke indices return karo jinka sum target ke equal ho.



// function twosum(nums, target){

//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
//     return null;
// }

//  let ans = twosum([2, 7,45, 11, 15], 9); // Output: [0, 1]    

//  console.log(ans);





// Problem 3: Best Time to Buy and Sell Stock (Easy)

// Ek array prices diya gaya hai jisme prices[i] us din ka stock price hai.

// Tum sirf ek baar buy aur ek baar sell kar sakte ho.

// Maximum profit return karo.

// Agar profit possible nahi hai to 0 return karo.



function maxProfit(prices) {
    let minPrice = Infinity;

    let maxProfit = 0;

    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
}   


 let answer = maxProfit([7, 1, 5, 3, 6, 4]); // Output: 5
 console.log(answer);