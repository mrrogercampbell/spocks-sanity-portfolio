import React from 'react';
import SpockBg from '../assets/spock-bg.jpg'
const Home = () => {
    return (
        <main>
            <img src={SpockBg} alt="Spock holding a cat" className="absolute object-cover w-full h-full" />
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
                <h1 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name'>I am Spock</h1>
            </section>
        </main >
    );
};

export default Home;