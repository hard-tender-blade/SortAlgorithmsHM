const heapSort = (arr: number[]) => {
    //? heapify the array
    const heapify = (arr: number[], n: number, i: number) => {
        let largest = i
        let left = 2 * i + 1
        let right = 2 * i + 2

        //? If left child is larger than root
        if (left < n && arr[left] > arr[largest]) {
            largest = left
        }

        //? If right child is larger than largest so far
        if (right < n && arr[right] > arr[largest]) {
            largest = right
        }

        //? If largest is not root
        if (largest !== i) {
            let swap = arr[i]
            arr[i] = arr[largest]
            arr[largest] = swap
            heapify(arr, n, largest)
        }
    }

    //? Run  heap sort
    const sort = (arr: number[]) => {
        let n = arr.length

        //? Build max heap
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i)
        }

        //? Extract elements from heap one by one
        for (let i = n - 1; i > 0; i--) {
            let temp = arr[0]
            arr[0] = arr[i]
            arr[i] = temp
            heapify(arr, i, 0)
        }
    }

    sort(arr)
}

export default heapSort