import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

import App from './App.tsx'
import './index.css'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
    <Toaster position={'top-right'} />
  </Provider>
)
