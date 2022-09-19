import { FormEvent, useEffect, useState } from "react";

import axios from "axios";

import { Input } from "./Input";

import { DialogClose } from "@radix-ui/react-dialog";
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { GameController } from "phosphor-react";
import { Check } from 'phosphor-react';

interface GameSelect {
  id: string;
  title: string;
}

export function Form() {
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [games, setGames] = useState<GameSelect[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);
  
  async function handleCreatAd(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if (!data.name) {
      alert('Por favor insira as infomações')
      return
    }

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`,
        {
          name: data.name,
          yearsPlaying: Number(data.yearsPlaying),
          discord: data.discord,
          weekDays: weekDays.map(Number),
          hourStart: data.hourStart,
          hourEnd: data.hourEnd,
          useVoiceChannel: useVoiceChannel
        }
      )
      alert('Anúncio criado com sucesso!')
      window.location.reload()
    } catch (err) {
      alert('Erro ao criar anúncio')
      console.log(err)
    }
  }
  
  useEffect(()=> {
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
    .catch(err => console.log(err))
  }, [])

  return(
    <form onSubmit={handleCreatAd} className={'mt-8 flex flex-col gap-4'}>

      <div className={'flex flex-col gap-2'}>
        <label htmlFor={'game'} className={'font-semibold'}>{'Qual o game?'}</label>
        <select
          id={'game'}
          name={'game'}
          placeholder={'Selecione o game que deseja jogar'}
          className={'bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'}
          defaultValue={''}
        >
          <option disabled value="">Selecione o game que deseja jogar</option>
          {games.map(game => {
            return <option key={game.id} value={game.id}>{game.title}</option>
          })}
        </select>
      </div>

      <div className={'flex flex-col gap-2'}>
        <label htmlFor={'name'}>{'Seu nome (ou nickname)'}</label>
        <Input
          key={'name'}
          id={'name'}
          name={'name'}
          type={'text'}
          placeholder={'Como te chamam dentro do game'}
        />
      </div>

      <div className="grid grid-cols-2 gap-6  ">
        <div className={'flex flex-col gap-2'}>
          <label htmlFor={'yearsPlaying'}>{'Joga há quantos anos?'}</label>
          <Input
            key={'yearsPlaying'}
            id={'yearsPlaying'}
            name={'yearsPlaying'}
            type={'number'}
            placeholder={'Tudo bem ser ZERO'}
            min={'0'}
            max={'100'}
          />
        </div>
        <div className={'flex flex-col gap-2'}>
          <label htmlFor={'discord'}>{'Qual seu Discord?'}</label>
          <Input
            key={'discord'}
            type={'text'}
            id={'discord'}
            name={'discord'}
            placeholder={'Usuario#0000'}
          />
        </div>
      </div>

      <div className="Dual flex gap-6">
        <div className='flex flex-col gap-2'>
          <label htmlFor={'weekDays'}>{'Quando costuma jogar?'}</label>
          <ToggleGroup.Root
          id={'weekDays'}
          type={'multiple'} 
          className="grid grid-cols-4 gap-2"
          value={weekDays}
          onValueChange={setWeekDays}
          >
            <ToggleGroup.Item
              value='0'
              title={'Domingo'}
              className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
            >
                D
            </ToggleGroup.Item>
            
            <ToggleGroup.Item
              value='1'
              title={'Segunda'}
              className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
            >
                S
            </ToggleGroup.Item>

            <ToggleGroup.Item
              value='2'
              title={'Terça'}
              className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
            >
                T
            </ToggleGroup.Item>

            <ToggleGroup.Item
              value='3'
              title={'Quarta'}
              className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
            >
                Q
            </ToggleGroup.Item>

            <ToggleGroup.Item
              value='4'
              title={'Quinta'}
              className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
            >
                Q
            </ToggleGroup.Item>

            <ToggleGroup.Item 
              value='5'
              title={'Sexta'}
              className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
            >
                S
            </ToggleGroup.Item>

            <ToggleGroup.Item
              value='6'
              title={'Sábado'}
              className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
            >
                S
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </div>
        <div className='flex flex-col gap-2 flex-1'>
          <label htmlFor={'hourStart'}>{'Qual hoŕario do dia?'}</label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              key={'hourStart'}
              type={'time'}
              name={'hourStart'} 
              id={'hourStart'}
              placeholder={'De'}
            />
            <Input
              key={'hourEnd'}
              type={'time'}
              name={'hourEnd'} 
              id={'hourEnd'}
              placeholder={'Até'}
            />
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2 text-sm">
        <Checkbox.Root
          id={'checkVoice'}
          checked={useVoiceChannel}
          className={'w-6 h-6 p-1 rounded bg-zinc-900'}
          onCheckedChange={(checked) => {
            if (checked === true) {
              setUseVoiceChannel(true)
            } else {
              setUseVoiceChannel(false)
            }
          }}
        >
        <Checkbox.Indicator>
          <Check className={'w-4 h-4 text-emerald-400'} />
        </Checkbox.Indicator>
      </Checkbox.Root>
        <label htmlFor="checkVoice">Costumo me conectar ao chat de voz</label>
      </div>

      <footer className={"mt-4 flex justify-end gap-4"}>
        <DialogClose
          type={'button'}
          className={"bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600 transition-colors"}
        >
          Cancelar
        </DialogClose>
        <button
          type="submit"
          className={"bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 transition-colors"}
        >
          <GameController size={24} />
          Encontrar duo
        </button>
      </footer>

    </form>
  );
}