import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser;
  if (user === null) {
    return <Navigate to="/login" />;
  } else if (!user?.emailVerified) {
    return <h1>이메일 인증을 해주세요</h1>;
  }
  return children;
}
