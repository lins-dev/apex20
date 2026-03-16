import { describe, it, expect } from "vitest";
import * as Sensors from "./index";

describe("Sensors Package (SAL) - Unit Tests", () => {
  describe("Structure and Exports", () => {
    it("should export WebAdapters correctly", () => {
      expect(Sensors.WebAdapters).toBeDefined();
    });

    it("should have WebGyroscopeManager defined in WebAdapters", () => {
      expect(Sensors.WebAdapters.WebGyroscopeManager).toBeDefined();
    });
  });

  describe("Types and Interfaces", () => {
    it("should allow creating a partial GyroscopeData object", () => {
      const mockData: Sensors.GyroscopeData = {
        alpha: 10,
        beta: 20,
        gamma: 30,
        timestamp: Date.now(),
      };
      expect(mockData.alpha).toBe(10);
      expect(mockData.timestamp).toBeGreaterThan(0);
    });
  });
});
