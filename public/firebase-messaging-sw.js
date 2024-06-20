importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js");

const firebaseConfig = {
   apiKey: "YOUR_API_KEY",
   authDomain: "YOUR_AUTH_DOMAIN",
   projectId: "smarttale-eb313",
   storageBucket: "YOUR_STORAGE_BUCKET",
   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
   appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
   console.log("Received background message ", payload);
   const notificationTitle = payload.notification.title;
   const notificationOptions = {
      body: payload.notification.body,
   };

   self.registration.showNotification(notificationTitle, notificationOptions);
});
