import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './app/App.tsx'
import {Provider} from "react-redux";
import {store} from "./app/store.ts";

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
