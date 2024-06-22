importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js");

const firebaseConfig = {
   apiKey: "AIzaSyBY0tM97yPzVVh9pY8NL6X9PP_HlPPasBQ",
   authDomain: "smarttale-eb313.firebaseapp.com",
   projectId: "smarttale-eb313",
   storageBucket: "smarttale-eb313.appspot.com",
   messagingSenderId: "47749710834",
   appId: "1:47749710834:web:2baf9cb238cb9c6040e16b",
   // databaseURL: "url",
   // measurementId: "YOUR_MEASUREMENT_ID",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
   console.log("Firebase messagin sw.js - ", payload);
   const notificationTitle = payload.notification.title;
   const notificationOptions = {
      body: payload.notification.body,
   };

   self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("message", (event) => {
   // Handle incoming messages from the main application
   const { type, data } = event.data;

   if (type === "showNotification") {
      const { title, body } = event.data;

      self.registration.showNotification(title, {
         body: body,
         icon: "/logo.svg",
      });

      // Add toast notification
      self.registration.showNotification(title);
   }
});

// importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js");

// const firebaseConfig = {
//    apiKey: "AIzaSyBY0tM97yPzVVh9pY8NL6X9PP_HlPPasBQ",
//    authDomain: "smarttale-eb313.firebaseapp.com",
//    projectId: "smarttale-eb313",
//    storageBucket: "smarttale-eb313.appspot.com",
//    messagingSenderId: "47749710834",
//    appId: "1:47749710834:web:2baf9cb238cb9c6040e16b",
// };

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//    console.log("Received background message ", payload);
//    const notificationTitle = payload.notification.title;
//    const notificationOptions = {
//       body: payload.notification.body,
//       icon: "./logo.png",
//    };
//    self.registration.showNotification(notificationTitle, notificationOptions);
// });
