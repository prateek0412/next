import { RenderResult, act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Home from "../page";
import {store} from "../../../../store/store"; // Replace with your Redux store file
import '@testing-library/jest-dom/extend-expect';

describe(Home, () => {
  
  let rootPage: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  act(() => {
    beforeEach(() => {
      rootPage = render(
        <Provider store={store}>
          <Home />
        </Provider>
      );
    });
  });
  
  
  it('expect title to be in document', () => {
    const title = rootPage.getByText("Welcome to Dashboard");
    expect(title).toBeInTheDocument();
  });

  // test('displays data after API call', async () => {
     
  //   await waitFor(() => {
  //     const element=rootPage.getByText("Welcome to Dashboard");
  //     expect(element).toBeInTheDocument();
  //   });
  // });

});






