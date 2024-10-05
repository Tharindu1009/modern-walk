import { render, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import Banner from "../banner/Banner";

describe('Banner', () => {
    afterEach(() => {
        cleanup();
    })

    it('should render mens clothing banner component correctly', () => {
        const { getByTestId } = render(<Banner type="men's clothing" text="Men's Clothing" />);
        const bannerElement = getByTestId('banner');
        expect(bannerElement).toBeInTheDocument();
    });

    it('should render womens clothing banner component correctly', () => {
        const { getByTestId } = render(<Banner type="women's clothing" text="Women's Clothing" />);
        const bannerElement = getByTestId('banner');
        expect(bannerElement).toBeInTheDocument();
    });

    it('matches banner snapshot', () => {
        const tree = TestRenderer.create(<Banner type="men's clothing" text="Men's Clothing" />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});