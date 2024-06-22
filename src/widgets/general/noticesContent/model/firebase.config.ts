import firebase, {FirebaseApp} from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};


firebase.initializeApp(firebaseConfig);

const messaging = (firebase as any).messaging()
export const requestFCMToken = async () => {
    try {
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('FCM Token:', token);
        return token;
    } catch (error) {
        console.error('Error getting FCM token', error);
        return null;
    }
};

messaging.onMessage((payload: string) => {
    console.log('Message received. ', payload);
    // Показать уведомление пользователю
});