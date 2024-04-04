import { Outlet } from "react-router-dom"
import Footer from "./components/footer"
import InkTrackNavbar from "./components/navbar"

export default function App() {
  return (
    <div>
      <InkTrackNavbar />
      <main className="py-3 bg-leaves">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
