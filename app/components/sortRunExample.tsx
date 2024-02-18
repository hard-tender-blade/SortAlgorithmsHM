import React from 'react'

interface Props {
    arr: number[]
    time: number | null
}

export default function SortRunExample(p: Props) {
    return (
        <div className="flex flex-col items-center">
            <h2>{p.arr.length / 1000}k</h2>
            <div
                className={`rounded bg-slate-500`}
                style={{
                    height: p.arr.length / 500,
                    width: p.arr.length / 500,
                }}
            />
            <p>
                {p.time === null
                    ? '???'
                    : `${p.time} ms, (${Math.round(p.time / 1000)} s)`}
            </p>
        </div>
    )
}
