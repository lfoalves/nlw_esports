import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import './styles/main.css';
import logoImg from './assets/logo.svg';

import { GamerBanner } from './components/GamerBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAddModal } from './components/CreateAdModal';
import axios from 'axios';

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
    axios('http://localhost:3333/games').then(response => setGames(response.data))
    .catch(err => console.log(err))
  }, [])
  
  return (
    <div className='max-w-[1344px] mx-auto w-[90%] flex flex-col items-center my-20'>
      <img src={logoImg} alt="Logo NLW eSports" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='w-full grid grid-cols-2 gap-4 mt-16 md:grid-cols-3 md:gap-6 lg:grid-cols-6 '
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

        <CreateAddModal />
      </Dialog.Root>

    </div>
  )
}
