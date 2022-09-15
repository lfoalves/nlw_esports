import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css';
import logoImg from './assets/logo.svg';

import { GamerBanner } from './components/GamerBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { Form } from './components/Form/Form';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export function App() {
  const [games, setGames] = useState<Game[]>([])
  useEffect(()=> {
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div className='max-w-[1344px] mx-auto w-[90%] flex flex-col items-center my-20'>
      <img src={logoImg} alt="Logo NLW eSports" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid gap-6 mt-16 md:grid-cols-2 lg:grid-cols-6'
      >
        {
          games.map(game => {
            return(
              <GamerBanner 
                key={game.id}
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game._count.ads}
              />
            )
          })
        }
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

          <Dialog.Content className='fixed bg-[#242634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[498px] shadow-lg shadow-black'>
            <Dialog.Title className='text-3xl text-white font-black'>
              Publique um anúncio
            </Dialog.Title>
              
              <Form />

          </Dialog.Content>

        </Dialog.Portal>
      </Dialog.Root>

    </div>
  )
}
