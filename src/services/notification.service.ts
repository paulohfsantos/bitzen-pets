import { NotificationInterface } from '../handlers/notificationInterface';

export class NotificationService {
  private handler: NotificationInterface;

  constructor(handler: NotificationInterface) {
    this.handler = handler;
  }

  notify(message: string, type?: string) {
    this.handler.show(message, type);
  }
}
