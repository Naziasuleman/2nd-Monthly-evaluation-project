// sidebarSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapsed: false,
  opensidebar: false,
};

const sidebarSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.collapsed = !state.collapsed;
    },
    showsidebarcanvas: (state) => {
      state.opensidebar = !state.opensidebar;
    },
  },
});

export const { toggleSidebar, showsidebarcanvas } = sidebarSlice.actions;
export default sidebarSlice.reducer;
