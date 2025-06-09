import React from 'react'
import './Come.css';
// import { Exmp } from 'react-type-animation';
import ExampleComponent from '@/components/ui/TypeAnimation';
export default function First() {
    return (
        <div className='px-10 py-3 bg-black'>
            {/* <img src="finalScreening.png" alt="" className='rounded-4xl h-[96vh] w-[100vw]' /> */}
              <video
                src="/finalScreening.mp4"
                // controls
                autoPlay
                muted
                // loop
                // className="h-[96vh] w-[150vw]"
                // className=''
                className='rounded-4xl'
                style={{
                  boxShadow: '0 0 60px 10px rgba(0,0,0,0.7) inset'
                }}
              />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-black text-8xl font-bold"><ExampleComponent /></span>
            </div>
        </div>
    )
}
