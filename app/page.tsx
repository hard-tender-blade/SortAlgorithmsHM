import Image from 'next/image'
import BubbleSort from './components/bubbleSort'
import SelectionSort from './components/selectionSort'
import InsertionSort from './components/insertionSort'
import MergeSort from './components/mergeSort'
import HeapSort from './components/heapSort'
import QuickSort from './components/quickSort'

export default function Home() {
    return (
        <main className="flex flex-col gap-40 p-10">
            <BubbleSort />
            <SelectionSort />
            <InsertionSort />
            <MergeSort />
            <HeapSort />
            <QuickSort />
        </main>
    )
}
