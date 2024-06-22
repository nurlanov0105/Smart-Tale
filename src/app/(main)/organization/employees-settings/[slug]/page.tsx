import { AdminEmployeesSettings } from "@/widgets/admin/adminEmployeesSettings";
import CreateAnnouncementContext from "@/widgets/user/createAnnouncement/ui/useFormContext";

const EmployeesSettingsPage = () => {
   return <CreateAnnouncementContext mode="onChange">
      <AdminEmployeesSettings />
   </CreateAnnouncementContext>;
};

export default EmployeesSettingsPage;
