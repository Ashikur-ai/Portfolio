import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url()' }}>
            <div className="bg-opacity-10"></div>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <div className="avatar">
                        <div className="w-52 rounded-full">
                            <img src="https://i.ibb.co/SfPYD6T/68597819.jpg" />
                        </div>
                    </div>
                    <p className="mb-3 text-5xl font-bold text-blue-700">
                        Ashikur Rahman
                    </p>
                    <p className='mb-5 font-bold'>Frontend Developer</p>
                    <div className='flex text-center items-center justify-center gap-10 mb-5 text-4xl'>
                        <Link to="https://www.linkedin.com/in/ashikur-rahman-777b64275">
                            <FaLinkedin></FaLinkedin>
                        </Link>

                        <Link to="https://www.facebook.com/profile.php?id=100031241947508">
                            <FaFacebook></FaFacebook>
                        </Link>

                        <Link to="https://github.com/Ashikur-ai">
                            <FaGithub></FaGithub>
                        </Link>
                    </div>

                    <Link
                        to="https://drive.google.com/file/d/13xjpeB3pqBxFYzuu_IcZdC_M2GWw8I_L/view?usp=sharing"
                    >
                        <button className="btn btn-primary">Download Resume</button>

                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Banner;