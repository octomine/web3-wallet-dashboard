import { create } from 'zustand'

import { IWalletState } from './types'

export const useWalletStore = create<IWalletState>((set) => ({
  address: '',
  setAddress: (address: string) => set(() => ({ address })),
}))
