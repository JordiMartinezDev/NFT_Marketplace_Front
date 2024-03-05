import { ExternalProvider } from "@ethersproject/providers";
import type { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: ExternalProvider;
  }
}

export const useMetaMask = () => {
  const ethereum = global?.window?.ethereum;
  if (!ethereum || !ethereum.isMetaMask) return;
  return ethereum as unknown as MetaMaskInpageProvider;
};
