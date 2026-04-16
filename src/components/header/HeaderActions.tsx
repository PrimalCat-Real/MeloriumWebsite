import { Button } from '@/modules/shadcn/components/ui/button'
import React from 'react'

const HeaderActions = () => {
    return (
        <div className='flex gap-2 justify-end'>
            <Button>Login</Button>
            <Button>Get Started</Button>
        </div>
    )
}

export default HeaderActions