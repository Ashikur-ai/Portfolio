import React from 'react';
import { GrUserExpert } from "react-icons/gr";


const OtherActivities = () => {
    return (
        <>
            <p className='text-5xl font-bold w-3/4 mx-auto mt-10'>Other Experiences</p>
            <section className='w-full mx-auto'>
                <section className='grid-flow-row lg:grid grid-cols-8 gap-10 w-3/4 mx-auto mt-10'>
                    <div className="card bg-base-100 shadow-xl border col-span-4">
                        <div className="card-body">
                            <section className='flex flex-col lg:flex-row justify-center items-center'>
                                <p className='text-4xl'><GrUserExpert />
                                </p>
                                <div className='lg:w-3/4'>
                                    <p className='font-bold'>Computer & Programming Club</p>
                                    <p>Daffodil International University</p>
                                    <p>CPC works for student's development process and encourages their skills sets. I have
                                        worked as an Executive Member and I organized many events as well.
                                    </p>
                                    <p>2021-2023</p>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="card bg-black text-white shadow-xl border col-span-4">
                        <div className="card-body">
                            <section className='flex flex-col lg:flex-row justify-center items-center'>
                                <p className='text-4xl'><GrUserExpert />
                                </p>
                                <div className='lg:w-3/4'>
                                    <p className='font-bold'>DIU Voluntary Service Club</p>
                                    <p>Voluntary Club strive to develop skills, promote good deeds or improve people's lives.</p>
                                    <p>2021-2023</p>
                                </div>
                            </section>
                        </div>
                    </div>

                    


                </section>




            </section>
        </>
    );
};

export default OtherActivities;