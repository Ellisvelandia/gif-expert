import { render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("test GifGrid", () => {
  const category = "One Punch";
  test("should show  load init", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    // screen.debug()
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("should show items when is loading images useFectGifs", () => {
    const gifs = [
      {
        id: "1",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "2",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2)
  });
});
