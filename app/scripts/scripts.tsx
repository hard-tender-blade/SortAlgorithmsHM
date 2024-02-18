import bubbleSort from './bubbleSort'
import heapSort from './heapSort'
import quickSort from './quickSort'
import selectionSort from './selectionSort'
import insertionSort from './insertionSort'
import mergeSort from './mergeSort'

const createArrWithRandomNumbers = (length: number) => {
    let arr = []
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    return arr
}

const timeLogger = (arr: number[], name: string, func: () => void) => {
    const startTime = new Date()
    func()
    const endTime = new Date()
    const result = endTime.valueOf() - startTime.valueOf()
    console.log(`${name} for arr ${arr.length / 1000}k items long took ${result} ms`)
    console.log(arr)
    return result
}

const createArraysWithRandomNumbers = () => {
    const shortArr = createArrWithRandomNumbers(100)
    const mediumArr = createArrWithRandomNumbers(50000)
    const longArr = createArrWithRandomNumbers(100000)
    return { shortArr, mediumArr, longArr }
}

const scripts = {
    createArraysWithRandomNumbers,
    timeLogger,
    bubbleSort,
    heapSort,
    quickSort,
    selectionSort,
    insertionSort,
    mergeSort,
}
export default scripts
