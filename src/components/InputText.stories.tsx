import { Meta, StoryObj } from '@storybook/react';
import { InputText, InputTextProps } from './InputText';
import { Envelope } from 'phosphor-react';

export default {
    title: 'Components/InputText',
    component: InputText.Root,
    args: {
        children: [
            <InputText.Icon>
                <Envelope weight='bold'/>
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

export const WithoutIcon: StoryObj<InputTextProps> = {
    args: {
        children: [
            <InputText.Input  placeholder='Type your e-mail'/>
        ],
    },    
}