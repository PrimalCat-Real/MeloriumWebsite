import GradientText from '@/modules/primalui/text/GradientText'
import React from 'react'

const TeamSection = () => {
    return (
        <section className='section-wrapper flex flex-col w-full h-screen gap-4 justify-center'>
            {/* <div className='w-1/2 text-4xl flex flex-wrap'> */}
            <GradientText className='inline  text-4xl relative font-medium bg-linear-to-r from-foreground to-foreground/50 uppercase' render={<span />}>
                Наша команда проекта
                {/* <span className='normal-case text-2xl'>
                    {" "}Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, nulla blanditiis laudantium fuga inventore voluptates culpa aliquam deserunt distinctio quas magnam tempore sed facere reprehenderit eos quos aspernatur eius non.</span> */}
            </GradientText>
            <p className='w-1/2 text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, recusandae! Molestiae exercitationem consequuntur dolorum minima provident magnam recusandae voluptates quia, id in autem nostrum! Aperiam officia tempora sed porro quo.</p>
            <div className='grid grid-cols-5 h-min gap-2'>
                <div className='h-125 w-full bg-purple-400'>Test</div>
                <div className='h-125 w-full bg-purple-400'>Test</div>
                <div className='h-125 w-full bg-purple-400'>Test</div>
                <div className='h-125 w-full bg-purple-400'>Test</div>
                <div className='h-125 w-full bg-purple-400'>Test</div>
            </div>
            {/* <span className='ml-3 text-muted-foreground font-normal normal-case'>
                    Люди стоящие за разработкой
                </span>
            </div> */}
        </section>
    )
}

export default TeamSection