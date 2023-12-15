import { RenderResult, act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import Home from "../page";
import { store } from "../../../../store/store";
import '@testing-library/jest-dom/extend-expect';

describe(Home, () => {
  let rootPage: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;

  beforeEach(() => {
    rootPage = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it('should render Welcome page', () => {
    const title = rootPage.getByText("Welcome to counter App");
    expect(title).toBeInTheDocument();
  });

  it("should render increment button", () => {
    const incButtonText = rootPage.getByTestId("increment").textContent;
    expect(incButtonText).toEqual("Increment");
  });

  it("increment click should increase count", () => {
    const prevCount = Number(rootPage.getByTestId("count").textContent);
    const inc_btn = rootPage.getByTestId("increment");
    fireEvent.click(inc_btn);
    const newCount = Number(rootPage.getByTestId("count").textContent);
    expect(prevCount).toEqual(newCount - 1);
  });

  it("decrement click should decrease count", () => {
    const prevCount = Number(rootPage.getByTestId("count").textContent);
    const inc_btn = rootPage.getByTestId("decrement");
    fireEvent.click(inc_btn);
    const newCount = Number(rootPage.getByTestId("count").textContent);
    expect(prevCount).toEqual(newCount + 1);
  });

  it("should increment by two", () => {
    const prevCount = Number(rootPage.getByTestId("count").textContent);
    const inc_btn = rootPage.getByTestId("increment-by-two");
    fireEvent.click(inc_btn);
    const newCount = Number(rootPage.getByTestId("count").textContent);
    expect(prevCount).toEqual(newCount - 2);
  });
});
