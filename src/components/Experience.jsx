import React from 'react';
import { FaGraduationCap } from 'react-icons/fa6';

const Experience = () => {
    return (
        <>
            <p className='text-5xl font-bold w-3/4 mx-auto mt-10'>Academic Experiences</p>
            <section className='w-full mx-auto'>
                <section className='grid-flow-row lg:grid grid-cols-8 gap-10 w-3/4 mx-auto mt-10'>
                    <div className="card bg-base-100 shadow-xl border col-span-4">
                        <div className="card-body">
                            <section className='flex flex-col lg:flex-row justify-center items-center'>
                                <p className='text-4xl'><FaGraduationCap></FaGraduationCap></p>
                                <div className='lg:w-3/4'>
                                    <p>BSc in Computer Science and Engineering</p>
                                    <p>Daffodil International University</p>
                                    <p>Passing Year: 2023</p>
                                    <p>CGPA: 3.94</p>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl border col-span-4">
                        <div className="card-body">
                            <section className='flex flex-col lg:flex-row justify-center items-center'>
                                <p className='text-4xl'><FaGraduationCap></FaGraduationCap></p>
                                <div className='lg:w-3/4'>
                                    <p>H.S.C</p>
                                    <p>Rajshahi Board</p>
                                    <p>Passing Year: 2018</p>
                                    <p>GPA: 5.00</p>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl border col-span-4">
                        <div className="card-body">
                            <section className='flex flex-col lg:flex-row justify-center items-center'>
                                <p className='text-4xl'><FaGraduationCap></FaGraduationCap></p>
                                <div className='lg:w-3/4'>
                                    <p>S.S.C</p>
                                    <p>Rajshahi Board</p>
                                    <p>Passing Year: 2016</p>
                                    <p>GPA: 5.00</p>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl border col-span-4">
                        <div className="card-body">
                            <section className='flex flex-col lg:flex-row justify-center items-center'>
                                <p className='text-4xl'><FaGraduationCap></FaGraduationCap></p>
                                <div className='lg:w-3/4'>
                                    <p>J.S.C</p>
                                    <p>Rajshahi Board</p>
                                    <p>Passing Year: 2013</p>
                                    <p>GPA: 5.00</p>
                                </div>
                            </section>
                        </div>
                    </div>


                </section>




            </section>
        </>
    );
};

export default Experience;