import React from 'react'

const AboutCard = () => {
    return (
        <div className='w-full bg-purple-400 aspect-7/5 max-h-95'>AboutCard</div>
    )
}

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