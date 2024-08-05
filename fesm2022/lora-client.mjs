import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, Input, EventEmitter, Output, ViewChild, Injectable } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgClass, NgForOf, NgFor } from '@angular/common';

class MessageComponent {
    message;
    formatUnixTime(unixTime) {
        // Create a new JavaScript Date object based on the Unix timestamp
        const date = new Date(unixTime * 1000);
        // Get the day, month, and year from the date object
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero-indexed in JavaScript
        const year = date.getFullYear();
        // Get the hours, minutes, and seconds from the date object
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        // Format the date and time components to ensure two digits for each
        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        // Return the formatted date and time string
        return `${formattedDate} ${formattedTime}`;
    }
    getTimeFormatted() {
        return this.formatUnixTime(this.message.time);
    }
    getFormattedMessage() {
        return (this.message.content || '').replace(/\n/g, '<br>');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: MessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: MessageComponent, isStandalone: true, selector: "client-message", inputs: { message: "message" }, ngImport: i0, template: `
      <div class="client-message" [ngClass]="{'client-message--own': message.user == 'me'}">
          <div class="client-message__content">
              <div [innerHTML]="getFormattedMessage()"></div>
          </div>
      </div>`, isInline: true, styles: [".client-message{margin:8px 0;display:flex;flex-direction:column;align-items:flex-start}.client-message__content{background:#efefef;padding:8px;border-radius:16px}.client-message--own{align-items:flex-end}.client-message--own .client-message__content{background:#a6e4e7}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: MessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'client-message', standalone: true, encapsulation: ViewEncapsulation.None, imports: [NgClass], template: `
      <div class="client-message" [ngClass]="{'client-message--own': message.user == 'me'}">
          <div class="client-message__content">
              <div [innerHTML]="getFormattedMessage()"></div>
          </div>
      </div>`, styles: [".client-message{margin:8px 0;display:flex;flex-direction:column;align-items:flex-start}.client-message__content{background:#efefef;padding:8px;border-radius:16px}.client-message--own{align-items:flex-end}.client-message--own .client-message__content{background:#a6e4e7}\n"] }]
        }], propDecorators: { message: [{
                type: Input
            }] } });

class ClientMessageInputComponent {
    message;
    onMessageChanged = new EventEmitter();
    onEnterPressed = new EventEmitter();
    textarea;
    content = '';
    ngOnInit() {
        this.content = this.message;
    }
    ngOnChanges(changes) {
        if (this.content !== this.message) {
            this.content = this.message;
        }
    }
    ngAfterViewChecked() {
        this.adjustTextareaHeight();
    }
    onInput() {
        this.adjustTextareaHeight();
        this.onMessageChanged.emit(this.content);
    }
    onKeyDown(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Prevent the default behavior of adding a new line
            this.onEnterPressed.emit();
        }
    }
    adjustTextareaHeight() {
        if (!this.textarea)
            return;
        const textarea = this.textarea.nativeElement;
        textarea.style.height = '34px'; // Reset the height
        textarea.style.height = Math.min(textarea.scrollHeight, 180) + 'px'; // Set new height, limited to 180px
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ClientMessageInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ClientMessageInputComponent, isStandalone: true, selector: "client-message-input", inputs: { message: "message" }, outputs: { onMessageChanged: "onMessageChanged", onEnterPressed: "onEnterPressed" }, viewQueries: [{ propertyName: "textarea", first: true, predicate: ["textarea"], descendants: true }], usesOnChanges: true, ngImport: i0, template: `<textarea
    #textarea
    [(ngModel)]="content"
    (input)="onInput()"
    (keydown)="onKeyDown($event)"
    class="client__message-input__textarea"
    placeholder="Type your message..."></textarea>`, isInline: true, styles: [".client__message-input__textarea{min-height:34px;max-height:180px;height:34px;width:100%;max-width:100%;resize:none;margin-bottom:-4px;padding:8px}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ClientMessageInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'client-message-input', standalone: true, encapsulation: ViewEncapsulation.None, imports: [FormsModule], template: `<textarea
    #textarea
    [(ngModel)]="content"
    (input)="onInput()"
    (keydown)="onKeyDown($event)"
    class="client__message-input__textarea"
    placeholder="Type your message..."></textarea>`, styles: [".client__message-input__textarea{min-height:34px;max-height:180px;height:34px;width:100%;max-width:100%;resize:none;margin-bottom:-4px;padding:8px}\n"] }]
        }], propDecorators: { message: [{
                type: Input,
                args: ['message']
            }], onMessageChanged: [{
                type: Output
            }], onEnterPressed: [{
                type: Output
            }], textarea: [{
                type: ViewChild,
                args: ['textarea']
            }] } });

class MessageSendComponent {
    onClickSend = new EventEmitter();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: MessageSendComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: MessageSendComponent, isStandalone: true, selector: "client-message-send", outputs: { onClickSend: "onClickSend" }, ngImport: i0, template: `
      <button class="client-message-send" (click)="onClickSend.emit()">
          <svg class="client-message-send__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>send</title>
              <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
          </svg>
      </button>`, isInline: true, styles: [".client-message-send{background:#000;border:none;outline:none;border-radius:0;height:100%;cursor:pointer}.client-message-send__icon{height:24px;width:24px;fill:#fff}.client-message-send:hover{background:#3f3f3f}.client-message-send:active{background:#5b5b5b}\n"], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: MessageSendComponent, decorators: [{
            type: Component,
            args: [{ selector: 'client-message-send', standalone: true, encapsulation: ViewEncapsulation.None, imports: [], template: `
      <button class="client-message-send" (click)="onClickSend.emit()">
          <svg class="client-message-send__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>send</title>
              <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
          </svg>
      </button>`, styles: [".client-message-send{background:#000;border:none;outline:none;border-radius:0;height:100%;cursor:pointer}.client-message-send__icon{height:24px;width:24px;fill:#fff}.client-message-send:hover{background:#3f3f3f}.client-message-send:active{background:#5b5b5b}\n"] }]
        }], propDecorators: { onClickSend: [{
                type: Output
            }] } });

class MessagesComponent {
    messages = [];
    container;
    previousMessagesLength = 0;
    ngOnChanges(changes) {
        if (changes['messages']) {
            const currentMessagesLength = changes['messages'].currentValue.length;
            if (currentMessagesLength !== this.previousMessagesLength) {
                this.previousMessagesLength = currentMessagesLength;
                setTimeout(() => {
                    this.scrollBottom();
                }, 250);
            }
        }
    }
    scrollBottom() {
        if (!this.container)
            return;
        const el = this.container.nativeElement;
        el.scrollTop = el.scrollHeight;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: MessagesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: MessagesComponent, isStandalone: true, selector: "client-messages", inputs: { messages: "messages" }, viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true }], usesOnChanges: true, ngImport: i0, template: `
    <div #container class="client-messages">
      <div class="client-messages__inner">
        <client-message *ngFor="let msg of messages" [message]="msg"></client-message>
      </div>
    </div>`, isInline: true, styles: [".client-messages{display:block;padding:0 8px;overflow:auto;scroll-behavior:smooth;height:100%;width:100%}.client-messages__inner{display:flex;flex-direction:column;justify-content:end}\n"], dependencies: [{ kind: "component", type: MessageComponent, selector: "client-message", inputs: ["message"] }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: MessagesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'client-messages', standalone: true, encapsulation: ViewEncapsulation.None, imports: [
                        MessageComponent,
                        NgForOf
                    ], template: `
    <div #container class="client-messages">
      <div class="client-messages__inner">
        <client-message *ngFor="let msg of messages" [message]="msg"></client-message>
      </div>
    </div>`, styles: [".client-messages{display:block;padding:0 8px;overflow:auto;scroll-behavior:smooth;height:100%;width:100%}.client-messages__inner{display:flex;flex-direction:column;justify-content:end}\n"] }]
        }], propDecorators: { messages: [{
                type: Input
            }], container: [{
                type: ViewChild,
                args: ['container']
            }] } });

class ClientError extends Error {
    constructor(message) {
        super(message);
    }
}

var MessageStatus;
(function (MessageStatus) {
    MessageStatus[MessageStatus["Pending"] = 0] = "Pending";
    MessageStatus[MessageStatus["Sent"] = 1] = "Sent";
})(MessageStatus || (MessageStatus = {}));
class LoraClientService {
    url = undefined;
    socket = null;
    shouldReconnect = false;
    isConnected = false;
    messages = [];
    messagesQueue = [];
    messageListeners = [];
    connect(url) {
        this.url = url;
        if (!this.url) {
            throw new ClientError('Can not start connection: server url not set.');
        }
        if (this.socket && this.socket.readyState !== WebSocket.CLOSED) {
            throw new ClientError('WebSocket connection is already open or opening.');
        }
        let resolvePromise;
        let rejectPromise;
        const promise = new Promise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
        });
        this.shouldReconnect = true;
        try {
            this.socket = new WebSocket(this.url);
            this.socket.onopen = () => {
                this.isConnected = true;
                console.log('Socket opened');
                // this.notifyConnectionStatusChange();
                // this.startHeartbeat();
                resolvePromise();
            };
            this.socket.onmessage = (event) => {
                const response = event.data;
                console.log(response + '');
                if (response === 'ping' || response === 'pong') {
                    return;
                }
                console.log('MESSAGE RECEIVED', response);
                const message = { id: crypto.randomUUID(), user: 'lora', content: response, time: Date.now() };
                this.addMessage(message);
            };
            this.socket.onclose = () => {
                console.log('Socket closed');
                this.isConnected = false;
                // this.notifyConnectionStatusChange();
                // this.stopHeartbeat();
                if (this.shouldReconnect) {
                    // this.scheduleReconnect();
                }
            };
            this.socket.onerror = (event) => {
                // console.error('WebSocket error:', event);
                rejectPromise?.(event);
            };
        }
        catch (e) {
            console.log("ERROR", e);
            return;
        }
        return promise;
    }
    sendMessage(message) {
        this.pushMessageToQueue(message);
        this.processQueue();
    }
    processQueue() {
        const message = this.messagesQueue.pop();
        if (!message)
            return;
        this.addMessage({ id: message.id, user: 'me', time: Date.now(), content: message.content });
        this.socket?.send(message?.content);
        message.status = MessageStatus.Sent;
    }
    pushMessageToQueue(message) {
        const id = crypto.randomUUID();
        this.messagesQueue.push({
            id,
            content: message,
            status: MessageStatus.Pending
        });
    }
    addMessage(message) {
        this.messages.push(message);
        this.messageListeners.forEach(listener => {
            listener(message);
        });
    }
    listenMessages(listener) {
        this.messageListeners.push(listener);
    }
    getMessages() {
        return [...this.messages];
    }
    disconnect() {
        this.messages = [];
        this.messagesQueue = [];
        if (this.socket) {
            this.socket.close(1000, "Closed by client");
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: LoraClientService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: LoraClientService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: LoraClientService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

var Status;
(function (Status) {
    Status["NotConnected"] = "not-connected";
    Status["Connected"] = "connected";
    Status["Connecting"] = "connecting";
    Status["Failed"] = "failed";
})(Status || (Status = {}));
class ClientComponent {
    loraClientService;
    url = ''; //= 'https://feynsinn.explore.de/lora-minirag/ws'
    isConnected = false;
    isConnecting = false;
    status = Status.NotConnected;
    messages = [];
    message = '';
    constructor(loraClientService) {
        this.loraClientService = loraClientService;
        this.loraClientService.listenMessages(this.onMessage.bind(this));
    }
    ngOnInit() {
        console.log('URL', this.url);
        this.connect().then();
    }
    async connect() {
        try {
            this.status = Status.Connecting;
            await this.loraClientService.connect(this.url);
            this.status = Status.Connected;
        }
        catch (e) {
            console.error('component error:', e);
            this.status = Status.Failed;
        }
    }
    sendMessage() {
        if (this.message.trim()) {
            this.loraClientService.sendMessage(this.message);
            this.message = '';
        }
    }
    onMessageChanged(message) {
        this.message = message;
    }
    onEnterPressed() {
        this.sendMessage();
    }
    onMessage(message) {
        this.messages = this.loraClientService.getMessages();
    }
    ngOnDestroy() {
        this.loraClientService.disconnect();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ClientComponent, deps: [{ token: LoraClientService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.2", type: ClientComponent, isStandalone: true, selector: "lora-client", inputs: { url: "url" }, ngImport: i0, template: `
    <div class="client__container" style="height: 700px">
      <client-messages class="client__messages" [messages]="messages"/>

      <div class="client__input">
        <client-message-input
          class="client__input-message"
          [message]="message"
          (onMessageChanged)="onMessageChanged($event)"
          (onEnterPressed)="onEnterPressed()"
        />

        <client-message-send class="client__input-submit" (onClickSend)="sendMessage()"/>
      </div>
    </div>`, isInline: true, styles: [".client__container{display:flex;flex-direction:column}.client__container *{box-sizing:border-box}.client__messages{display:block;border:1px solid #dcdcdc;border-bottom:none;height:100%;flex-grow:1;flex-shrink:1;overflow:hidden}.client__input{border:1px solid #dcdcdc;border-top:none;display:flex;flex-direction:row;flex-grow:0;flex-shrink:0}.client__input-message{flex-grow:1;padding:4px}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "component", type: ClientMessageInputComponent, selector: "client-message-input", inputs: ["message"], outputs: ["onMessageChanged", "onEnterPressed"] }, { kind: "component", type: MessageSendComponent, selector: "client-message-send", outputs: ["onClickSend"] }, { kind: "component", type: MessagesComponent, selector: "client-messages", inputs: ["messages"] }], encapsulation: i0.ViewEncapsulation.ShadowDom });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ClientComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lora-client', standalone: true, imports: [FormsModule, NgFor, MessageComponent, ClientMessageInputComponent, MessageSendComponent, MessagesComponent], template: `
    <div class="client__container" style="height: 700px">
      <client-messages class="client__messages" [messages]="messages"/>

      <div class="client__input">
        <client-message-input
          class="client__input-message"
          [message]="message"
          (onMessageChanged)="onMessageChanged($event)"
          (onEnterPressed)="onEnterPressed()"
        />

        <client-message-send class="client__input-submit" (onClickSend)="sendMessage()"/>
      </div>
    </div>`, encapsulation: ViewEncapsulation.ShadowDom, styles: [".client__container{display:flex;flex-direction:column}.client__container *{box-sizing:border-box}.client__messages{display:block;border:1px solid #dcdcdc;border-bottom:none;height:100%;flex-grow:1;flex-shrink:1;overflow:hidden}.client__input{border:1px solid #dcdcdc;border-top:none;display:flex;flex-direction:row;flex-grow:0;flex-shrink:0}.client__input-message{flex-grow:1;padding:4px}\n"] }]
        }], ctorParameters: () => [{ type: LoraClientService }], propDecorators: { url: [{
                type: Input,
                args: ['url']
            }] } });

/*
 * Public API Surface of client
 */
// export * from './lib/client.component';

/**
 * Generated bundle index. Do not edit.
 */

export { ClientComponent };
//# sourceMappingURL=lora-client.mjs.map
