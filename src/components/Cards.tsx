import {FileArrowDown, CaretRight} from 'phosphor-react'

interface CardsProps {
    title: string;
    content: string;
    arrowSize: number;
    rightArrowSize: number

}

export function Cards(props: CardsProps) {
    return (
        <a href="" className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6  hover:bg-gray-600 transition-colors'>
          <div className='bg-green-700 h-full p-6 flex items-center'>
            <FileArrowDown size={props.arrowSize} />
          </div>
          <div className='py-6 leading-relaxed'>
              <strong className='block font-bold text-2xl'>{props.title}</strong>
              <span className='block text-sm text-gray-200'>{props.content}</span>
          </div>
          <div className='h-full p-6 flex items-center'>
              <CaretRight size={props.rightArrowSize} />
          </div>
        </a>
    )
}