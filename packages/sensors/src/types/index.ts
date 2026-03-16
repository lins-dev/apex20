export interface SensorData {
  timestamp: number;
  accuracy?: number;
}

export interface AccelerometerData extends SensorData {
  x: number;
  y: number;
  z: number;
}

export interface GyroscopeData extends SensorData {
  alpha: number; // Z-axis rotation [0, 360]
  beta: number; // X-axis rotation [-180, 180]
  gamma: number; // Y-axis rotation [-90, 90]
}

export interface SensorManager<T> {
  isAvailable(): Promise<boolean>;
  start(callback: (data: T) => void): Promise<void>;
  stop(): void;
  getPermissions(): Promise<boolean>;
}

export type SensorType = "accelerometer" | "gyroscope" | "camera";
