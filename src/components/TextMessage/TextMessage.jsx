import SideNav from "./SideNav/SideNav"

const TextMessage = () => {
  return (
    <div className="flex">
        <SideNav />
        
        <div className="p-7 text-2xl font-semibold">
            <Outlet />
        </div>
    </div>
  )
}

export default TextMessage
