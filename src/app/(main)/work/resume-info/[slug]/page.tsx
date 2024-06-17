import React from 'react';
import {ResumeInfo} from "@/entities/user/resume-info";
import {cookies} from "next/headers";

const ResumeInfoPage = () => {
    const userSlug = cookies().get("user_slug")
    return <ResumeInfo userSlug={userSlug?.value}/>
};

export default ResumeInfoPage;