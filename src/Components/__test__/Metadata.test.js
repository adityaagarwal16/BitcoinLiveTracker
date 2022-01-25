import { render, screen } from '@testing-library/react';
import Metadata from "../Metadata";
import renderer from "react-test-renderer";

let getByTestId;

beforeEach(() => {
    const component  = render(<Metadata high = {1000.08573} low = {500.3839}/>);
    getByTestId = component.getByTestId
})

it('High Value', () => {
    const high = getByTestId("high")

    const highTitle = getByTestId("highTitle");
    const highValue = getByTestId("highValue");

    expect(high).toBeInTheDocument();
    expect(highTitle).toBeInTheDocument();
    expect(highValue).toBeInTheDocument();

    expect(highTitle).toHaveTextContent("HIGH");
    expect(highValue).toHaveTextContent(`$ ${1000.09}`);
});


it('Low Value', () => {
    const low = getByTestId("low")

    const lowTitle = getByTestId("lowTitle");
    const lowValue = getByTestId("lowValue");

    expect(low).toBeInTheDocument();
    expect(lowTitle).toBeInTheDocument();
    expect(lowValue).toBeInTheDocument();

    expect(lowTitle).toHaveTextContent("LOW");
    expect(lowValue).toHaveTextContent(`$ ${500.38}`);
});
