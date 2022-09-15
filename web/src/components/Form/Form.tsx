import { GameController } from "phosphor-react";
import { Input } from "./Input";
import { DialogClose } from "@radix-ui/react-dialog";

import '../../styles/form.css';

export function Form() {
  return(
    <form action="#" className={'mt-8 flex flex-col gap-4'}>

      <div className={'flex flex-col gap-2'}>
        <label htmlFor={'game'} className={'font-semibold'}>{'Qual o game?'}</label>
        <Input
          key={'game'}
          id={'game'}
          type={'text'}
          placeholder={'Selecione o game que deseja jogar'}
        />
      </div>

      <div className={'flex flex-col gap-2'}>
        <label htmlFor={'name'}>{'Seu nome (ou nickname)'}</label>
        <Input
          key={'name'}
          id={'name'}
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
            name="" 
            id={'discord'}
            placeholder={'Usuario#0000'}
          />
        </div>
      </div>

      <div className="Dual flex gap-6">
        <div className='flex flex-col gap-2'>
          <label htmlFor={'weekDays'}>{'Quando costuma jogar?'}</label>

          <div className="grid grid-cols-4 gap-2">
            <button 
              title={'Domingo'}
              className={'w-8 h-8 rounded bg-zinc-900'}
            >
                D
            </button>
            <button 
              title={'Segunda'}
              className={'w-8 h-8 rounded bg-zinc-900'}
            >
                S
            </button>
            <button 
              title={'Terça'}
              className={'w-8 h-8 rounded bg-zinc-900'}
            >
                T
            </button>
            <button 
              title={'Quarta'}
              className={'w-8 h-8 rounded bg-zinc-900'}
            >
                Q
            </button>
            <button 
              title={'Quinta'}
              className={'w-8 h-8 rounded bg-zinc-900'}
            >
                Q
            </button>
            <button 
              title={'Sexta'}
              className={'w-8 h-8 rounded bg-zinc-900'}
            >
                S
            </button>
            <button 
              title={'Sábado'}
              className={'w-8 h-8 rounded bg-zinc-900'}
            >
                S
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-2 flex-1'>
          <label htmlFor={'hourStart'}>{'Qual hoŕario do dia?'}</label>
          <div className="grid grid-cols-2 gap-2">
            <Input
              key={'hourStart'}
              type={'time'}
              name="" 
              id={'hourStart'}
              placeholder={'De'}
            />
            <Input
              key={'hourEnd'}
              type={'time'}
              name="" 
              id={'hourEnd'}
              placeholder={'Até'}
            />
          </div>
        </div>
      </div>

      <div className="mt-2 flex gap-2 text-sm">
        <Input
          key={'checkVoice'}
          type={'checkbox'}
          name="" 
          id="checkVoice"
          className="appearance-none"
        />
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