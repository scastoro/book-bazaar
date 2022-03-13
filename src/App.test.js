import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import { MemoryRouter } from "react-router-dom";
import Card from "./components/Card";
import Cart from "./components/Cart";

const cardProps = {
  title: "foo",
  img: "",
  count: 1,
  price: "100",
  id: "1",
};

const testProducts = [
  {
    title: "foo",
    img: "",
    count: 1,
    price: 100,
    id: "20971bac-1a2b-4c6f-a8b8-d56f43e09495",
  },
  {
    title: "foo",
    img: "",
    count: 1,
    price: 50,
    id: "1f6f6d97-36e2-4972-b6a1-ff2520e1d491",
  },
];

const testTotal = 200;

describe("App component", () => {
  it("should render correctly", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
describe("Navbar component", () => {
  it("should render correctly", () => {
    const view = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(view).toMatchSnapshot();
  });
});

describe("Shop component", () => {
  it("should render correctly", () => {
    const { container } = render(<Shop />);
    expect(container).toMatchSnapshot();
  });

  it("should update cart status on add to cart btn press", () => {
    render(<Shop />);
    const addToCart = screen.getAllByRole("button", { name: "Add to cart" });
    const cartStatus = screen.getAllByRole("status");

    userEvent.click(addToCart[0]);
    expect(cartStatus[0].textContent).toBe("Items in Cart: 1");
  });

  it("should increment count input when plus btn pressed", () => {
    render(<Shop />);
    const incrementBtn = screen.getAllByRole("button", { name: "+" });
    const input = screen.getAllByRole("textbox");

    userEvent.click(incrementBtn[0]);
    expect(input[0].value).toBe("2");
  });

  it("should decrement count input when minus btn pressed", () => {
    render(<Shop />);
    const decrementBtn = screen.getAllByRole("button", { name: "-" });
    const input = screen.getAllByRole("textbox");

    userEvent.click(decrementBtn[1]);
    expect(input[1].value).toBe("0");
  });

  it("should update count input on keypress", () => {
    render(<Shop />);
    const input = screen.getAllByRole("textbox");

    userEvent.type(input[0], "{backspace}34");
    expect(input[0].value).toBe("34");
  });

  it("should display correct price when adding product to cart", () => {
    render(<Shop />);
    const addToCart = screen.getAllByRole("button", { name: "Add to cart" });
    const goToCart = screen.getByRole("button", { name: "Go to cart" });
    userEvent.click(addToCart[1]);
    userEvent.click(addToCart[1]);
    userEvent.click(goToCart);
    const cartTotal = screen.getByText("Order total", { exact: false });

    expect(cartTotal.textContent).toBe("Order total: $50");
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

  it("should call addCartBtnHandler", () => {
    const onClickMock = jest.fn();
    render(<Card addCartBtnHandler={onClickMock} />);
    const subBtn = screen.getByRole("button", { name: "Add to cart" });
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
describe("Cart component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Cart products={testProducts} totalPrice={testTotal} />
    );
    expect(container).toMatchSnapshot();
  });

  it("should call addBtnHandler", () => {
    const onClickMock = jest.fn();
    render(<Cart products={testProducts} addBtnHandler={onClickMock} />);
    const addBtn = screen.getAllByRole("button", { name: "+" });
    userEvent.click(addBtn[0]);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should call subBtnHandler", () => {
    const onClickMock = jest.fn();
    render(<Cart products={testProducts} subBtnHandler={onClickMock} />);
    const subBtn = screen.getAllByRole("button", { name: "-" });
    userEvent.click(subBtn[0]);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should call onChange the correct number of times", () => {
    const onChangeMock = jest.fn();
    render(<Cart products={testProducts} onChangeHandler={onChangeMock} />);
    const input = screen.getAllByRole("spinbutton");

    userEvent.type(input[0], "123");

    expect(onChangeMock).toHaveBeenCalledTimes(3);
  });

  it("should call onChange with the correct argument(s) on each input", function () {
    const onChangeMock = jest.fn();
    render(
      <Cart
        id={cardProps.id}
        products={testProducts}
        onChangeHandler={onChangeMock}
      />
    );
    const input = screen.getAllByRole("spinbutton");

    userEvent.clear(input[0]);
    userEvent.type(input[0], "12");

    expect(onChangeMock).toHaveBeenNthCalledWith(
      1,
      "",
      "20971bac-1a2b-4c6f-a8b8-d56f43e09495"
    );
    expect(onChangeMock).toHaveBeenNthCalledWith(
      2,
      "12",
      "20971bac-1a2b-4c6f-a8b8-d56f43e09495"
    );
  });
});
