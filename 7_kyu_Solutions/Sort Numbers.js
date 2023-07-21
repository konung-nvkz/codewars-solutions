/*Sort Numbers
DESCRIPTION:
Finish the solution so that it sorts the passed in array of numbers. 
If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

function solution(arr) {
    if (arr==null) return [];
    return arr.sort((a, b) => a - b);
}

console.log(solution([1, 2, 10, 50, 5])); // should return [1,2,5,10,50]
console.log(solution(null)); // should return []

//below are variaants with different kinda of sort
//1. Пузырьковая сортировка (Bubble sort):

function bubbleSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n-1; i++) {
        for (var j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}


//2. Сортировка выбором (Selection sort):

function selectionSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n-1; i++) {
        var minIdx = i;
        for (var j = i+1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}


//3. Сортировка вставками (Insertion sort):

function insertionSort(arr) {
    var n = arr.length;
    for (var i = 1; i < n; i++) {
        var key = arr[i];
        var j = i-1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}


//4. Быстрая сортировка (Quick sort):

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[Math.floor(arr.length/2)];
    var left = [];
    var equal = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] === pivot) {
            equal.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(equal, quickSort(right));
}


//5. Сортировка слиянием (Merge sort):

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var mid = Math.floor(arr.length/2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];
    var i = 0;
    var j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}


//6. Сортировка Шелла (Shell sort):

function shellSort(arr) {
    var n = arr.length;
    var gap = Math.floor(n/2);
    while (gap > 0) {
        for (var i = gap; i < n; i++) {
            var temp = arr[i];
            var j = i;
            while (j >= gap && arr[j-gap] > temp) {
                arr[j] = arr[j-gap];
                j -= gap;
            }
            arr[j] = temp;
        }
        gap = Math.floor(gap/2);
    }
    return arr;
}


//7. Сортировка кучей (Heap sort):

function heapSort(arr) {
    var n = arr.length;
    for (var i = Math.floor(n/2)-1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    for (var i = n-1; i > 0; i--) {
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
    return arr;
}

function heapify(arr, n, i) {
    var largest = i;
    var left = 2*i + 1;
    var right = 2*i + 2;
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        var temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}
