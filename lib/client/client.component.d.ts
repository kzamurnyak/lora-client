import { OnDestroy, OnInit } from '@angular/core';
import { LoraClientService } from '../../services/lora-client.service';
import { ClientMessage } from "../../types/ClientMessage";
import * as i0 from "@angular/core";
declare enum Status {
    NotConnected = "not-connected",
    Connected = "connected",
    Connecting = "connecting",
    Failed = "failed"
}
export declare class ClientComponent implements OnInit, OnDestroy {
    private loraClientService;
    url: string;
    isConnected: boolean;
    isConnecting: boolean;
    status: Status;
    messages: ClientMessage[];
    message: string;
    constructor(loraClientService: LoraClientService);
    ngOnInit(): void;
    connect(): Promise<void>;
    sendMessage(): void;
    onMessageChanged(message: string): void;
    onEnterPressed(): void;
    onMessage(message: ClientMessage): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClientComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ClientComponent, "lora-client", never, { "url": { "alias": "url"; "required": false; }; }, {}, never, never, true, never>;
}
export {};
