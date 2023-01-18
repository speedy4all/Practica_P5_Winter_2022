import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dashboard from "../../containers/Dashboard";
import { customRender } from "../utils";


describe("<Dashboard />", () => {
  it("should render component", async () => {
    expect.assertions(1);

    customRender(<Dashboard />);

    await waitFor(() => {
      const header = screen.getByRole("heading", { name: "Available places" });
      expect(header).toBeInTheDocument();
    });
  });

  it("should open modal when card is clicked and close modal when cancel is clicked", async () => {
    const user = userEvent.setup();
    expect.assertions(3);

    customRender(<Dashboard />);

    let card;
    await waitFor(() => {
      card = screen.getByLabelText("SATIANCE");
    });

    expect(card).toBeVisible();

    await user.click(card);

    let cancelBtn, modalBtn;
    await waitFor(() => {
      modalBtn = screen.getByRole("button", { name: "Reserve" });
      cancelBtn = screen.getByRole("button", { name: "Cancel" });
      expect(modalBtn).toBeInTheDocument();
    });

    await user.click(cancelBtn);

    await waitFor(() => {
      expect(modalBtn).not.toBeInTheDocument();
    });
  });
});
