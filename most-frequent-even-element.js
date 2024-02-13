function mostFrequentEven(nums) {
    debugger
    const freqMap = new Map();
    let maxFreq = 0;
    let mostFrequentEven = -1;

    // Count frequencies of even numbers
    for (const num of nums) {
        if (num % 2 === 0) {
            const freq = freqMap.get(num) || 0;
            freqMap.set(num, freq + 1);
            maxFreq = Math.max(maxFreq, freq + 1);
        }
    }

    // Find the most frequent even number
    for (const [num, freq] of freqMap) {
        if (freq === maxFreq) {
            if (mostFrequentEven === -1 || num < mostFrequentEven) {
                mostFrequentEven = num;
            }
        }
    }

    return mostFrequentEven;
}

// Example usage:
console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1])); // Output: 2
console.log(mostFrequentEven([4, 4, 4, 9, 2, 4]));    // Output: 4
console.log(mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7])); // Output: -1