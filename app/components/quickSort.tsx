'use client'
import React, { useState } from 'react'
import scripts from '../scripts/scripts'
import SortRunExample from './sortRunExample'

export default function QuickSort() {
    //# Sort algorithm
    const sortName = '🏎️ Quick sort O(n log n)'
    const imgName = 'quickSort.jpg'
    const url =
        'https://github.com/hard-tender-blade/SortAlgorithmsHM/blob/main/app/scripts/quick.ts'
    const { shortArr, mediumArr, longArr } = scripts.createArraysWithRandomNumbers()

    //# Run the sort algorithm
    const [shortTime, setShortTime] = useState<number | null>(null)
    const [mediumTime, setMediumTime] = useState<number | null>(null)
    const [longTime, setLongTime] = useState<number | null>(null)

    const run = () => {
        const shortArrTime = scripts.timeLogger(shortArr, sortName, () => {
            scripts.quickSort(shortArr)
        })
        setShortTime(shortArrTime)
        const mediumArrTime = scripts.timeLogger(mediumArr, sortName, () => {
            scripts.quickSort(mediumArr)
        })
        setMediumTime(mediumArrTime)
        const longArrTime = scripts.timeLogger(longArr, sortName, () => {
            scripts.quickSort(longArr)
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
        </div>
    )
}
