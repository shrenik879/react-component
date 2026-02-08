// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import PublicLayout from "./layouts/PublicLayout";
// import AuthLayout from "./layouts/AuthLayout";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Components from "./pages/Components";
// import ComponentDetails from "./pages/ComponentDetails";
// import Dashboard from "./pages/Dashboard";
// import SubmitComponent from "./pages/SubmitComponent";
// import Admin from "./pages/Admin";
// import AIPlayground from "./pages/AIPlayground";

// import ProtectedRoute from "./routes/ProtectedRoute";
// import GuestOnlyRoute from "./routes/GuestOnlyRoute";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* ================= PUBLIC ================= */}
//         <Route element={<PublicLayout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/components" element={<Components />} />
//           <Route path="/components/:id" element={<ComponentDetails />} />
//         </Route>

//         {/* ================= AUTH (Guests only) ================= */}
//         <Route element={<AuthLayout />}>
//           <Route
//             path="/login"
//             element={
//               <GuestOnlyRoute>
//                 <Login />
//               </GuestOnlyRoute>
//             }
//           />
//           <Route
//             path="/signup"
//             element={
//               <GuestOnlyRoute>
//                 <Signup />
//               </GuestOnlyRoute>
//             }
//           />
//         </Route>

//         {/* ================= AUTHENTICATED ================= */}
//         <Route
//           path="/ai"
//           element={
//             <ProtectedRoute>
//               <AIPlayground />
//             </ProtectedRoute>
//           }
//         />

//         {/* ================= DEVELOPER ================= */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute roles={["developer", "admin"]}>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/submit"
//           element={
//             <ProtectedRoute roles={["developer", "admin"]}>
//               <SubmitComponent />
//             </ProtectedRoute>
//           }
//         />

//         {/* ================= ADMIN ================= */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute roles={["admin"]}>
//               <Admin />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }




import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Components from "./pages/Components";
import ComponentDetails from "./pages/ComponentDetails";
import Dashboard from "./pages/Dashboard";
import SubmitComponent from "./pages/SubmitComponent";
import Admin from "./pages/Admin";
import AIPlayground from "./pages/AIPlayground";
import ChangePassword from "./pages/ChangePassword";
import ProtectedRoute from "./routes/ProtectedRoute";
import GuestOnlyRoute from "./routes/GuestOnlyRoute";
import OAuthSuccess from "./pages/OAuthSuccess";
import EditComponent from "./pages/EditComponent";
export default function App() {
  return (
 
      <Routes>
        {/* ================= PUBLIC ================= */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/:id" element={<ComponentDetails />} />
            <Route
          path="/ai"
          element={
            
            <ProtectedRoute>
              <AIPlayground />
            </ProtectedRoute>
          }
        />

         <Route
          path="/submit"
          element={
            <ProtectedRoute>
              <SubmitComponent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


         <Route
          path="/edit/:id"
          element={
            <ProtectedRoute>
              <EditComponent />
            </ProtectedRoute>
          }
        />

        </Route>

        {/* ================= AUTH (GUESTS ONLY) ================= */}
        <Route element={<AuthLayout />}>
          <Route
            path="/login"
            element={
              <GuestOnlyRoute>
                <Login />
              </GuestOnlyRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <GuestOnlyRoute>
                <Signup />
              </GuestOnlyRoute>
            }
          />

           <Route path="/oauth-success" element={<OAuthSuccess />} />
          <Route
  path="/change-password"
  element={
    <ProtectedRoute>
      <ChangePassword />
    </ProtectedRoute>
  }
/>
        </Route>

        {/* ================= AUTHENTICATED USERS ================= */}
        
       

      
        {/* ================= ADMIN ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={["admin"]}>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
   
  );
}
