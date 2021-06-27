import { render, screen } from "@testing-library/react"
import Button from "./Button"


describe('test button', () => {
    test('button', () => {
        render(<Button>+</Button>)

        const linkElement = screen.getByText('+')

        expect(linkElement).toBeInTheDocument()
    })


})