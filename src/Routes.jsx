import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
  useNavigate
} from "react-router-dom"
import ErrorPage from './ErrorPage'
import { CountPage } from './quiz/Count.page'
import { CountChildPropPage } from './quiz/CountChildProp.page'
import { CountChildPage } from './quiz/CountChild.page'
import { CountPropPage } from './quiz/CountProp.page'
import { PlainForm } from './form/PlainForm'
import { PropsForm } from './form/PropsForm'
import { ContextForm } from './form/ContextForm'
import { EffectContextForm } from './form/EffectContextForm'
import { MemoContextForm } from './form/MemoContextForm'
import { ReactiveVarForm } from './form/ReactiveVarForm'
import { ContextReactiveVarForm } from './form/ContextReactiveVarForm'
import { ContextReactiveVarMemoForm } from './form/ContextReactiveVarMemoForm'
import { ReactHookForm } from './form/ReactHookForm'


const Nav = () => {
  const navigate = useNavigate()
  return <nav>
  <ul style={{ marginLeft: 20 }} onClick={() => navigate('/')}>
    <li><strong>Context Demo</strong></li>
  </ul>
  <ul style={{ marginRight: 20 }}>
    <li>
      <details className="dropdown">
        <summary>
          Pages
        </summary>
        <ul dir="rtl" style={{ cursor: 'pointer' }}>
          <li><a onClick={() => navigate('form')}>BasicForm</a></li>
          <li><a onClick={() => navigate('props-form')}>PropsForm</a></li>
          <li><a onClick={() => navigate('context-form')}>ContextForm</a></li>
          <li><a onClick={() => navigate('effect-context-form')}>EffectContextForm</a></li>
          <li><a onClick={() => navigate('memo-context-form')}>MemoContextForm</a></li>
          <li><a onClick={() => navigate('reactive-var-form')}>ReactiveVarForm</a></li>
          <li><a onClick={() => navigate('context-reactive-var-form')}>ContextReactiveVarForm</a></li>
          <li><a onClick={() => navigate('context-reactive-var-memo-form')}>CRVMemoForm</a></li>
          <li><a onClick={() => navigate('react-hook-form')}>ReactHookForm</a></li>
        </ul>
      </details>
    </li>
  </ul>
</nav>
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<div>
        <Nav/>
        <main className='container'>
          <Outlet />
        </main>
      </div>}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<div>
          <h1>Context</h1>
          <h3>A Very Useful Footgun</h3>
          <p></p>
          </div>} />
        <Route
          path="form"
          element={<PlainForm />}
        />
        <Route
          path="props-form"
          element={<PropsForm />}
        />
        <Route
          path="context-form"
          element={<ContextForm />}
        />
        <Route
          path="effect-context-form"
          element={<EffectContextForm />}
        />
        <Route
          path="memo-context-form"
          element={<MemoContextForm />}
        />
        <Route
          path="reactive-var-form"
          element={<ReactiveVarForm />}
        />
        <Route
          path="context-reactive-var-form"
          element={<ContextReactiveVarForm />}
        />
        <Route
          path="context-reactive-var-memo-form"
          element={<ContextReactiveVarMemoForm />}
        />
        <Route
          path="react-hook-form"
          element={<ReactHookForm />}
        />
      </Route>
    </Route>
  )
)

export const Router = () => {
  return <RouterProvider router={router} />
}
