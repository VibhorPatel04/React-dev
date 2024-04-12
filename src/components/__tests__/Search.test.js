import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../Mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
  })
);

// Your test case
test("Should search res list for p input", async () => {
  await act(async () => {
    render(<BrowserRouter><Body /></BrowserRouter>);
  });
  // Add your assertions here
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByRole("button", {name : "Search"});
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target : {value : "p"}});
  fireEvent.click(searchBtn);
  const cardsafterSearch = screen.getAllByTestId("resCard");
  expect(cardsafterSearch.length).toBe(5);
  
});
