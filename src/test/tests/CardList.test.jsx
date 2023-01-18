import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CardList from "../../components/CardList";
import { customRender } from "../utils";

const mockedCardClick = jest.fn();

const cards = Array(10)
  .fill({})
  .map((_, index) => ({
    id: index,
    company: `Name_${index}`,
    picture: "",
    price: 2 * index,
  }));

describe("<CardList />", () => {
  it("should render component", async () => {
    expect.assertions(1);

    customRender(<CardList list={cards} />);

    await waitFor(() => {
      const renderedCards = screen.getAllByLabelText((content) =>
        content.startsWith("Name")
      );
      expect(renderedCards.length).toBe(10);
    });
  });

  it("should call onCardClick with the object data on user clicked on card", async () => {
    const user = userEvent.setup();
    expect.assertions(2);

    customRender(<CardList list={cards} onCardClick={mockedCardClick} />);

    let card;
    await waitFor(() => {
      card = screen.getByText((content) => content === "Name_4");
    });

    await user.click(card);

    expect(mockedCardClick).toHaveBeenCalledTimes(1);
    expect(mockedCardClick).toHaveBeenCalledWith({
      id: 4,
      price: 8,
      company: "Name_4",
      picture: "",
    });
  });
});
