'use client'
import React, { useState } from 'react'
import scripts from '../scripts/scripts'
import SortRunExample from './sortRunExample'

export default function InsertionSort() {
    //# Sort algorithm
    const sortName = '📥 Insertion sort O(n^2)'
    const imgName = 'insertionSort.jpg'
    const { shortArr, mediumArr, longArr } = scripts.createArraysWithRandomNumbers()

    //# Run the sort algorithm
    const [shortTime, setShortTime] = useState<number | null>(null)
    const [mediumTime, setMediumTime] = useState<number | null>(null)
    const [longTime, setLongTime] = useState<number | null>(null)

    const run = () => {
        const shortArrTime = scripts.timeLogger(shortArr, sortName, () => {
            scripts.insertionSort(shortArr)
        })
        setShortTime(shortArrTime)
        const mediumArrTime = scripts.timeLogger(mediumArr, sortName, () => {
            scripts.insertionSort(mediumArr)
        })
        setMediumTime(mediumArrTime)
        const longArrTime = scripts.timeLogger(longArr, sortName, () => {
            scripts.insertionSort(longArr)
        })
        setLongTime(longArrTime)
    }

    return (
        <div className="flex w-2/3 flex-col gap-5">
            <h1 className="text-4xl font-medium">{sortName}</h1>
            <button className="rounded bg-slate-300 p-3" onClick={run}>
                Run
            </button>

            <div className="grid grid-cols-3">
                <SortRunExample arr={shortArr} time={shortTime} />
                <SortRunExample arr={mediumArr} time={mediumTime} />
                <SortRunExample arr={longArr} time={longTime} />
            </div>

            <h2 className="text-2xl font-medium">Implementation</h2>
            <img src={imgName} className="rounded" />

            <div className="mt-5">
                <h2 className="text-xl font-bold">Key Differences:</h2>
                <ul className="ml-5 mt-2 list-disc">
                    <li>
                        <strong>Insertion Sort:</strong>
                        <ul className="ml-5 mt-2 list-disc">
                            <li>
                                Focuses on building a sorted sub-array incrementally, with
                                each new element "inserted" in its correct position.
                            </li>
                            <li>
                                Only shifts elements as needed to make space for the
                                insertion.
                            </li>
                            <li>
                                Utilizes fewer comparisons for partially sorted or almost
                                sorted data.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Bubble Sort:</strong>
                        <ul className="ml-5 mt-2 list-disc">
                            <li>
                                Repeatedly iterates through the array, comparing adjacent
                                elements and swapping them if they're in the wrong order.
                            </li>
                            <li>
                                Makes many unnecessary comparisons in later passes when
                                most elements are already sorted.
                            </li>
                            <li>
                                Performs swaps even when no swaps are required, wasting
                                effort.
                            </li>
                        </ul>
                    </li>
                </ul>
                <h2 className="mt-5 text-xl font-bold">Performance Comparison:</h2>
                <p className="mt-2">
                    In practice, insertion sort typically outperforms bubble sort for
                    sorting random data, unless the data happens to be:
                </p>
                <ul className="ml-5 mt-2 list-disc">
                    <li>
                        Pre-sorted (or nearly sorted): In this case, bubble sort's
                        best-case scenario might come close to insertion sort's, but
                        insertion sort is usually still slightly faster.
                    </li>
                    <li>
                        Very small lists: For lists with just a few elements, sorting
                        overhead often overshadows the intrinsic differences between
                        algorithms, and bubble sort might occasionally appear faster due
                        to its simpler implementation.
                    </li>
                </ul>
                <h2 className="mt-5 text-xl font-bold">Conclusion:</h2>
                <p className="mt-2">
                    For general sorting of random data, insertion sort is generally the
                    preferred choice over bubble sort due to its lower average time
                    complexity and better performance on partially sorted data. However,
                    understanding the nuances of each algorithm and the potential
                    influence of dataset properties can provide valuable insights for
                    making informed sorting decisions.
                </p>
            </div>
        </div>
    )
}
