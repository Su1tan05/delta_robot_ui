import { configureStore } from '@reduxjs/toolkit'
import { motorInfoSlice, uploadFileSlice, pidControllerSlice, appDataSlice } from './features/motorInfo'
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    motorinfo: motorInfoSlice.reducer,
    trajectoryInfo: uploadFileSlice.reducer,
    pidControllerValues: pidControllerSlice.reducer,
    appData: appDataSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()