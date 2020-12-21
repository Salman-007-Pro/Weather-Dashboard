//main
import React from "react";

//components
import NotFound from "Components/Shared/NotFound/NotFound";

//routes
import AdminRoute from "modules/Admin/AdminRouter";
import UserRoute from "modules/User/UserRouter";

//constant
import { ADMIN, USER } from "constants/role";

const ModuleRoute = () => {
  const role = ADMIN;
  switch (role) {
    case ADMIN:
      return <AdminRoute />;
    case USER:
      return <UserRoute />;
    default:
      return <NotFound />;
  }
};

export default ModuleRoute;
