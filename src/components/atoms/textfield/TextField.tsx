import React, { ChangeEvent } from 'react'
import { textfieldInterface } from './textfield.interface'
import inputClass from './textfield.module.scss'

const TextField = (props: textfieldInterface) => {
    const { onChange, value, isCurrency = false, testId } = props


    const ubah = (e: ChangeEvent<HTMLInputElement>) => {

        /**
         * check apakah inputan bertipe currency
         */
        if (isCurrency) {
            //masukan value dari element input
            let value = e.target.value

            //jika inputan kosong default 0

            if (value.length === 0) return onChange('0')


            //hilangkan semua nilai kecuali number
            let clean = value.replace(/\D+/g, "");

            let clean2;

            //jika depanya 0 hilangkan depan 0 dari inputan
            if (clean.charAt(0) === '0') {
                clean2 = clean.substring(1);
            } else {
                clean2 = clean;
            }

            //format sesuai money format misal 1.000.000
            let data = clean2.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.").trimRight();

            onChange(data)
            return
        }


        onChange(e)
    }

    return (
        <input type="text" data-testid={`input${testId}`} value={value} className={inputClass.input} onChange={ubah}></input>
    )
}

export default TextField
