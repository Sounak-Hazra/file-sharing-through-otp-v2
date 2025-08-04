import Nav from "./ui/Nav"
import { Outlet } from "react-router-dom"
import { Toaster } from "sonner"

const Layout = () => {
  return (
    <>
      <Nav />

      <main>
        <Outlet />
        <Toaster />
      </main>
    </>
  )
}

export default Layout