import { render, screen } from '@testing-library/react';
import App from "./App";

let getByTestId;

beforeEach(() => {
    const component  = render(<App/>);
    getByTestId = component.getByTestId
})

it('App Loaded', () => {
    const navbar = getByTestId("navbar")
    const dashboard = getByTestId("dashboard")

    expect(navbar).toBeInTheDocument();
    expect(dashboard).toBeInTheDocument();
});
