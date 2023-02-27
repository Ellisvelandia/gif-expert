import { getGifs } from "../../src/helpers/getGifs";

describe("test getGifs()", () => {
  test("should return arrays of gifs", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toBeGreaterThanOrEqual(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
