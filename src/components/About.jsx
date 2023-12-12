import React from 'react';
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa6';
import { RiJavascriptFill } from "react-icons/ri";
const About = () => {
    return (
        <>
          <p className='text-5xl font-bold w-3/4 mx-auto'>About me</p>
            <section className='w-full mx-auto'>
                <section className='grid-flow-row lg:grid grid-cols-7 gap-10 w-3/4 mx-auto mt-10'>
                    <div className=" col-span-2">
                        <div className=" rounded-full">
                            <img src="https://i.ibb.co/mFGFSBG/profile.jpg" className='lg:rounded-e-full' />
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl border col-span-5">
                        <div className="card-body">
                            <section className='flex flex-col lg:flex-row justify-center items-center'>
                                <div className='lg:w-1/2'>
                                    <p>Hi, I am Ashikur Rahman, Frontend developer, is on a journey to master the MERN stack.
                                        💻 Currently I am working on projects using technology like HTML, CSS, and JavaScript and
                                        wield the power of React.js for dynamic front-end experiences.
                                        On the server side, I thrive in Express.js and dive deep into MongoDB for data wizardry.</p>
                                </div>
                                <div>
                                    <p className='text-2xl font-bold flex items-center'><FaHtml5></FaHtml5> HTML</p>
                                    <progress className="progress progress-success w-56" value="90" max="100"></progress>
                                    <p className='text-2xl font-bold flex items-center'><FaCss3></FaCss3> CSS</p>
                                    <progress className="progress progress-success w-56" value="80" max="100"></progress>
                                    <p className='text-2xl font-bold flex items-center'><RiJavascriptFill /> JavaScript</p>
                                    <progress className="progress progress-success w-56" value="80" max="100"></progress>
                                    <p className='text-2xl font-bold flex items-center'><FaReact /> React</p>
                                    <progress className="progress progress-success w-56" value="70" max="100"></progress>
                                </div>
                            </section>
                        </div>
                    </div>

                </section>

           


            </section>  
        </>
    );
};

export default About;