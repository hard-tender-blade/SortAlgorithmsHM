const mergeSort = (arr: number[]) => {
    //? merge two sorted subarrays
    const merge = (arr: number[], left: number, middle: number, right: number) => {
        //? Create temporary arrays for left and right subarrays
        const leftArr = arr.slice(left, middle + 1)
        const rightArr = arr.slice(middle + 1, right + 1)
        let i = 0
        let y = 0
        let k = left
        //? Merge two subarrays into original array (in sorted order)
        while (i < leftArr.length && y < rightArr.length) {
            if (leftArr[i] <= rightArr[y]) {
                arr[k] = leftArr[i]
                i++
            } else {
                arr[k] = rightArr[y]
                y++
            }
            k++
        }

        //? copy remaining elements of leftArr, if any exist
        while (i < leftArr.length) {
            arr[k] = leftArr[i]
            i++
            k++
        }

        //? copy remaining elements of rightArr, if any exist
        while (y < rightArr.length) {
            arr[k] = rightArr[y]
            y++
            k++
        }
    }

    //? Run merge sort recursively
    const sort = (arr: number[], left: number, right: number) => {
        if (left < right) {
            const middle = Math.floor((left + right) / 2)
            //? sort left subarray
            sort(arr, left, middle)
            //? sort right subarray
            sort(arr, middle + 1, right)
            //? Merge the sorted subarrays
            merge(arr, left, middle, right)
        }
    }

    //? Call the mergeSort function to sort the entire array
    sort(arr, 0, arr.length - 1)
}
export default mergeSort