import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import { MemoryRouter } from "react-router-dom";
import Card from "./components/Card";

const cardProps = {
  title: "foo",
  img: "",
  count: 1,
  price: "100",
  id: "1",
};

describe("App component", () => {
  it("should render correctly", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
describe("should render correctly", () => {
  it("renders Navbar", () => {
    const view = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });
});

describe.skip("Shop component", () => {
  it("should render Shop", () => {
    const { container } = render(<Shop />);
    expect(container).toMatchSnapshot();
  });

  it("should update cart status on add to cart btn press", () => {
    render(<Shop />);
    const { addToCart } = screen.getByRole("button", { name: "add to cart" });
    const { cartStatus } = screen.getByRole("status");

    userEvent.click(addToCart);
    expect(cartStatus).toBe(1);
  });
});

describe("Product Card Component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Card
        title={cardProps.title}
        img={cardProps.img}
        count={cardProps.count}
        price={cardProps.price}
        id={cardProps.id}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should call addBtnHandler", () => {
    const onClickMock = jest.fn();
    render(<Card addBtnHandler={onClickMock} />);
    const addBtn = screen.getByRole("button", { name: "+" });
    userEvent.click(addBtn);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should call subBtnHandler", () => {
    const onClickMock = jest.fn();
    render(<Card subBtnHandler={onClickMock} />);
    const subBtn = screen.getByRole("button", { name: "-" });
    userEvent.click(subBtn);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should call onChange the correct number of times", () => {
    const onChangeMock = jest.fn();
    render(<Card onChangeHandler={onChangeMock} />);
    const input = screen.getByRole("textbox");

    userEvent.type(input, "123");

    expect(onChangeMock).toHaveBeenCalledTimes(3);
  });

  it("should call onChange with the correct argument(s) on each input", function () {
    const onChangeMock = jest.fn();
    render(<Card id={cardProps.id} onChangeHandler={onChangeMock} />);
    const input = screen.getByRole("textbox");

    userEvent.type(input, "12");

    expect(onChangeMock).toHaveBeenNthCalledWith(1, "1", "1");
    expect(onChangeMock).toHaveBeenNthCalledWith(2, "12", "1");
  });
});
