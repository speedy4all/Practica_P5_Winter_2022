import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../containers/App";
import { customRender } from "../utils";

describe("<App />", () => {
  it("should render component", async () => {
    expect.assertions(2);

    customRender(<App />);

    const formHeader = screen.getByRole("heading", { name: "Login" });
    const loginBtn = screen.getByRole("button", { name: "Login" });

    expect(formHeader).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });

  it("should fill the login form", async () => {
    const user = userEvent.setup();
    expect.assertions(2);

    customRender(<App />);
    
    const usernameField = screen.getByRole("textbox", { name: "Username" });
    const passwordField = screen.getByLabelText("Password");

    await user.type(usernameField, "bbuescu@pentalog.com");
    await user.type(passwordField, "admin");
    // act(() => {
    //   fireEvent.change(passwordField, { target: { value: "admin" } });
    // });

    await waitFor(() => {
      expect(usernameField).toHaveValue("bbuescu@pentalog.com");
      expect(passwordField).toHaveValue("admin");
    });
  });

  it("should login and display dashboard page", async () => {
    const user = userEvent.setup();
    expect.assertions(3);

    customRender(<App />);

    const usernameField = screen.getByRole("textbox", { name: "Username" });
    const passwordField = screen.getByLabelText("Password");
    const loginBtn = screen.getByRole("button", { name: "Login" });

    await user.type(usernameField, "bbuescu@pentalog.com");
    await user.type(passwordField, "admin");
    await user.click(loginBtn);

    await waitFor(() => {
      const header = screen.getByRole("heading", { name: "Available places" });

      expect(header).toBeInTheDocument();
      expect(usernameField).not.toBeInTheDocument();
      expect(passwordField).not.toBeInTheDocument();
    });
  });
});
