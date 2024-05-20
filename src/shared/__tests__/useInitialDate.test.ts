import { renderHook } from "@testing-library/react";
import { useInitialDate } from "../lib/hooks/useInitialDate";

describe("useInitialDate", () => {
   it("should initialize date state correctly", () => {
      const { result } = renderHook(() => useInitialDate({}));

      expect(result.current.day).toEqual({ value: 0, postValue: 0 });
      expect(result.current.month).toEqual({ value: "", postValue: 0 });
      expect(result.current.year).toEqual({ value: 0, postValue: 0 });
   });
});
