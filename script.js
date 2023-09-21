// //Initialization:
// Set n to the length of the array (arr).
// Then start iterating from the second element (i = 1) since the first element is considered already sorted.

// // Creat an Insertion Sort algorithm pseudocode 
// InsertionSort(arr):
//   n = length of arr
//   for i from 1 to n-1:
//     key = arr[i]
//     j = i - 1

//     // Move elements of arr[0..i-1], that are greater than key,
//     // to one position ahead of their current position
//     while j >= 0 and arr[j] > key:
//       arr[j + 1] = arr[j]
//       j = j - 1

//     arr[j + 1] = key


//Insertion sort algorithm using Javascript
// Initialize the two(2) counters we'd be making use of thus; (i) and (j): 
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;

        //Move the elements of arr[0..i-1], which is represented as arr[j] greater than the key (i.e arr[j] > key) to one position ahead of their current position 
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
} 


// Illustration test
const arr = [10, 9, 24, 38, 16, 17, 2, 6, 22];
console.log("original array:", arr);
insertionSort(arr);
console.log("sorted array:", arr)