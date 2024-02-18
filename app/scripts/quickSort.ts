const quickSort = (arr: number[]) => {
    //? Split the array into 2 subarrays
    const split = (arr: number[], low: number, high: number) => {
        const pivot = arr[high]
        let i = low - 1
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        let temp = arr[i + 1]
        arr[i + 1] = arr[high]
        arr[high] = temp
        return i + 1
    }

    //? Run quick sort
    const sort = (arr: number[], low: number, high: number) => {
        if (low < high) {
            const pivot = split(arr, low, high)
            sort(arr, low, pivot - 1)
            sort(arr, pivot + 1, high)
        }
    }

    sort(arr, 0, arr.length - 1)
}
export default quickSort