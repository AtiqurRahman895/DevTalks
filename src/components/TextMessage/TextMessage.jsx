import { Outlet } from "react-router"
import SideNav from "./SideNav/SideNav"

const TextMessage = () => {
  return (
    <div className="flex">
        <SideNav />
        
        <div className="flex-1 overflow-y-auto h-screen p-7">
    <Outlet />
  </div>
    </div>
  )
}

export default TextMessage
