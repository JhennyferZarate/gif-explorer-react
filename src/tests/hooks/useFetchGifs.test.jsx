import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Tests in the hook useFetchGifs", () => {
  test("Should return initial state", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Should return an array of images and isLoading false after 7 seconds", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    await waitFor(
      () => {
        expect(result.current.images.length).toBeGreaterThan(0);
      },
      {
        timeout: 7000,
      }
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  }, 10000);
});
