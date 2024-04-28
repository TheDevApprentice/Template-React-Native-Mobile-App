import { Notification } from './notification'; 

export type NotificationContextType = {
    notification?: Notification | null;
    notifications?: Notification[];
    expoPushToken: string, 
    setNotification: any;
    addNotification: any;
    clearNotification: any;

    addNotificationtoNotifications: any;
    removeNotifications: any;
    clearNotifications: any;
}