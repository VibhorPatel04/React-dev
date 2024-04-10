import { render, screen } from "@testing-library/react"
import RestaurentCard, {withPromotedLabel} from "../RestaurentCard"
import MOCK_DATA from "../../Mocks/resCardMock.json"
import "@testing-library/jest-dom";
test("Should render RestaurentCard component with props data", () =>{
    render(<RestaurentCard resData={MOCK_DATA} />);

    const resCard = screen.getByText("UBQ by Barbeque Nation");
    expect(resCard).toBeInTheDocument();

})
test("should render RestaurentCard component with promoted label", () =>{
    const Component = withPromotedLabel(RestaurentCard);
    render(<Component resData={MOCK_DATA} />)
    // render(withPromotedLabel);

    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();

})