const bubbleSort = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++) {
        for (let y = i + 1; y < arr.length; y++) {
            if (arr[i] > arr[y]) {
                let temp = arr[i]
                arr[i] = arr[y]
                arr[y] = temp
            }
        }
    }
}
export default bubbleSort