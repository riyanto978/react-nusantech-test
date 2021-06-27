import React from 'react'
import { checkInterface } from './checkbox.interface'
import checkboxClass from './checkbox.module.scss'

const Checkbox = (props: checkInterface) => {

    const { value, onChange } = props

    return (
        <input defaultChecked={value} type="checkbox" className={checkboxClass.checkbox} onChange={onChange} />
    )
}

export default Checkbox
