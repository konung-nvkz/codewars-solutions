/*Some (but not all)
Some but not all
Description
Your task is to create a function that given a sequence and a predicate, returns True if only some (but not all) the elements in the sequence are True after applying the predicate

Examples
('abcdefg&%$', x -> isLetter(x)) == true
('&%$=', x -> isLetter x) == false
('abcdefg', x -> isLetter x) == false

([4, 1], x -> x > 3) == true
([1, 1], x -> x > 3) == false
([4, 4], x -> x > 3) == false
*/

// const someButNotAll = (seq, pred) => {
//     const trueCount = seq.filter(pred).length; // Count elements that satisfy the predicate
//     return trueCount > 0 && trueCount < seq.length; // Check if some but not all are true
// }

const someButNotAll = (seq,pred) => {
    let count = 0, n = 0;
    for (let e of seq) {
        if (pred(e)) count++;
        n++;
    }
    return count != n && count != 0;
}

// The provided solution for the `someButNotAll` function is indeed a more efficient and straightforward approach compared to the previous implementation I suggested. Let's break down how it works and why it is better.

// #### Explanation of the Provided Solution

// ```javascript
// const someButNotAll = (seq, pred) => {
//     let count = 0, n = 0;
//     for (let e of seq) {
//         if (pred(e)) count++;
//         n++;
//     }
//     return count != n && count != 0;
// }
// ```

// 1. **Initialization**: The function initializes two variables, `count` and `n`. `count` keeps track of how many elements satisfy the predicate, while `n` counts the total number of elements in the sequence.

// 2. **Iteration**: The function uses a `for...of` loop to iterate through each element `e` in the sequence `seq`. For each element:
//    - If the predicate `pred(e)` returns `true`, it increments the `count`.
//    - Regardless of whether the predicate is true or false, it increments `n` to count the total number of elements.

// 3. **Final Condition**: After the loop, the function checks two conditions:
//    - `count != n`: This ensures that not all elements satisfy the predicate.
//    - `count != 0`: This ensures that at least one element satisfies the predicate.
//    - The function returns `true` only if both conditions are met, indicating that **some but not all** elements satisfy the predicate.

// #### Advantages of This Approach

// - **Efficiency**: The provided solution only requires a single pass through the sequence (`O(n)` complexity), counting elements as it goes. This is more efficient than creating a filtered array and then checking its length, which involves additional memory allocation and processing time.

// - **Simplicity**: The logic is straightforward and easy to understand. By using a simple loop and two counters, it avoids the overhead of array methods like `filter`, making it clearer and potentially faster for larger datasets.

// - **Memory Usage**: The solution does not create any intermediate arrays, which reduces memory usage. This is particularly beneficial when working with large sequences, as it minimizes the risk of running into memory constraints.

// #### Conclusion

// Overall, the provided solution is better because it combines efficiency, simplicity, and lower memory usage. It effectively checks the condition of "some but not all" in a clear and concise manner, making it a robust choice for this problem.