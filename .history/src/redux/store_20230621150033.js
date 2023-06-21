import { createStore } from "react-redux"

import rootReducer from "./root-reducer"

const store = createStore(rootReducer);

export default store;