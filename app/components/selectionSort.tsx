'use client'
import React, { useState } from 'react'
import scripts from '../scripts/scripts'
import SortRunExample from './sortRunExample'

export default function SelectionSort() {
    //# Sort algorithm
    const sortName = '💅 Selection sort O(n^2)'
    const imgName = 'selectionSort.jpg'
    const { shortArr, mediumArr, longArr } = scripts.createArraysWithRandomNumbers()

    //# Run the sort algorithm
    const [shortTime, setShortTime] = useState<number | null>(null)
    const [mediumTime, setMediumTime] = useState<number | null>(null)
    const [longTime, setLongTime] = useState<number | null>(null)

    const run = () => {
        const shortArrTime = scripts.timeLogger(shortArr, sortName, () => {
            scripts.selectionSort(shortArr)
        })
        setShortTime(shortArrTime)
        const mediumArrTime = scripts.timeLogger(mediumArr, sortName, () => {
            scripts.selectionSort(mediumArr)
        })
        setMediumTime(mediumArrTime)
        const longArrTime = scripts.timeLogger(longArr, sortName, () => {
            scripts.selectionSort(longArr)
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
        </div>
    )
}
