'use client'
import React, { useState } from 'react'
import scripts from '../scripts/scripts'
import SortRunExample from './sortRunExample'

export default function HeapSort() {
    //# Sort algorithm
    const sortName = '🏔️ Heap sort O(n log n)'
    const imgName = 'heapSort.jpg'
    const url =
        'https://github.com/hard-tender-blade/SortAlgorithmsHM/blob/main/app/scripts/heapSort.ts'
    const { shortArr, mediumArr, longArr } = scripts.createArraysWithRandomNumbers()

    //# Run the sort algorithm
    const [shortTime, setShortTime] = useState<number | null>(null)
    const [mediumTime, setMediumTime] = useState<number | null>(null)
    const [longTime, setLongTime] = useState<number | null>(null)

    const run = () => {
        const shortArrTime = scripts.timeLogger(shortArr, sortName, () => {
            scripts.heapSort(shortArr)
        })
        setShortTime(shortArrTime)
        const mediumArrTime = scripts.timeLogger(mediumArr, sortName, () => {
            scripts.heapSort(mediumArr)
        })
        setMediumTime(mediumArrTime)
        const longArrTime = scripts.timeLogger(longArr, sortName, () => {
            scripts.heapSort(longArr)
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
            <h2 className="text-2xl font-medium">Cool visualization</h2>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/mgUiY8CVDhU?si=dhjiN2JvSyTi4SEu"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>

            <div>
                <h1 className="mb-4 text-2xl font-bold">Sorting Algorithm Comparison</h1>
                <p className="mb-2">
                    <strong>Heap sort:</strong> In-place, requires no extra space. Simpler
                    to implement, good for beginners. Unstable, may rearrange equal
                    elements.
                </p>
                <p className="mb-2">
                    <strong>Merge sort:</strong> Requires extra space for temporary
                    storage. More complex implementation, but potentially faster in
                    practice. Stable, maintains order of equal elements.
                </p>
                <p className="mb-2">
                    <strong>Choosing between them:</strong> If extra space is limited, use
                    heap sort. If stability is crucial and performance is a concern,
                    consider merge sort. For most cases, the performance difference is
                    negligible, choose based on simplicity or specific requirements.
                </p>
                <p className="mb-2">
                    Note: This is a comparison of sorting algorithms based on their
                    characteristics.
                </p>
            </div>
        </div>
    )
}
