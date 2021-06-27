
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import TextField from './TextField'




describe('test text field', () => {

    test('test input', () => {
        render(<TextField testId={1} value={'hallo'}></TextField>)

        const linkElement = screen.getByTestId('input1')

        expect(linkElement).toHaveValue('hallo')
    })

    test('test money input', () => {

        const mockfn = jest.fn()

        render(<TextField testId={1} isCurrency value={'hallo'} onChange={mockfn}></TextField>)

        const input = screen.getByTestId('input1')

        userEvent.type(input, 'h')

        expect(mockfn).toHaveBeenCalledWith('')
    })
})
