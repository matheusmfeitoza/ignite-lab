import { Button } from './Button';
import { Cards } from './Cards';
import {Player, Youtube, DefaultUi} from '@vime/react'
import '@vime/core/themes/default.css';
import { gql, useQuery } from '@apollo/client';

const GET_LESSON_BY_SLUG_QUERY = gql `
query GetLessonBySlug ($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {
      avatarURL
      bio
      name
    }
  }
}
`

interface GetLessonBySlugQuery  {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;

    }
  }
}

interface VideoProps {
  lessonSlug: string
}

export function Video(props: VideoProps) {
  const {data} = useQuery<GetLessonBySlugQuery>(GET_LESSON_BY_SLUG_QUERY,{variables:{
    slug: props.lessonSlug
  },fetchPolicy:'no-cache'})
  if(!data){
    return (
      <div className='flex-1'>
        <p>Carregando...</p>
      </div>
    )
  }
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId}/>
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            <div className='flex items-center gap-4 mt-6'>
              <img
              className='rounded-full h-16 w-16 border-2 border-blue-500' 
              src={data.lesson.teacher.avatarURL} 
              alt="Foto do professor" />
              <div className='leading-relaxed'>
                <strong className='font-bold block text-2xl'>{data.lesson.teacher.name}</strong>
                <span className='text-gray-200 text-sm block'>{data.lesson.teacher.bio}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
              <Button variant='primary' text='comunidade do discord' iconSize={24} />
              <Button variant='secundary' text='Acesse o desafio' iconSize={24}  />
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
