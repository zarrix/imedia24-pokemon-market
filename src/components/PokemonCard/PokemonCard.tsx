import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IPokemon } from '../../types'

type Props = {
  pokemon: IPokemon
}

const typeIcons: any = {
  'grass': "https://img.icons8.com/color/48/null/grass.png",
  'fire': "https://img.icons8.com/color/48/null/fire-element--v1.png",
  'water': "https://img.icons8.com/color/48/null/water-element.png",
  'bug': "https://img.icons8.com/color/48/null/insect.png",
  'normal': "https://img.icons8.com/color/48/null/superball.png",
  'poison': "https://img.icons8.com/color/48/null/poison.png",
  'electric': "https://img.icons8.com/color/48/null/lightning-bolt.png",
  'ground': "https://img.icons8.com/color/48/null/hills.png",
  'fairy': "https://img.icons8.com/color/48/null/fairy.png",
  'fightig': "https://img.icons8.com/color/48/null/armored-helmet.png",
  'flying': "https://img.icons8.com/color/48/null/wings.png",
  'rock': "https://img.icons8.com/color/48/null/rock.png",
}

function generateRandomColor() {
  const randomNumber = Math.floor(Math.random() * 0xFFFFFF);
  const color = randomNumber.toString(16);
  let randColor = color.padStart(6, '0');
  return `#${randColor.toUpperCase()}30`
}

function PokemonCard({ pokemon }: Props )  {

  const [isModalOpen, setIsModalOpen] = useState(false);
  let [bgColor, setBgColor] = useState(generateRandomColor())


  return (
    <div role="pokemonCard" className='w-full flex flex-col items-center space-y-3'>
      {/* Image */}
      <img
        onClick={() => setIsModalOpen(true)}
        alt={"Pokemon" + pokemon.id}
        className='w-full rounded-xl pt-16 pb-10 px-5 h-72 hover:p-0 hover:cursor-pointer overflow-hidden transition-all ease-in-out delay-100'
        style={{ backgroundColor: bgColor }}
        src={pokemon.img}
      />
      {/* Information */}
      <div className='w-full flex items-center justify-start space-x-2 border-b-2 border-gray-200 border-dashed py-1'>
        <img className='w-6' src="https://img.icons8.com/color/48/000000/pokeball-2.png" alt="Poke" />
        <h1 className='text-left text-md font-semibold font-mono'>{pokemon.name}</h1>
      </div>
      {/* Abilities */}
      <div className='w-full flex items-center justify-start space-x-2'>
        {/* <h1 className='text-gray-500'>Types:</h1> */}
        {pokemon.types.map((type, index: number) =>
          <img key={index} className='w-6' src={typeIcons[type.type.name]} alt='Type'/>
        )}
      </div>

      {/* Modal: Pokemon Details */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsModalOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="button"
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-1 right-1 text-lg font-medium leading-6 text-gray-900 text-right hover:opacity-50 focus:outline-none"
                  >
                    <img src="https://img.icons8.com/color/48/null/cancel--v1.png" alt="Close" />
                  </Dialog.Title>
                  <div className='w-full h-full flex flex-col md:flex-row'>
                    <div className='w-full md:w-[50%] flex flex-col items-center justify-center space-y-3 py-2 md:py-10' style={{ backgroundColor: bgColor }}>
                      <img
                        alt='Modal Pokemon'
                        className={` w-full rounded-xl pt-16 pb-10 px-5 h-72 hover:p-0 overflow-hidden transition-all ease-in-out delay-100`}
                        src={pokemon.img}
                      />
                      <div className='flex items-center justify-start space-x-2 border-b-2 border-gray-500 border-dashed py-1'>
                        <img alt="Poke" className='w-6' src="https://img.icons8.com/color/48/000000/pokeball-2.png" />
                        <h1 className='text-left text-md font-semibold font-mono'>{pokemon.name}</h1>
                      </div>
                      <div className='flex items-center justify-start space-x-2'>
                        {/* <h1 className='text-gray-500'>Types:</h1> */}
                        {pokemon.types.map((type, index: number) =>
                          <img alt='Type' key={index} className='w-6' src={typeIcons[type.type.name]} />
                        )}
                      </div>
                    </div>
                    <div className='w-full md:w-[50%] flex flex-col justify-center p-10 space-y-4'>
                      {pokemon.stats.map((stat, index: number) =>
                        <div key={index}>
                          <div className="flex justify-between mb-1 text-[#BE1A27]">
                            <span className="text-base font-medium">{stat.stat.name}</span>
                            <span className="text-sm font-medium">{stat.base_stat}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className={`bg-[#BE1A27] h-2.5 rounded-full`} style={{ width: stat.base_stat + '%' }}></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>


    </div >
  )
}

export default PokemonCard