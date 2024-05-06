import { renderHook, act } from "@testing-library/react";
import { useNavbar } from "../lib";
import { useOrdersStore } from "@/entities/general/navbarPanel";

jest.mock("@/entities/general/navbarPanel", () => ({
   useOrdersStore: jest.fn(),
}));

describe("useNavbar", () => {
   afterEach(() => {
      jest.clearAllMocks();
   });

   it("should return expected values and functions", () => {
      const mockUseOrdersStore = {
         hidden: false,
         hover: false,
         addHover: jest.fn(),
         removeHover: jest.fn(),
         toggleHidden: jest.fn(),
      };
      // @ts-ignore
      useOrdersStore.mockReturnValue(mockUseOrdersStore);

      const { result } = renderHook(() => useNavbar());

      const {
         hidden,
         hover,
         handleMouseOut,
         handleMouseOver,
         handleOverlayClick,
         handlePanelClick,
      } = result.current;

      expect(hidden).toBe(false);
      expect(hover).toBe(false);

      act(() => {
         handleMouseOver();
      });
      expect(mockUseOrdersStore.addHover).toHaveBeenCalledTimes(0);

      act(() => {
         handleMouseOut();
      });
      expect(mockUseOrdersStore.removeHover).toHaveBeenCalledTimes(0);

      act(() => {
         handleOverlayClick();
      });
      expect(mockUseOrdersStore.toggleHidden).toHaveBeenCalledTimes(1);

      act(() => {
         handlePanelClick();
      });
      expect(mockUseOrdersStore.removeHover).toHaveBeenCalledTimes(1);
      expect(mockUseOrdersStore.toggleHidden).toHaveBeenCalledTimes(2);
   });
});
