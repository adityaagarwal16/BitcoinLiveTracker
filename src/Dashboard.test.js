import { render, screen } from '@testing-library/react';
import Dashboard, {getColor, getDate} from "./Dashboard";

let getByTestId

test('date test', () => {
  expect(getDate(1643100022001)).toBe("8:40:22");
  expect(getDate(1643100447666)).toBe("8:47:27");
});

test('color test', () => {
  ///green
  expect(getColor(35000, 36000)).toBe("rgb(33,162,33)");
  expect(getColor(35000, 35001)).toBe("rgb(33,162,33)");
  //red
  expect(getColor(39000, 35000)).toBe("rgb(164,20,20)");
  expect(getColor(39001, 39000)).toBe("rgb(164,20,20)");
});


beforeEach(() => {
    const component  = render(<Dashboard/>);
    getByTestId = component.getByTestId
})

it('Dashboard', () => {
    const dashboard = getByTestId("dashboard")

    expect(dashboard).toBeInTheDocument();
    expect(dashboard).toBeEnabled();

});
