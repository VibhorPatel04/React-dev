import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () =>{
    render(<Contact />)

    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
});
test("should load input name inside contact us component", () =>{
    render(<Contact />);

    const lable = screen.getByPlaceholderText("name");
    expect(lable).toBeInTheDocument();
});
test("should load 2 input box inside contact us component", ()=>{
    render(<Contact />);

    const inputBoxs = screen.getAllByRole("textbox");
    console.log(inputBoxs.length);
    //Assertion 

    expect(inputBoxs.length).toBe(3);
});