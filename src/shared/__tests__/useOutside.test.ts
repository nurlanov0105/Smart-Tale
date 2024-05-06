import { renderHook, act } from "@testing-library/react";
import { useOutside } from "../lib";

describe("useOutside", () => {
   it("should handle click outside", () => {
      const { result } = renderHook(() => useOutside(false));

      act(() => {
         result.current.toggleShow();
      });

      expect(result.current.isShown).toBe(true);

      act(() => {
         document.body.dispatchEvent(new MouseEvent("mousedown"));
      });
   });
});
