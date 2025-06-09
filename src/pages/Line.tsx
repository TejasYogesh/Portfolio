import React from 'react'
import { motion } from 'framer-motion'
// import Rating from '@/components/Rating'
// import '../cssFiles/Events.css'
import './Line.css'
import codeImg from '../assets/Images/code4.jpg'

const Events = () => {
    return (

        <div>

            <div className='bg-black'>


                <div>





                    <div className='whats text-white' style={{
                        backgroundImage: `linear-gradient(to bottom, rgb(0,0,0), transparent), url(${codeImg})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                        <p className='text-[50px] lg:text-[100px] font-bold p-10'>My <span className='text-amber-300'>Projects:</span></p>
                        <div className='newEvents px-10'>
                            <p className='text-[40px] lg:text-[90px] font-bold text-blue-400'>01.</p>
                            <p className='text-[30px] lg:text-[50px] font-bold'>Lapify<span className='text-blue-400'>.com</span></p>
                            <p className='text-[10px] lg:text-[30px] font-bold'>Node.js | React.js | MongoDB</p>
                            <p className='justify-center'>Crackathon is an exciting, fast-paced


                                event where tech enthusiasts, engineers, and problem-solvers compete
                                to create innovative solutions. This high-energy competition challenges
                                participants to think quickly and creatively under intense pressure, demanding
                                determination and collaboration. As they race against the clock, participants
                                push their limits, developing bold and groundbreaking
                                ideas that showcase their skills and ingenuity in technology.</p>
                            <button className='my-10 p-5 bg-white text-black  hover:bg-pink-600 hover:text-white'><a href="https://docs.google.com/forms/d/e/1FAIpQLSfrHAzxqx66082mvVCorpkf8WQYBX5HvxdPZjxaiKLZ1Jl3DQ/viewform?usp=sf_link" target='_blank'>Register Now</a></button>
                        </div>

                        <br />
                        <div>
                            <div className='bg-white w-full h-2'></div>
                        </div>
                        {/* <div className='w-[99vw] h-[10px] bg-pink-700 text-center items-center'></div> */}


                        <div className='newEvents2 px-10'>
                            <p className='text-[40px] lg:text-[90px] font-bold text-blue-400'>02.</p>
                            <p className='text-[30px] lg:text-[50px] font-bold'>Pragyatha 2024 using <span className='text-blue-400'>React.js</span></p>
                            <p className='text-[10px] lg:text-[30px] font-bold'>React.js | Framer-motion | CSS</p>
                            <p className='justify-center'>The Git & GitHub Workshop unites

                                visionary developers and creative designers to address real-world challenges
                                . Participants engage in immersive, hands-on sessions to master Git for
                                effective version control and GitHub for seamless collaboration. This
                                dynamic platform fosters creativity, nurtures teamwork, and empowers
                                innovators to transform bold ideas into
                                groundbreaking solutions that can shape the future of the tech industry.</p>
                            <button className='my-10 p-5 bg-white text-black hover:bg-amber-300 hover:text-black'><a href="https://docs.google.com/forms/d/e/1FAIpQLSc5n7rqZ_kdztm4ZUDWLybPtchLIFLn__vsPZCMcx5_RwgaZA/viewform?usp=sf_link" target='_blank'>View in Github</a></button>
                        </div>
                        <br />


                        <div>
                            <div className='bg-white w-full h-2'></div>
                        </div>

                        <div className='newEvents2 px-10'>
                            <p className='text-[40px] lg:text-[90px] font-bold text-blue-400'>03.</p>
                            <p className='text-[30px] lg:text-[50px] font-bold'>Jewelcraft<span className='text-blue-400'>.com</span></p>
                            <p className='text-[10px] lg:text-[30px] font-bold'>React.js | Framer-motion | CSS | Email.js | Razorpay | MongoDB | Node.js</p>
                            <p className='justify-center'>The Git & GitHub Workshop unites

                                visionary developers and creative designers to address real-world challenges
                                . Participants engage in immersive, hands-on sessions to master Git for
                                effective version control and GitHub for seamless collaboration. This
                                dynamic platform fosters creativity, nurtures teamwork, and empowers
                                innovators to transform bold ideas into
                                groundbreaking solutions that can shape the future of the tech industry.</p>
                            <button className='my-10 p-5 bg-white text-black  hover:bg-pink-600 hover:text-white'><a href="https://docs.google.com/forms/d/e/1FAIpQLSc5n7rqZ_kdztm4ZUDWLybPtchLIFLn__vsPZCMcx5_RwgaZA/viewform?usp=sf_link" target='_blank'>Register Now</a></button>
                        </div>







                    </div>





                </div>

            </div>


        </div>
    )
}

export default Events
