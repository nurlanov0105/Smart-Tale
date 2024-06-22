"use client"
import React from 'react';
import {OrganizationSettings} from "@/features/admin/organizationSettings";
import UseFormContext from "@/widgets/user/createAnnouncement/ui/useFormContext";

const OrganizationSettingsPage = () => {
    return <UseFormContext>
        <OrganizationSettings/>
    </UseFormContext>
};

export default OrganizationSettingsPage;