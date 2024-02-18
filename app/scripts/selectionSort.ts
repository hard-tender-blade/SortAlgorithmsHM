const selectionSort = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let y = i + 1; y < arr.length; y++) {
            if (arr[y] < arr[min]) {
                min = y
            }
        }

        if (i !== min) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
}
export default selectionSort