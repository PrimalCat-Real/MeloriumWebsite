import { Button } from '@/modules/shadcn/components/ui/button'
import { Field } from '@base-ui/react/field'
import { Form } from '@base-ui/react/form'
import { Input } from '@base-ui/react/input'
import React from 'react'

const RegisterSection = () => {
    return (
        <div className='section-wrapper flex w-full h-screen py-4'>
            <div className='w-[55%] h-full rounded-t-4xl bg-linear-to-b from-purple-50 via-purple-400 via-30% to-transparent'>

            </div>
            <div className='w-[45%] h-full flex flex-col'>
                <Form>
                    <Field.Root name="username">
                        <Field.Label>Username</Field.Label>
                        <Field.Control
                            type="username"
                            required
                            defaultValue="admin"
                            placeholder="e.g. alice132"
                        />
                        <Field.Error />
                    </Field.Root>
                    <Button type="submit" disabled={false} focusableWhenDisabled>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default RegisterSection