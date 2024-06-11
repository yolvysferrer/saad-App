import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = ({}) => {
  const {user} = useSelector(state => state.login);
    if(!user){
        return <Navigate to={redirectTo} />
    }
  return <Outlet />
}
