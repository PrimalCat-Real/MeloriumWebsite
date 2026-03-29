import GradientText from '@/modules/primalui/text/GradientText'
import AboutCards from '@/shared/features/about/AboutCards'

import React from 'react'

const AboutSection = () => {
    return (
        <section className='section-wrapper grid  grid-cols-1 sm:grid-cols-2 2xl:grid-cols-[minmax(200px,2fr)_minmax(400px,500px)_minmax(400px,500px)_minmax(400px,500px)] w-full gap-2'>
            <div className=' flex flex-col xl:max-w-175 w-auto col-span-2'>
                <GradientText className='-inset-y-16 relative text-5xl font-medium bg-linear-to-r from-foreground to-foreground/50 uppercase' render={<h2 />}>
                    ОСОБЕНОСТЬ <br />СЕРВЕРА
                </GradientText>

                <p className=''>MELORIUM — техномагический модовый сервер с сюжетом и живым RP, где прогресс ощущается как приключение, а мир реагирует на действия игроков. Здесь технологии и магия идут рядом: развивай персонажа, выбирай путь, вступай во фракции, прокачивай влияние и участвуй в истории, которая постоянно движется вперёд</p>
            </div>
            <AboutCards></AboutCards>
        </section>
    )
}

export default AboutSection