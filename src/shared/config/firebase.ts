import * as firebase from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseCloudMessaging = {
   tokenInLocalStorage: async () => {
      return localStorage.getItem("fcm_token");
   },

   init: async function () {
      if (!firebase.getApps().length) {
         firebase.initializeApp({
            apiKey: "AIzaSyBY0tM97yPzVVh9pY8NL6X9PP_HlPPasBQ",
            authDomain: "smarttale-eb313.firebaseapp.com",
            projectId: "smarttale-eb313",
            storageBucket: "smarttale-eb313.appspot.com",
            messagingSenderId: "47749710834",
            appId: "1:47749710834:web:2baf9cb238cb9c6040e16b",
            // databaseURL: "url",
            // measurementId: "YOUR_MEASUREMENT_ID",
         });

         try {
            const messaging = getMessaging();
            const tokenInLocalStorage = await this.tokenInLocalStorage();

            if (tokenInLocalStorage !== null) {
               return tokenInLocalStorage;
            }

            const status = await Notification.requestPermission();

            if (status && status === "granted") {
               const fcm_token = await getToken(messaging, {
                  vapidKey:
                     "BM_eFa9NAbWwPVIAKgvG-cBMOJRdG04DfCcMv-FFvInaKuBlIomdFv8ugRT7Mqwl8SHtuWwORtgIbHC9W9e9J8U",
               });

               if (fcm_token) {
                  localStorage.setItem("fcm_token", fcm_token);

                  return fcm_token;
               }
            }
         } catch (error) {
            console.error(error);
            return null;
         }
      } else {
         try {
            const tokenInLocalStorage = await this.tokenInLocalStorage();

            if (tokenInLocalStorage !== null) {
               return tokenInLocalStorage;
            }

            const messaging = getMessaging();
            const status = await Notification.requestPermission();

            if (status && status === "granted") {
               const fcm_token = await getToken(messaging, {
                  vapidKey:
                     "BM_eFa9NAbWwPVIAKgvG-cBMOJRdG04DfCcMv-FFvInaKuBlIomdFv8ugRT7Mqwl8SHtuWwORtgIbHC9W9e9J8U",
               });

               if (fcm_token) {
                  localStorage.setItem("fcm_token", fcm_token);

                  return fcm_token;
               }
            }
         } catch (error) {
            console.error(error);
            return null;
         }
      }
   },
   getMessage: async function () {
      if (firebase.getApps().length > 0) {
         try {
            const messaging = getMessaging();
            onMessage(messaging, (payload) => {
               console.log("Message Received", payload);
            });
         } catch (error) {}
      }
   },
};

export { firebaseCloudMessaging };

// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging";

// const firebaseConfig = {
//    apiKey: "AIzaSyBY0tM97yPzVVh9pY8NL6X9PP_HlPPasBQ",
//    authDomain: "smarttale-eb313.firebaseapp.com",
//    projectId: "smarttale-eb313",
//    storageBucket: "smarttale-eb313.appspot.com",
//    messagingSenderId: "47749710834",
//    appId: "1:47749710834:web:2baf9cb238cb9c6040e16b",
// };

// const firebaseApp = initializeApp(firebaseConfig);
// export const messaging = getMessaging(firebaseApp);
// export default firebaseApp;
