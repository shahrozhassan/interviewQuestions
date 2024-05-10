var removeElement = function(nums, val) {
    let k = 0; // pointer for the position to place the next non-val element
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // move the non-val element to position k
            k++; // increment k
        }
    }
    
    return k; // return the count of elements not equal to val
};

// Example usage:
let nums = [3, 2, 2, 3];
let val = 3;
let k = removeElement(nums, val);
console.log("Output:", k, ", nums =", nums.slice(0, k));
