// composable for notify service

import { QuasarNotificationHandler } from 'src/handlers/quasarNotificationHandler';
import { NotificationService } from '../services/notification.service';

export function useNotify() {
  const message = new NotificationService(new QuasarNotificationHandler());

  return {
    message,
  };
}
