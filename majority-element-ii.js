function findDuplicates(nums) {
    debugger
    const seen = new Set();
    const duplicates = new Set();

    for (const num of nums) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    return Array.from(duplicates);
}

// Exemplo de uso:
const nums = [3, 2, 3];
console.log(findDuplicates(nums)); // Saída: [3]