import { fireEvent, render, screen } from "@testing-library/react"
import Header from "./Header"

describe('Header Component Test', () => {
    beforeEach(() => {
        render(<Header />);
    })

    it('Should render Header successuflly', () => {
        expect(screen.getByRole('banner')).toBeInTheDocument();
        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getByRole('heading')).toHaveTextContent('PokeMedia');
        expect(screen.getByRole('link', {name: /Log in/i})).toBeEnabled();
    });

    it('Should click Header successuflly', () => {
        fireEvent.click(screen.getByRole('link', {name: /Log in/i}))
    });
})
