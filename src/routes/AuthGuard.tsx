import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

interface AuthGuardProps {
  isPrivate: boolean,
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { signedIn } = useAuth()

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/system" replace />;
  }

  return <Outlet />;
}