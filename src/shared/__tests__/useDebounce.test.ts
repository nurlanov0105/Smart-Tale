import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "../lib";

describe("useDebounce", () => {
   jest.useFakeTimers();

   it("should update the debounced value after the specified delay", async () => {
      let value = "initial";
      const { result, rerender, unmount } = renderHook(
         ({ value, delay }) => useDebounce(value, delay),
         {
            initialProps: { value, delay: 500 },
         }
      );

      expect(result.current).toBe(value);

      value = "updated";
      act(() => {
         rerender({ value, delay: 500 });
      });

      // Before the delay
      expect(result.current).toBe("initial");

      // After the delay
      act(() => {
         jest.advanceTimersByTime(500);
      });

      expect(result.current).toBe("updated");

      // Cleanup
      unmount();
   });

   it("should call clearTimeout on unmount", () => {
      const clearTimeoutSpy = jest.spyOn(window, "clearTimeout");

      const { unmount } = renderHook(() => useDebounce("test"));

      unmount();

      expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
   });
});
