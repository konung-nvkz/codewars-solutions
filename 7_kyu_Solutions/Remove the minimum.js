/*Remove the minimum 
DESCRIPTION:
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

function removeSmallest(numbers) {    
    let result = [...numbers]; // first we create a copy of the input array. Initial array isn't changed
        smallest = Math.min(...numbers); // then we find the smallest number in the input array
        smallestIndex = numbers.indexOf(smallest); // after that we get its index
    result.splice(smallestIndex, 1) // remove the smallest number from the copy of the input array
    return result;
};

/*NB
Array.prototype.splice()
Сводка
Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
Синтаксис
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])*/