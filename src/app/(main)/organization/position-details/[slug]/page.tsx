import React from 'react';
import {NextPage} from "next";
import {PositionDetails} from "@/features/admin/positionDetails";
import CreateAnnouncementContext from "@/widgets/user/createAnnouncement/ui/useFormContext";

const PositionDetailsPage: NextPage = () => {
    return (
        <CreateAnnouncementContext>
            <PositionDetails/>
        </CreateAnnouncementContext>
    );
};

export default PositionDetailsPage;