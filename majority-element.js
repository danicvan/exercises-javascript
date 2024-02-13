function majorityElement(nums) {
    debugger
    let candidate = null;
    let count = 0;
    
    for (let a = 0; a < nums.length; a++) {
        if (count === 0) {
            candidate = nums[a];
            count = 1;
        } else if (candidate === nums[a]) {
            count++;
        } else {
            count--;
        }
    }
    
    return candidate;
}

const nums1 = [3, 2, 3];
console.log(majorityElement(nums1));