const insertionSort = (arr: number[]) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let y = i - 1
        while (y >= 0 && current < arr[y]) {
            arr[y + 1] = arr[y]
            y--
        }
        arr[y + 1] = current
    }
}
export default insertionSort