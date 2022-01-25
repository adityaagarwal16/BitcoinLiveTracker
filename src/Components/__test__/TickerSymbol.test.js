import { render, screen } from '@testing-library/react';
import renderer from "react-test-renderer";
import TickerSymbol from "../TickerSymbol";
import {getColor, getDate} from "../../Dashboard";

let getByTestId;

beforeEach(() => {
    const component  = render(<TickerSymbol price = {35000.292023} volume = {11.333369}/>);
    getByTestId = component.getByTestId
})

it('price Value', () => {
    const price = getByTestId("price")

    const priceTitle = getByTestId("priceTitle");
    const priceValue = getByTestId("priceValue");
    const priceImg = getByTestId("priceImg");

    expect(price).toBeInTheDocument();
    expect(priceTitle).toBeInTheDocument();
    expect(priceValue).toBeInTheDocument();
    expect(priceImg).toBeInTheDocument();

    expect(priceTitle).toHaveTextContent("BITCOIN");
    expect(priceValue).toHaveTextContent(`$ ${35000.29}`);
});


it('volume Value', () => {
    const volume = getByTestId("volume")

    const volumeTitle = getByTestId("volumeTitle");
    const volumeValue = getByTestId("volumeValue");
    const volumeImg = getByTestId("volumeImg");

    expect(volume).toBeInTheDocument();
    expect(volumeTitle).toBeInTheDocument();
    expect(volumeValue).toBeInTheDocument();
    expect(volumeImg).toBeInTheDocument();

    expect(volumeTitle).toHaveTextContent("Volume");
    expect(volumeValue).toHaveTextContent(`BTC ${11.3334}`);
});
