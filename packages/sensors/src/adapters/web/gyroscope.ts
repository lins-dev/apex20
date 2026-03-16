import { GyroscopeData, SensorManager } from "../../types";

export class WebGyroscopeManager implements SensorManager<GyroscopeData> {
  private isListening = false;
  private callback: ((data: GyroscopeData) => void) | null = null;

  async isAvailable(): Promise<boolean> {
    return "DeviceOrientationEvent" in window;
  }

  async getPermissions(): Promise<boolean> {
    // Para iOS 13+ e navegadores modernos que exigem permissão explícita
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      // @ts-expect-error - requestPermission is non-standard but required on iOS
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      try {
        // @ts-expect-error - same as above
        const response = await DeviceOrientationEvent.requestPermission();
        return response === "granted";
      } catch (error) {
        console.error("Error requesting DeviceOrientation permission:", error);
        return false;
      }
    }
    return true; // Assume granted for non-iOS browsers
  }

  async start(callback: (data: GyroscopeData) => void): Promise<void> {
    const hasPermission = await this.getPermissions();
    if (!hasPermission) throw new Error("Sensor permission denied");

    this.callback = callback;
    window.addEventListener("deviceorientation", this.handleOrientation, true);
    this.isListening = true;
  }

  stop(): void {
    if (this.isListening) {
      window.removeEventListener("deviceorientation", this.handleOrientation, true);
      this.isListening = false;
      this.callback = null;
    }
  }

  private handleOrientation = (event: DeviceOrientationEvent) => {
    if (this.callback) {
      this.callback({
        alpha: event.alpha || 0,
        beta: event.beta || 0,
        gamma: event.gamma || 0,
        timestamp: Date.now(),
      });
    }
  };
}
