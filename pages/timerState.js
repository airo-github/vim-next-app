import { atom } from 'recoil'

export const timerState = atom({
  key: 'timerState',
  default: {
    isRunning: false,
    time: 0
  }
})
