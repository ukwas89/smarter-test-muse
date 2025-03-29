
/// <reference types="vite/client" />

// Network Information API Type Definition
interface NetworkInformation {
  readonly effectiveType: 'slow-2g' | '2g' | '3g' | '4g';
  readonly downlink: number;
  readonly downlinkMax?: number;
  readonly rtt: number;
  readonly saveData: boolean;
  readonly type: 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown';
  onchange?: () => void;
}

interface Navigator {
  readonly connection?: NetworkInformation;
}
