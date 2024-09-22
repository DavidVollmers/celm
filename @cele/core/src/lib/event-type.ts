export type EventType<T extends Event> = new (type: string, init: T) => T;
