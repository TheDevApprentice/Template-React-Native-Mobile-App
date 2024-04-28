import * as Notifications from 'expo-notifications';

export type Notification = {
    id: string, 
    title: string, 
    body: string; 
    data: Record<string, any> | undefined; 
    trigger: Notifications.NotificationTriggerInput
  }