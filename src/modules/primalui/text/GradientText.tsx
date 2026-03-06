import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

interface GradientTextProps extends useRender.ComponentProps<'p'> {

}

const GradientText = ({ render, className, ...otherProps }: GradientTextProps) => {

    const element = useRender({
        defaultTagName: 'p',
        render,
        props: mergeProps<'p'>({ className: twMerge("inline-flex text-transparent bg-clip-text bg-radial from-[#C0C0C0] via-none to-white", className) }, otherProps),
    });

    return element;
}

export default GradientText