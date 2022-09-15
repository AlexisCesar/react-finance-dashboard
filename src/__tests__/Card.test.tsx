import { render, screen } from "@testing-library/react";
import { Card } from "../components";

describe('Card', () => {
    it('should displays 3 different titles', () => {
        render(<Card/>);
        const titles = screen.getByText('Inflow');

        expect(titles).toBeInTheDocument();
    })
})