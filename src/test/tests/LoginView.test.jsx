import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginView from "../../components/LoginView";
import App from "../../containers/App";
import { customRender } from "../utils";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

const onFinish = jest.fn();

describe("<LoginView />", () => {
  it("should render component", async () => {
    expect.assertions(2);

    render(<LoginView />);

    const formHeader = screen.getByRole("heading", { name: "Login" });
    const loginBtn = screen.getByRole("button", { name: "Login" });

    expect(formHeader).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });

  it("should fill the login form", async () => {
    const user = userEvent.setup();
    expect.assertions(2);

    render(<LoginView />);

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

  it("should trigger login implementation", async () => {
    const user = userEvent.setup();
    expect.assertions(2);

    render(<LoginView onFinish={onFinish} />);

    const usernameField = screen.getByRole("textbox", { name: "Username" });
    const passwordField = screen.getByLabelText("Password");
    const loginBtn = screen.getByRole("button", { name: "Login" });

    await user.type(usernameField, "bbuescu@pentalog.com");
    await user.type(passwordField, "admin");
    await user.click(loginBtn);

    await waitFor(() => {
      expect(onFinish).toHaveBeenCalledTimes(1);
      expect(onFinish).toHaveBeenCalledWith({
        username: "bbuescu@pentalog.com",
        password: "admin",
      });
    });
  });
});
