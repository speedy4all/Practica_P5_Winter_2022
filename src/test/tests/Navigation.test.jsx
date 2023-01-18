import { act, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navigation from "../../containers/Root/navigaton";
import { customRender } from "../utils";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("<Navigation />", () => {
  it("should render component", async () => {
    expect.assertions(1);

    customRender(<Navigation />);

    await waitFor(() => {
      const menu = screen.getByRole("menu", { title: "navigation-menu" });
      expect(menu).toBeInTheDocument();
    });
  });

  it("should navigate to menu key when clicked", async () => {
    const user = userEvent.setup();
    expect.assertions(3);

    customRender(<Navigation />);

    let menuItem;
    await waitFor(() => {
      menuItem = screen.getByRole("menuitem", { name: "heat-map Places" });
    });

    expect(menuItem).toBeInTheDocument();

    await user.click(menuItem);

    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith("/places");
  });
});
