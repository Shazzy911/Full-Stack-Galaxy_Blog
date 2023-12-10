import { createSlice } from '@reduxjs/toolkit';
type ToggleState = {
  toggleOpen: boolean;
};

type SetToggleOpenAction = {
  type: string;
  payload: boolean;
};
const toggleSlice = createSlice({
  name: 'toggle',
  initialState: { toggleOpen: false } as ToggleState,
  reducers: {
    setToggleOpen: (state, action: SetToggleOpenAction) => {
      state.toggleOpen = action.payload;
    },
    
  },
  
});

export const { setToggleOpen } = toggleSlice.actions;

export default toggleSlice.reducer;

