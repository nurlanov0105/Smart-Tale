// "use client";

// import { useEffect, useState } from "react";
// import { getToken } from "firebase/messaging";
// import { messaging } from "@/shared/config/firebase";

// const useFcmToken = () => {
//    const [token, setToken] = useState("");
//    const [notificationPermissionStatus, setNotificationPermissionStatus] = useState("");

//    useEffect(() => {
//       const retrieveToken = async () => {
//          try {
//             const permission = await Notification.requestPermission();
//             setNotificationPermissionStatus(permission);

//             if (permission === "granted") {
//                const currentToken = await getToken(messaging, {
//                   vapidKey:
//                      "BM_eFa9NAbWwPVIAKgvG-cBMOJRdG04DfCcMv-FFvInaKuBlIomdFv8ugRT7Mqwl8SHtuWwORtgIbHC9W9e9J8U",
//                });
//                if (currentToken) {
//                   setToken(currentToken);
//                } else {
//                   console.log(
//                      "No registration token available. Request permission to generate one."
//                   );
//                }
//             }
//          } catch (error) {
//             console.log("An error occurred while retrieving token:", error);
//          }
//       };

//       retrieveToken();
//    }, []);

//    return { fcmToken: token, notificationPermissionStatus };
// };

// export default useFcmToken;
