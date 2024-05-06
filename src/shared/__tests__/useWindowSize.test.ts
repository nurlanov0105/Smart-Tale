import { renderHook, act } from "@testing-library/react";
import { useWindowSize } from "../lib";

describe("useWindowSize", () => {
   it("should return the window size", () => {
      const { result } = renderHook(() => useWindowSize());

      act(() => {
         Object.defineProperty(window, "innerWidth", { value: 1024 });
         Object.defineProperty(window, "innerHeight", { value: 768 });
         window.dispatchEvent(new Event("resize"));
      });

      expect(result.current.width).toBe(1024);
      expect(result.current.height).toBe(768);
   });
});
