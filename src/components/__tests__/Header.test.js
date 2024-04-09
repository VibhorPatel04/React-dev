import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import  appStore  from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
test("should load headercoponent with a login button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
            </Provider> 
        </BrowserRouter>
    );
    // Assertion
    const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
})
test("should load headercoponent with a cart item 0 ", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
            </Provider> 
        </BrowserRouter>
    );
    // Assertion
    const cartItem= screen.getByText("Cart (0)");

    expect(cartItem).toBeInTheDocument();
})
test("should load headercoponent with a cart button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
            </Provider> 
        </BrowserRouter>
    );
    // Assertion
    const cartItem= screen.getByText(/Cart/);

    expect(cartItem).toBeInTheDocument();
})
test("should change login button to logout on click", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
            </Provider> 
        </BrowserRouter>
    );
    // Assertion
    const loginButton = screen.getByRole("button", {name : "Login"});
    fireEvent.click(loginButton);
    const logOutButton = screen.getByRole("button", {name : "Logout"});

    expect(logOutButton).toBeInTheDocument();
})