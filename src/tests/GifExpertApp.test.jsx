import { fireEvent, screen, render } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

describe("Tests in <GifExpertApp/>", () => {
  const newCategory = "Totoro";
  const existingCategory = "The Big Bang Theory";

  test("Should add a new category to categories state", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form);

    expect(screen.getByRole("heading", { name: newCategory, level: 3 }));
  });

  test("Should not add duplicate category to categories state", () => {
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: existingCategory } });
    fireEvent.submit(form);

    const headings = screen.queryAllByRole("heading", {
      name: existingCategory,
      level: 3,
    });
    expect(headings.length).not.toBe(2);
  });
});
