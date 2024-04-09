import { screen, render } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Tests in <GifGrid/>", () => {
  const category = "One Punch";

  test("Should show the load first", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText(/Loading/i));
    expect(screen.getByText(category));
  });

  test("Should show elements when loading images from useFetchGifs hook", () => {
    const gifs = [
      { id: 1, title: "Gif 1", url: "https://example.com/gif1.gif" },
      { id: 2, title: "Gif 2", url: "https://example.com/gif2.gif" },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
