import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe("GifItem Tests", () => {
  const title = "Image Title GIF";
  const url = "https://img.com/imagen.jpg";

  test("Should match the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test("Should show the image with url and ALT indicated", () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("Should show the title in the component", () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
