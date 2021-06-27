import React from 'react'
import { ButtonInterface } from './button.interface'
import ButtonClass from './button.module.scss'


const Button = (props: ButtonInterface) => {

    const { children, onClick, dataTestId } = props

    return (

        <button data-testid={dataTestId} className={ButtonClass.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
