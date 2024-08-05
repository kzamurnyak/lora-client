import { ClientMessage } from "../types/ClientMessage";
import * as i0 from "@angular/core";
type MessageListener = (message: ClientMessage) => void;
export declare class LoraClientService {
    private url;
    private socket;
    private shouldReconnect;
    private isConnected;
    private messages;
    private messagesQueue;
    private messageListeners;
    connect(url: string): Promise<unknown> | undefined;
    sendMessage(message: string): void;
    private processQueue;
    private pushMessageToQueue;
    private addMessage;
    listenMessages(listener: MessageListener): void;
    getMessages(): ClientMessage[];
    disconnect(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoraClientService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoraClientService>;
}
export {};
