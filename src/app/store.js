import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../containers/Dashboard/dashboardSlice";

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});
