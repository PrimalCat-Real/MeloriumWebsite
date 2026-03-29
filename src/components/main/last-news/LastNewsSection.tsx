import GradientText from '@/modules/primalui/text/GradientText'
import LastNewsGroup from '@/shared/features/lastnews/LastNewsGroup'
import React from 'react'

const LastNewsSection = () => {
    return (
        <section className='flex flex-col gap-4 w-full  justify-center items-center h-screen section-wrapper py-4'>
            <GradientText className='relative text-4xl font-medium bg-linear-to-r from-foreground to-foreground/50 uppercase' render={<h2 />}>
                Неверноятное новости сервера
            </GradientText>
            <p className='w-1/2 text-wrap text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugiat omnis voluptatem pariatur quidem, et nesciunt voluptates architecto distinctio aliquid eos temporibus dolore itaque sit beatae suscipit. Neque, corrupti sed.</p>
            <LastNewsGroup></LastNewsGroup>
        </section>
    )
}

export default LastNewsSection