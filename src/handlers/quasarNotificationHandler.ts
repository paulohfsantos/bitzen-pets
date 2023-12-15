import { Notify } from 'quasar';
import { NotificationInterface } from './notificationInterface';

export class QuasarNotificationHandler implements NotificationInterface {
  show(message: string, type: string = 'info') {
    Notify.create({
      message,
      type,
      position: 'top-right',
      timeout: 3000,
      textColor: 'white',
      actions: [{ icon: 'close', color: 'white' }],
    });
  }
}
