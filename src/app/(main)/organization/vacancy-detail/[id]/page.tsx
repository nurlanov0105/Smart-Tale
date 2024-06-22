import React from 'react';
import {AdminVacancyDetail} from "@/widgets/admin/adminVacancyDetail";
import CreateAnnouncementContext from "@/widgets/user/createAnnouncement/ui/useFormContext";

const VacancyAdminDetailPage = () => {
    return  <CreateAnnouncementContext mode="onChange">
        <AdminVacancyDetail/>
    </CreateAnnouncementContext>
};

export default VacancyAdminDetailPage;