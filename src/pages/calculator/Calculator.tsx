import React, { useState } from 'react'
import { Button, Checkbox, TextField } from 'src/components/atoms'
import { listAngkaDummy } from './listangka.dummy'
import './calculator.scss'

import calculatorService from './calculator.service'


const Calculator = () => {
    //inisialisai list angka untuk loop
    const [listAngka, SetListAngka] = useState(listAngkaDummy);

    //inisialisasi pesan
    const [pesan, setPesan] = useState('')

    //inisialisasi service
    const service = new calculatorService(SetListAngka, setPesan, listAngka)

    return (
        <section className="wrapper">
            <h2>Simple Calculator</h2>

            {
                listAngka.map((angka, index) =>
                    <section className="item" key={angka.id}>
                        <TextField isCurrency value={angka.number} onChange={(e) => service.ubahNumber(index, e)} ></TextField>

                        <Checkbox value={angka.isChecked} onChange={(e) => service.ubahCheck(index, e)} />
                    </section>
                )

            }

            <section className="action-wrapper">
                <Button
                    onClick={(e) => service.calculateFunction('+')}
                >+</Button>

                <Button
                    onClick={(e) => service.calculateFunction('-')}
                >-</Button>

                <Button
                    onClick={(e) => service.calculateFunction('/')}
                >/</Button>

                <Button
                    onClick={(e) => service.calculateFunction('x')}
                >x</Button>
            </section>

            <section className="hasil">
                Hasil : <span>{pesan}</span>
            </section>

        </section>
    )
}

export default Calculator
