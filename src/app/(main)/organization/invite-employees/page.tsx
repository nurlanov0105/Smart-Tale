import { EmployeesForm } from "@/widgets/admin/employeesForm";
import React from "react";
import CreateAnnouncementContext from "@/widgets/user/createAnnouncement/ui/useFormContext";

const InviteEmployeesPage = () => {
   return <CreateAnnouncementContext mode="onChange">
      <EmployeesForm />
   </CreateAnnouncementContext>;
};

export default InviteEmployeesPage;
