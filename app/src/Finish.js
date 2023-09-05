import React from 'react'

export default function Finish({Count,Correct}) {
  return (
    <>
        <div className='Finish_div bg-primary'>
            <div className='Inside'>
                <h2>Wrong: {Count-Correct}</h2>
                <h2>Correct: {Correct}</h2>
            </div>
        </div>
    </>
  )
}
