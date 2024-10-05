import { render, cleanup, fireEvent } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import Header from "../header/Header";

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

describe('Header', () => {
    afterEach(() => {
        cleanup();
    })

    const mockGoToHome = jest.fn();

    it('should render header component correctly', () => {
        const { getByTestId } = render(<Header />);
        const headerElement = getByTestId('header');
        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveTextContent('Modern Walk');
    });

    it('matches header snapshot', () => {
        const tree = TestRenderer.create(<Header />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});