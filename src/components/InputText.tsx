import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputTextRootProps {
    children: ReactNode
}

function InputTextRoot(props: InputTextRootProps) {
    return (
        <div className='flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

export interface InputTextIconProps {
    children: ReactNode
}

function InputTextIcon(props: InputTextIconProps) {
    return(
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputInputText(props: InputTextProps) {
    return(
        <input className={clsx(
            'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none', 
        )}
            {...props} 
        />
    )    
}

export const InputText = {
    Root: InputTextRoot,
    Input: InputInputText,
    Icon: InputTextIcon
}