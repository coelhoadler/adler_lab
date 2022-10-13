import { Meta, StoryObj } from '@storybook/react';
import { InputText, InputTextProps } from './InputText';
import { Envelope } from 'phosphor-react';

export default {
    title: 'Components/InputText',
    component: InputText.Root,
    args: {
        children: [
            <InputText.Icon>
                <Envelope />
            </InputText.Icon>,
            <InputText.Input  placeholder='Type your e-mail'/>
        ],
    },
    argTypes: {
        children: {
            table: {
               disable: true
            }
        }
    }
} as Meta<InputTextProps>

export const Default: StoryObj<InputTextProps> = {}