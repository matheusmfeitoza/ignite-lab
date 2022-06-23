import { Button } from './Button';
import { Cards } from './Cards';
import {Player, Youtube, DefaultUi} from '@vime/react'
import '@vime/core/themes/default.css';

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId='KJj70dBgRPo'/>
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Aula 01 - Abertura do Ignite Lab</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
            Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
            </p>
            <div className='flex items-center gap-4 mt-6'>
              <img
              className='rounded-full h-16 w-16 border-2 border-blue-500' 
              src="https://github.com/matheusmfeitoza.png" 
              alt="" />
              <div className='leading-relaxed'>
                <strong className='font-bold block text-2xl'>Matheus Marinho</strong>
                <span className='text-gray-200 text-sm block'>Front-End Developer</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
              <Button variant='primary' text='comunidade do discord' iconSize={24} slug="#" />
              <Button variant='secundary' text='Acesse o desafio' iconSize={24} slug="#" />
          </div>
        </div>
        <div className='gap-8 mt-20 grid grid-cols-2' >
          <Cards title='Material complementar' content='Acesse o material complementar para acelerar o seu desenvolvimento' arrowSize={48} rightArrowSize={24} />
          <Cards title='Wallpapers exclusivos' content='Baixe wallpapers exclusivos do Ignite Lab e personalize sua máquina' arrowSize={48} rightArrowSize={24} />
        </div>
      </div>
    </div>
  );
}
