
import './App.css'
// import ScrollVelocity from './components/ui/Scroll';
import ScrollLinked from './components/ui/Down';
// import LetterGlitch from './components/ui/Glitch';
import { Graphic } from './components/ui/Graphic';
import { useRef } from 'react'
// import { useInView } from 'framer-motion'
// import Come from './pages/Come';
import Dot from './components/ui/Dot';
import Line from './pages/Line'
import First from './pages/First';
function App() {
  const fadeRef = useRef(null)
  // const isInView = useInView(fadeRef, { once: true })


  return (
    <>
    <ScrollLinked/>
    
      <div className='main text-white bg-black'>
        <First />
        {/* <div className='h-[100vh]'>
          <h1 className='text-[100px] font-bold p-4'>Graphic Design Skills</h1>
          <div className='grid grid-cols-2'>
            <div>
              <img src="GmailEvolution.png" alt="" />
            </div>
            <div></div>
          </div>
        </div> */}

        {/* <Come /> */}
        <div className=''>
          <p className='text-6xl p-10 font-bold'>Graphic Designing</p>
          <div className='grid grid-cols-2'>
            <div className='m-10'>
              <img src="GmailEvolution.png" alt="" className='rounded-4xl' />
            </div>
            <div className='grid grid-rows-2 m-10'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <img
                    src="7.jpg"
                    alt=""
                    className='rounded-4xl w-80 h-100 object-cover'
                  />
                </div>
                <div>
                  <img
                    src="Moblie-DevelopMent.jpg"
                    alt=""
                    className='rounded-4xl w-80 h-100 object-cover'
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <img
                    src="Boy2.jpg"
                    alt=""
                    className='rounded-4xl w-80 h-100 object-cover'
                  />
                </div>
                <div>
                  <img
                    src="7.jpg"
                    alt=""
                    className='rounded-4xl w-80 h-100 object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className='text-[50px] font-bold p-10'>Video Editing Skills | Brand Representation</h1>
        <div className="flex justify-center items-center p-4">
          <div className="shadow-2xl rounded-lg overflow-hidden">
            <video
              src="/Reel01.mp4"
              autoPlay
              muted
              loop
              className="w-[1400px] max-w-full rounded-3xl transition-all duration-300 ease-in-out hover:scale-140"
              style={{
                boxShadow: '0 0 60px 10px rgba(0,0,0,0.7) inset'
              }}
            />
          </div>
        </div>


        <br />

        <h1 className='text-6xl p-10 font-bold'>
          Work Samples | <span className='text-amber-300'>Freelancing</span>
        </h1>
        <div className="flex justify-center items-center p-10">
          <div className="shadow-2xl rounded-lg overflow-hidden">
            <div className='grid grid-cols-6 gap-8'>
              <video
                src="/6thReel01.mp4"
                // controls
                autoPlay
                muted
                loop
                className="w-[300px] h-[60vh] max-w-full rounded-8xl border-radius:50% transition-all duration-300 ease-in-out hover:scale-120"
                style={{
                  boxShadow: '0 0 60px 10px rgba(0,0,0,0.7) inset '
                }}
              />
              <video
                src="/4thReel.mp4"
                // controls
                autoPlay
                muted
                loop
                className="w-[300px] h-[60vh] max-w-full rounded-2xl transition-all duration-300 ease-in-out hover:scale-120"
                style={{
                  boxShadow: '0 0 60px 10px rgba(0,0,0,0.7) inset border-radius:50% transition-all duration-300 ease-in-out hover:scale-120'
                }}
              />
              <video
                src="/5thReel_5.mp4"
                // controls
                autoPlay
                muted
                loop
                className="w-[300px] h-[60vh] max-w-full rounded-8xl transition-all duration-300 ease-in-out hover:scale-120"
                style={{
                  boxShadow: '0 0 60px 10px rgba(0,0,0,0.7) inset border-radius:50% transition-all duration-300 ease-in-out hover:scale-120'
                }}
              />
              <video
                src="/2ndReelProfessors.mp4"
                // controls
                autoPlay
                muted
                loop
                className="w-[300px] h-[60vh] max-w-full rounded-8xl transition-all duration-300 ease-in-out hover:scale-120"
                style={{
                  boxShadow: '0 0 60px 10px rgba(0,0,0,0.7) inset border-radius:50% '
                }}
              />
              <video
                src="/main_2.mp4"
                // controls
                autoPlay
                muted
                loop
                className="w-[300px] h-[60vh] max-w-full rounded-8xl transition-all duration-300 ease-in-out hover:scale-120"
                style={{
                  boxShadow: '0 0 60px 10px rgba(0,0,0,0.7) inset border-radius:50% transition-all duration-300 ease-in-out hover:scale-120'
                }}
              />
              <video
                src="/2.mp4"
                // controls
                autoPlay
                muted
                loop
                className="w-[300px] h-[60vh] max-w-full rounded-8xl transition-all duration-300 ease-in-out hover:scale-120"
                style={{
                  boxShadow: '0 0 60px 10px rgba(0,0,0,0.7) inset border-radius:50% transition-all duration-300 ease-in-out hover:scale-120'
                }}
              />

            </div>

          </div>
        </div>
        {/* <div className='border-2 border-dashed border-amber-400'></div> */}
        {/* Fade-in section */}
        <div className='p-10'>

          <Graphic />
        </div>
        <Dot/>
        <div>
          <Line/>
        </div>

      </div>
    </>
  )
}

export default App
