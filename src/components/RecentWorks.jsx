import React from 'react';
import { Link } from 'react-router-dom';

const RecentWorks = () => {
    return (
        <>
            <section className=''>
                <p className='text-5xl font-bold w-3/4 mx-auto mt-10'>Recent Projects</p>

                <section className='w-3/4 mx-auto grid-flow-row lg:grid  grid-cols-3  gap-10 mt-10'>
                    <div className=''>
                        <div className="card card-compact border  bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/1JqhMB4/P1.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">Job-Bridge</h2>
                                <p>A solution for the unemployed people. We provide jobs in various category</p>
                                <div className="card-actions justify-end">
                                    <Link target="_blank" to="https://jobbridge-d7a31.web.app">
                                        <button className="btn btn-primary">Live Link</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className="border card card-compact  bg-black text-white shadow-xl">
                            <figure><img src="https://i.ibb.co/G5v1x7J/P2.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">Shine-Event</h2>
                                <p>A solution for the upcoming function. We organize different functions for you.</p>
                                <div className="card-actions justify-end">
                                    <Link target='_blank' to="https://shine-events-6ef5b.web.app">
                                        <button className="btn btn-primary">Live Link</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className="card card-compact  bg-base-100 shadow-xl border">
                            <figure><img src="https://i.ibb.co/rbSsxfh/P3.png" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold">WatchList</h2>
                                <p>A website you can trust on. We provide all genere of movies tv shows etc.</p>
                                <div className="card-actions justify-end">
                                    <Link to="https://watchlist-8b17d.web.app" target='_blank'>
                                        <button className="btn btn-primary">Live Link</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </section>
        </>
    );
};

export default RecentWorks;