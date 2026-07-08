
// Problem:

// Ek integer array nums aur ek integer target diya gaya hai.

// Aise 2 numbers ke indices return karo jinka sum target ke equal ho.



function twosum(nums, target){

    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return null;
}

 let ans = twosum([2, 7, 11, 15], 9); // Output: [0, 1]    

 console.log(ans);.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000