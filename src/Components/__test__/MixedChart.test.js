import { render, screen } from '@testing-library/react';
import MixedChart from "../MixedChart";

let getByTestId;

beforeEach(() => {
     const priceData = [{
                    label : "date",
                    value: 35000.003
                }]
    const volumeData = [{
                    label : "11:11:1",
                    value : 1.2930
                }]
    const colors = ['rgb(33,162,33)',  'rgb(164,20,20)']
    const component  = render(<MixedChart priceData={priceData}
                                          volumeData={volumeData}
                                          color={colors}/>);
    getByTestId = component.getByTestId
})

it('Chart test', () => {
    const mixedChart = getByTestId("mixedChart")

    expect(mixedChart).toBeInTheDocument();
    expect(mixedChart).toBeEnabled();
});

describe('componentDidUpdate', () => {
    it("updates the graph as state is updated", () => {
    })
})
