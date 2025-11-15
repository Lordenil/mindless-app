import { RouterProvider } from "react-router-dom";
import { RouterApp } from "./routes";

export default function App() {
  return (
    <div className="relative">
      <RouterProvider router={RouterApp.router} />
    </div>
  );
}
