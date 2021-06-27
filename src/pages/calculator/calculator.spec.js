
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Calculator from './Calculator'


describe('test calculator page', () => {


    test('test header exist', () => {
        render(<Calculator></Calculator>)

        const header = screen.getByText('Simple Calculator')

        expect(header).toBeInTheDocument()

    })

    test('test ubahCheck', () => {

        const { unmount } = render(<Calculator></Calculator>)

        let inputer = screen.getByTestId('input1')
        userEvent.type(inputer, '4')
        userEvent.type(inputer, '4')
        userEvent.type(inputer, '4')

        expect(screen.getByTestId('input1')).toHaveValue('444')
    })

    test('test  function', () => {

        const { unmount } = render(<Calculator></Calculator>)

        let input1 = screen.getByTestId('input1')
        userEvent.type(input1, '4')
        userEvent.type(input1, '0')
        userEvent.type(input1, '0')

        let input2 = screen.getByTestId('input2')
        userEvent.type(input2, '2')
        userEvent.type(input2, '0')
        userEvent.type(input2, '0')

        let add = screen.getByTestId('add')
        userEvent.click(add)
        expect(screen.getByText('444,600')).toBeInTheDocument()

        let minus = screen.getByTestId('minus')
        userEvent.click(minus)
        expect(screen.getByText('444,200')).toBeInTheDocument()

        let divide = screen.getByTestId('divide')
        userEvent.click(divide)
        expect(screen.getByText('2,222')).toBeInTheDocument()

        let times = screen.getByTestId('times')
        userEvent.click(times)
        expect(screen.getByText('88,880,000')).toBeInTheDocument()
    })


})