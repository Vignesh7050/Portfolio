'use client';

import Image from 'next/image';

import { KeyValuePair, skillsList } from '@/utils';
import { Tooltip } from '@nextui-org/react';

export const TechSkills = () => {
  return (
    <section
      id='techSkills'
      className='bg-skills-bg w-full h-max p-6 py-12 border-t border-header-border flex flex-col justify-center items-center'
    >
      <h3 className='font-bold text-xl text-header-color'>Technical Skills</h3>
      <div className='flex justify-center items-center flex-wrap cursor-pointer gap-10 py-10'>
        {skillsList.map((skill: KeyValuePair, index: number) => (
          <Tooltip
            content={skill.titleContent}
            className='bg-foreground text-background'
            key={index}
          >
            <Image
              src={skill.src}
              alt={skill.alt}
              priority
              width={60}
              height={60}
            />
          </Tooltip>
        ))}
      </div>
    </section>
  );
};
