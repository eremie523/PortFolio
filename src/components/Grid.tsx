import { GRID_ITEMS } from '@/constants'
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

type Props = {}

const Grid = (props: Props) => {
  return (
    <section id='about'>
        <BentoGrid>
            {GRID_ITEMS.map(({title, description, id, img, imgClassName, spareImg, titleClassName, className}) => 
                <BentoGridItem 
                    title={title} 
                    description={description} 
                    id={id} 
                    key={id}
                    className={className} 
                    img={img}
                    imgClassName={imgClassName}
                    spareImg={spareImg}
                    titleClassName={titleClassName}
                />
            )}
        </BentoGrid>
    </section>
  )
}

export default Grid