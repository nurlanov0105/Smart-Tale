import NoticeItem from "./ui/NoticeItem";
import { noticesData } from "./model/values.data";
import type { NoticesDataType } from "./model/types";
import {
   useGetMyNotifications,
   useDeleteNotification,
   useDeleteAllNotifications,
   useReadAllNotifications,
   useReadNotification,
   useEmployeeApply,
   useEmployeeDecline,
} from "./model/useQueries";
import { useWSNotifications } from "./model/useWSNotifications";

export {
   NoticeItem,
   noticesData,
   NoticesDataType,
   useGetMyNotifications,
   useDeleteNotification,
   useDeleteAllNotifications,
   useReadAllNotifications,
   useReadNotification,
   useEmployeeApply,
   useEmployeeDecline,
   useWSNotifications,
};
