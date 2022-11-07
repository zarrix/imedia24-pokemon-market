import React from 'react'

type Props = {}

const Poster = (props: Props) => {
    return (
        <div className="flex flex-col items-center justify-center p-10 font-mono bg-[url('../public/poster-background.svg')] border-b-2 border-[#BE1A27]">
            {/* Title + Poster */}
            <div className='space-y-5'>
                <div className='space-y-2'>
                    <h1 className='text-4xl md:text-5xl'>PokeMedia</h1>
                    <p className='text-gray-500 text-xl md:text-2xl'>Collect and get new pokemons</p>
                </div>
                <img
                    className='w-96 md:w-[500px]'
                    src="/pokemons.png"
                    alt="Poster"
                />
            </div>

            {/* Card */}
            <div className='bg-white border-2 border-gray-300 rounded p-5 space-y-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 font-semibold font-mono'>
                    <div className='text-left flex space-x-2 items-center'>
                        <img className='w-8 md:w-10' src="https://img.icons8.com/color/48/000000/coins.png" alt='' />
                        <h2 className='text-sm md:text-md'>Buy & sell Pokemom with our community</h2>
                    </div>
                    <div className='text-left flex space-x-1 items-center'>
                        <img className='w-8 md:w-10' src="https://img.icons8.com/color/48/000000/human-torch.png" alt='' />
                        <h2 className='text-sm md:text-md'>Get the most powerful and beatufil pokemons</h2>
                    </div>
                    <div className='text-left flex space-x-1 items-center'>
                        <img className='w-8 md:w-10' src="https://img.icons8.com/color/48/000000/wedding-gift.png" alt='' />
                        <h2 className='text-sm md:text-md'>Buy pokemons and earn rewards</h2>
                    </div>
                    <div className='text-left flex space-x-1 items-center'>
                        <img className='w-8 md:w-10' src="https://img.icons8.com/color/48/000000/pokeball-2.png" alt='' />
                        <h2 className='text-sm md:text-md'>Chase limited and rare editions</h2>
                    </div>
                </div>

                <button className='w-full h-14 bg-[#BE1A27] text-white hover:bg-[#BE1A27]/80 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg px-4 lg:px-5 lg:py-2.5 mr-2 focus:outline-none'>
                    Get your own Pokemon
                </button>
            </div>
        </div>
    )
}

export default Poster