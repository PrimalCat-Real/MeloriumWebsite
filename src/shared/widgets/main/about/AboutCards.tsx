import AboutCard from '@/features/ui/cards/AboutCard'
import React from 'react'

const AboutCards = () => {
    return (
        <> {Array.from(Array(6)).map(
            (value, index) => {
                return (
                    <AboutCard key={index}></AboutCard>
                )
            }
        )}
        </>
    )
}

export default AboutCards