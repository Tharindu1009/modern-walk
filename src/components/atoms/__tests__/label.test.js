import { render, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import Label from "../label/Label";

describe('Label', () => {
    afterEach(() => {
        cleanup();
    })

    it('should render header label component correctly', () => {
        const { getByTestId } = render(<Label type="header" text="Modern Walk" />);
        const labelElement = getByTestId('label');
        expect(labelElement).toBeInTheDocument();
    });

    it('should render section header label component correctly with Flash Sale text', () => {
        const { getByTestId } = render(<Label type="sectionHeader" text="Flash Sale" />);
        const labelElement = getByTestId('label');
        expect(labelElement).toBeInTheDocument();
    });

    it('should render section header label component correctly with Categories text', () => {
        const { getByTestId } = render(<Label type="sectionHeader" text="Categories" />);
        const labelElement = getByTestId('label');
        expect(labelElement).toBeInTheDocument();
    });

    it('should render category banner label component correctly with Mens Clothing text', () => {
        const { getByTestId } = render(<Label type="categoryBanner" text="Men's Clothing" />);
        const labelElement = getByTestId('label');
        expect(labelElement).toBeInTheDocument();
    });

    it('should render category banner label component correctly with Womens Clothing text', () => {
        const { getByTestId } = render(<Label type="categoryBanner" text="Women's Clothing" />);
        const labelElement = getByTestId('label');
        expect(labelElement).toBeInTheDocument();
    });

    it('matches label snapshot', () => {
        const tree = TestRenderer.create(<Label type="header" text="Modern Walk" />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});