import { configureStore } from '@reduxjs/toolkit'
import { motorInfoSlice, uploadFileSlice, pidControllerSlice } from './features/motorInfo'
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    motorinfo: motorInfoSlice.reducer,
    trajectoryInfo: uploadFileSlice.reducer,
    pidControllerValues: pidControllerSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()