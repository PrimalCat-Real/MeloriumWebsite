import ClientCanvas from '@/shared/features/render/ClientCanvas'
import React from 'react'

const WelcomeSection = () => {
    return (
        <section className='w-full h-screen  min-h-screen'>
            <ClientCanvas></ClientCanvas>
        </section>
    )
}

export default WelcomeSection