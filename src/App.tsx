// import { Button, Stack } from '@mui/material'
// import { Delete, Send, Photo } from '@mui/icons-material'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import Login from "./pages/Login"
import BackendLayout from "./layouts/BackendLayout"
import Dashboard from "./pages/Dashboard"
import User from "./pages/User"
import Parking from "./pages/Parking"
import Setting from "./pages/Setting"
import { PARKING_PATH, USER_PATH, DASHBOARD_PATH } from "./config/constants"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<BackendLayout />}>
          <Route path={DASHBOARD_PATH} element={<Dashboard />} />
          <Route path={USER_PATH} element={<User />} />
          <Route path={PARKING_PATH} element={<Parking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
