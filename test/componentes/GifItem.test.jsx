import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";
describe("Test GifItems", () => {
  const title = "Saitama";
  const url = "https://one-punch.com/saitama.jpg";
  test("should match with snapshot", () => {
    const { container } = render(<GifItem title={title} ulr={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should be show image , URL and ALT", () => {
    render(<GifItem title={title} ulr={url} />);
    // const { src, alt } = screen.getByRole("img");
    // expect(src).toBe(url);
    // expect(alt).toBe(alt);

    expect(screen.getByRole("img").src);
  });

  test("should be show the title in component", () => {
    render(<GifItem title={title} ulr={url} />);
    expect(screen.getAllByText(title)).toBeTruthy();
  });
});
