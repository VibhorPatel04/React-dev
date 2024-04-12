import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurentMenu from "../RestaurentMenu";
import { Provider } from "react-redux";
import MOCK_DATA from "../../Mocks/mockResMenu.json";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";
import Cart from "../Cart";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);
test("should Load Restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurentMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const recommended = screen.getByText("Premium Thalis (3)");
  fireEvent.click(recommended);
  const foodItems = screen.getAllByTestId("foodItems");

  //   expect(foodItems.length).toBe(3);

  const addBtn = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);

  const cartItem = screen.getByText("Cart (2)");
  expect(cartItem).toBeInTheDocument();

  const cartPageItem = screen.getAllByTestId("foodItems");

  expect(cartPageItem.length).toBe(5);

  fireEvent.click(screen.getByRole("button", { name: "Clear cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(3);

  expect(screen.getByText("Cart is empty. Add the item to the cart!").length)
    .toBeInTheDocument;
});
