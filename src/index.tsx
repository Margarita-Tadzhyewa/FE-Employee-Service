import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ErrorBoundary } from './shared/components/ErrorBoundary'

import { store } from '../store/store'

import { router } from './app/routes'
import './app/styles/reset.scss'

const rootElement = document.getElementById('root')!

const root = ReactDOM.createRoot(rootElement)
root.render(
    <Provider store={store}>
        <ErrorBoundary>
            <RouterProvider router={router} />
        </ErrorBoundary>
    </Provider>
)
