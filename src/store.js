import { configureStore, createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 }
  ],
  reducers: {
    incrementCount(state, action) {
      const itemId = action.payload; // 증가시킬 id의 값 전달
      return state.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      );
    },
    addItem(state, action) {
      state.push(action.payload);
    },
    removeItem(state, action) {
      const ItemId = action.payload;
      return state.filter((item) => item.id !== ItemId);
    }
  }
});

export const { incrementCount, addItem, removeItem} = user.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
  }
});



