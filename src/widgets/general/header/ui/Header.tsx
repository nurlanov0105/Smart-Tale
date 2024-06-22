"use client";

import { HeaderIntro } from "@/entities/general/headerIntro";
import { NoticeBtn } from "@/entities/general/noticeBtn";
import { useThemeEffect } from "@/shared/lib";

import styles from "./styles.module.scss";
import clsx from "clsx";
import { Search } from "@/features/general/search";
import { NavbarPanel } from "@/entities/general/navbarPanel";
import { useOrdersStore } from "@/entities/general/navbarPanel";
import { Moon, SunMoon } from "lucide-react";
import { useThemeStore } from "@/shared/store/themeStore";
import { useCallback, useEffect, useState } from "react";
// import { firebaseCloudMessaging } from "@/shared/config/firebase";
import { toast } from "react-toastify";
import { Button } from "@/shared/ui";
import { getMessaging, onMessage } from "firebase/messaging";
import { firebaseCloudMessaging } from "@/shared/config/firebase";

const Header = () => {
   // theme
   const theme = useThemeStore((state) => state.theme);
   const toggleTheme = useThemeStore((state) => state.toggleTheme);
   useThemeEffect();
   // navbar
   const hidden = useOrdersStore((state) => state.hidden);

   // FCM state
   const [fcmToken, setFcmToken] = useState<string | undefined>(undefined);
   const [messages, setMessages] = useState<string>("");
   const [permission, setPermission] = useState<"denied" | "default" | "granted">("denied");
   const [message, setMessage] = useState("");

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const getToken = async () => {
      try {
         const token = await firebaseCloudMessaging.init();

         if (token) {
            await firebaseCloudMessaging.getMessage();
            setFcmToken(token);
         }
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      if ("serviceWorker" in navigator) {
         navigator.serviceWorker
            .register("/firebase-messaging-sw.js")
            .then((registration) => {
               console.log("Service worker registered successfully: ", registration);
            })
            .catch((error) => {
               console.log("Service worker registration failed:", error);
            });

         navigator.serviceWorker.addEventListener("message", (event) => {
            console.log("event.data.notification - ", event.data.notification);

            setMessages(event.data.notification.title);
            toast.success(event.data.notification.title, {
               toastId: "success1",
               // position: "top-right",
            });
         });
      }

      async function setToken() {
         await getToken();
      }

      setToken();
   }, [messages]);

   const checkNotification = useCallback(async () => {
      const status = Notification.permission;
      setPermission(status);

      if (status === "granted") {
         await getToken();
      }
   }, [getToken]);

   useEffect(() => {
      if ("permissions" in navigator) {
         navigator.permissions.query({ name: "notifications" }).then(function (notificationPerm) {
            notificationPerm.onchange = async function () {
               await checkNotification();
            };
         });
      }

      async function initialize() {
         await checkNotification();
      }

      initialize();
   }, [checkNotification]);

   const handleRequestPermission = async () => {
      await Notification.requestPermission();
      checkNotification();
   };

   const renderDeniedNotificationBlock = () => {
      return (
         <p className={styles.notification}>
            {
               "You have denied Notification Permissioins. \nPlease Reset your Permission and Try Again."
            }
         </p>
      );
   };

   const renderAllowNotificationBlock = () => {
      return (
         <>
            <p className={styles.notification}>Please Allow Notifications to Get Your Token</p>

            <Button onClick={handleRequestPermission}>Request Permission</Button>
         </>
      );
   };

   const renderGrantedNotificationBlock = () => {
      return (
         <>
            <p className={styles.notification}>You have granted your Notification Permission</p>

            {fcmToken && (
               <>
                  <p className={styles.notification}>You FCM Token {messages}</p>
                  <p
                     style={{
                        marginLeft: 10,
                        marginRight: 10,
                        background: "#e7e7e7",
                        padding: 10,
                        wordBreak: "break-word",
                     }}>
                     {fcmToken}
                  </p>
               </>
            )}
         </>
      );
   };

   // const { fcmToken, notificationPermissionStatus } = useFcmToken();

   // useEffect(() => {
   //    if ("serviceWorker" in navigator) {
   //       const messaging = getMessaging(firebaseApp);
   //       const unsubscribe = onMessage(messaging, (payload) => {
   //          console.log("Foreground push notification received:", payload);
   //          toast.success(payload.notification?.title, {
   //             toastId: "success1",
   //          });
   //       });

   //       return () => {
   //          unsubscribe();
   //       };
   //    }
   // }, []);

   return (
      <header className={clsx(styles.header, styles.header_mb, styles[theme])}>
         <div className={clsx(styles.header__block, styles.header_left)}>
            <div className={clsx(styles.header__btn, hidden ? styles.header__btn_show : "")}>
               <NavbarPanel />
            </div>

            <div className={styles.header__intro}>
               <HeaderIntro />
            </div>
            <div className={styles.header__links}>
               <div className={clsx(styles.header__theme)} onClick={toggleTheme}>
                  {theme === "light" ? (
                     <Moon className={styles.header__moon} />
                  ) : (
                     <SunMoon className={styles.header__sun} />
                  )}
               </div>
            </div>
         </div>
         <div className={clsx(styles.header__block, styles.header_right)}>
            <div className={styles.header__links}>
               <div className={clsx(styles.header__theme)} onClick={toggleTheme}>
                  {theme === "light" ? (
                     <Moon className={styles.header__moon} />
                  ) : (
                     <SunMoon className={styles.header__sun} />
                  )}
               </div>
            </div>
            <Search />
            <NoticeBtn />
         </div>
         {/* <div className={styles.header_absolute}>
            {permission === "denied" && renderDeniedNotificationBlock()}
            {permission === "default" && renderAllowNotificationBlock()}
            {permission === "granted" && renderGrantedNotificationBlock()}
         </div> */}
      </header>
   );
};

export default Header;
