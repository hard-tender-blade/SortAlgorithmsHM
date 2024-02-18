'use client'
import React, { useState } from 'react'
import scripts from '../scripts/scripts'
import SortRunExample from './sortRunExample'

export default function MergeSort() {
    //# Sort algorithm
    const sortName = '👨‍❤️‍💋‍👨 Merge sort O(n log n)'
    const imgName = 'mergeSort.jpg'
    const url =
        'https://github.com/hard-tender-blade/SortAlgorithmsHM/blob/main/app/scripts/mergeSort.ts'
    const { shortArr, mediumArr, longArr } = scripts.createArraysWithRandomNumbers()

    //# Run the sort algorithm
    const [shortTime, setShortTime] = useState<number | null>(null)
    const [mediumTime, setMediumTime] = useState<number | null>(null)
    const [longTime, setLongTime] = useState<number | null>(null)

    const run = () => {
        const shortArrTime = scripts.timeLogger(shortArr, sortName, () => {
            scripts.mergeSort(shortArr)
        })
        setShortTime(shortArrTime)
        const mediumArrTime = scripts.timeLogger(mediumArr, sortName, () => {
            scripts.mergeSort(mediumArr)
        })
        setMediumTime(mediumArrTime)
        const longArrTime = scripts.timeLogger(longArr, sortName, () => {
            scripts.mergeSort(longArr)
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
            <a href={url} className="text-blue-500 underline">
                Go to git
            </a>
            <img src={imgName} className="rounded" />

            <div className="mt-5 flex flex-col gap-4">
                <div>
                    <p className="font-bold">Time Complexity:</p>
                    <p>
                        Bubble, Selection, Insertion: O(n^2) in worst case, slower for
                        large datasets.
                        <br />
                        Merge sort: O(n log n), always efficient, grows slower than O(n^2)
                        with larger datasets.
                    </p>
                </div>
                <div>
                    <p className="font-bold">Space Complexity:</p>
                    <p>
                        Bubble, Selection, Insertion: O(1) in place.
                        <br />
                        Merge sort: O(n) additional space for merging.
                    </p>
                </div>
                <div>
                    <p className="font-bold">Overall:</p>
                    <ul className="flex list-disc flex-col gap-2 pl-5">
                        <li>
                            For practical use, Merge sort is often preferred due to its
                            better performance for most datasets.
                        </li>
                        <li>
                            For small datasets or understanding concepts, Insertion sort
                            can be a good choice.
                        </li>
                        <li>
                            Bubble sort and Selection sort are generally not recommended
                            for real-world applications due to their slower performance.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
