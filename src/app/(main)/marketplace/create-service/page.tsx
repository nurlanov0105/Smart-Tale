import { NextPage } from "next";
import { AnnouncementDetail } from "@/widgets/user/announcementDetail";

const CreateServicePage: NextPage = () => {
   return <AnnouncementDetail isService={true} />;
};

export default CreateServicePage;
