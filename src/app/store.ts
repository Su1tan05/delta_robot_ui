import { configureStore } from '@reduxjs/toolkit'
import motorInfoReducer from '../features/motorInfo/motorInfoSlice'

export const store = configureStore({
  reducer: {
    motorinfo: motorInfoReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch