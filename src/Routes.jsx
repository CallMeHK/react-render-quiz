import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet
} from "react-router-dom"
import ErrorPage from './ErrorPage'
import { CountPage } from './quiz/Count.page'
import { CountChildPropPage } from './quiz/CountChildProp.page'
import { CountChildPage } from './quiz/CountChild.page'
import { CountPropPage } from './quiz/CountProp.page'


const Nav = () => {
  return <nav>
  <ul style={{ marginLeft: 20 }}>
    <li><strong>Acme Corp</strong></li>
  </ul>
  <ul style={{ marginRight: 20 }}>
    <li><a href="#" class="secondary">Services</a></li>
    <li>
      <details class="dropdown">
        <summary>
          Account
        </summary>
        <ul dir="rtl">
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Logout</a></li>
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
        <Route index element={<div>hello</div>} />
        <Route
          path="count"
          element={<CountPage />}
        />
        <Route
          path="count-child-prop"
          element={<CountChildPropPage />}
        />
        <Route
          path="count-child"
          element={<CountChildPage />}
        />
        <Route
          path="count-prop"
          element={<CountPropPage />}
        />
        {/*
        */}
      </Route>
    </Route>
  )
)

export const Router = () => {
  return <RouterProvider router={router} />
}
