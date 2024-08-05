import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgFor } from "@angular/common";
import { MessageComponent } from "../message/message.component";
import { ClientMessageInputComponent } from "../message-input/message-input.component";
import { MessageSendComponent } from "../message-send/message-send.component";
import { MessagesComponent } from "../messages/messages.component";
import * as i0 from "@angular/core";
import * as i1 from "../../services/lora-client.service";
var Status;
(function (Status) {
    Status["NotConnected"] = "not-connected";
    Status["Connected"] = "connected";
    Status["Connecting"] = "connecting";
    Status["Failed"] = "failed";
})(Status || (Status = {}));
export class ClientComponent {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.2", ngImport: i0, type: ClientComponent, deps: [{ token: i1.LoraClientService }], target: i0.ɵɵFactoryTarget.Component });
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
        }], ctorParameters: () => [{ type: i1.LoraClientService }], propDecorators: { url: [{
                type: Input,
                args: ['url']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9sb3JhLWNsaWVudC9zcmMvbGliL2NsaWVudC9jbGllbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFxQixpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXRDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBRTVFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7QUFFakUsSUFBSyxNQUtKO0FBTEQsV0FBSyxNQUFNO0lBQ1Qsd0NBQThCLENBQUE7SUFDOUIsaUNBQXVCLENBQUE7SUFDdkIsbUNBQXlCLENBQUE7SUFDekIsMkJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUxJLE1BQU0sS0FBTixNQUFNLFFBS1Y7QUF3QkQsTUFBTSxPQUFPLGVBQWU7SUFTTjtJQVJOLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQSxpREFBaUQ7SUFDeEUsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUNwQixZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLE1BQU0sR0FBVyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBRXJDLFFBQVEsR0FBb0IsRUFBRSxDQUFDO0lBQy9CLE9BQU8sR0FBVyxFQUFFLENBQUM7SUFFckIsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBR25FLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR0QsS0FBSyxDQUFDLE9BQU87UUFDWCxJQUFJLENBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDaEMsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDakMsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM5QixDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNwQixDQUFDO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLE9BQWU7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFNBQVMsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUV0QyxDQUFDO3VHQXZEVSxlQUFlOzJGQUFmLGVBQWUsK0ZBbEJoQjs7Ozs7Ozs7Ozs7Ozs7V0FjRCwrY0FmQyxXQUFXLCtCQUEyQiwyQkFBMkIsdUlBQUUsb0JBQW9CLDBGQUFFLGlCQUFpQjs7MkZBbUJ6RyxlQUFlO2tCQXRCM0IsU0FBUzsrQkFDRSxhQUFhLGNBQ1gsSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSwyQkFBMkIsRUFBRSxvQkFBb0IsRUFBRSxpQkFBaUIsQ0FBQyxZQUMzRzs7Ozs7Ozs7Ozs7Ozs7V0FjRCxpQkFDTSxpQkFBaUIsQ0FBQyxTQUFTO3NGQUk1QixHQUFHO3NCQUFoQixLQUFLO3VCQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7TmdGb3J9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7TG9yYUNsaWVudFNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xvcmEtY2xpZW50LnNlcnZpY2UnO1xuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tIFwiLi4vbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDbGllbnRNZXNzYWdlSW5wdXRDb21wb25lbnR9IGZyb20gXCIuLi9tZXNzYWdlLWlucHV0L21lc3NhZ2UtaW5wdXQuY29tcG9uZW50XCI7XG5pbXBvcnQge01lc3NhZ2VTZW5kQ29tcG9uZW50fSBmcm9tIFwiLi4vbWVzc2FnZS1zZW5kL21lc3NhZ2Utc2VuZC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q2xpZW50TWVzc2FnZX0gZnJvbSBcIi4uLy4uL3R5cGVzL0NsaWVudE1lc3NhZ2VcIjtcbmltcG9ydCB7TWVzc2FnZXNDb21wb25lbnR9IGZyb20gXCIuLi9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnRcIjtcblxuZW51bSBTdGF0dXMge1xuICBOb3RDb25uZWN0ZWQgPSAnbm90LWNvbm5lY3RlZCcsXG4gIENvbm5lY3RlZCA9ICdjb25uZWN0ZWQnLFxuICBDb25uZWN0aW5nID0gJ2Nvbm5lY3RpbmcnLFxuICBGYWlsZWQgPSAnZmFpbGVkJyxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9yYS1jbGllbnQnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIE5nRm9yLCBNZXNzYWdlQ29tcG9uZW50LCBDbGllbnRNZXNzYWdlSW5wdXRDb21wb25lbnQsIE1lc3NhZ2VTZW5kQ29tcG9uZW50LCBNZXNzYWdlc0NvbXBvbmVudF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNsaWVudF9fY29udGFpbmVyXCIgc3R5bGU9XCJoZWlnaHQ6IDcwMHB4XCI+XG4gICAgICA8Y2xpZW50LW1lc3NhZ2VzIGNsYXNzPVwiY2xpZW50X19tZXNzYWdlc1wiIFttZXNzYWdlc109XCJtZXNzYWdlc1wiLz5cblxuICAgICAgPGRpdiBjbGFzcz1cImNsaWVudF9faW5wdXRcIj5cbiAgICAgICAgPGNsaWVudC1tZXNzYWdlLWlucHV0XG4gICAgICAgICAgY2xhc3M9XCJjbGllbnRfX2lucHV0LW1lc3NhZ2VcIlxuICAgICAgICAgIFttZXNzYWdlXT1cIm1lc3NhZ2VcIlxuICAgICAgICAgIChvbk1lc3NhZ2VDaGFuZ2VkKT1cIm9uTWVzc2FnZUNoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgKG9uRW50ZXJQcmVzc2VkKT1cIm9uRW50ZXJQcmVzc2VkKClcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxjbGllbnQtbWVzc2FnZS1zZW5kIGNsYXNzPVwiY2xpZW50X19pbnB1dC1zdWJtaXRcIiAob25DbGlja1NlbmQpPVwic2VuZE1lc3NhZ2UoKVwiLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbSxcbiAgc3R5bGVVcmxzOiBbJy4vY2xpZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2xpZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoJ3VybCcpIHVybCA9ICcnOy8vPSAnaHR0cHM6Ly9mZXluc2lubi5leHBsb3JlLmRlL2xvcmEtbWluaXJhZy93cydcbiAgaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgaXNDb25uZWN0aW5nID0gZmFsc2U7XG4gIHN0YXR1czogU3RhdHVzID0gU3RhdHVzLk5vdENvbm5lY3RlZDtcblxuICBtZXNzYWdlczogQ2xpZW50TWVzc2FnZVtdID0gW107XG4gIG1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9yYUNsaWVudFNlcnZpY2U6IExvcmFDbGllbnRTZXJ2aWNlKSB7XG4gICAgdGhpcy5sb3JhQ2xpZW50U2VydmljZS5saXN0ZW5NZXNzYWdlcyh0aGlzLm9uTWVzc2FnZS5iaW5kKHRoaXMpKTtcblxuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnVVJMJywgdGhpcy51cmwpO1xuXG4gICAgdGhpcy5jb25uZWN0KCkudGhlbigpO1xuICB9XG5cblxuICBhc3luYyBjb25uZWN0KCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0YXR1cyA9IFN0YXR1cy5Db25uZWN0aW5nO1xuICAgICAgYXdhaXQgdGhpcy5sb3JhQ2xpZW50U2VydmljZS5jb25uZWN0KHRoaXMudXJsKTtcbiAgICAgIHRoaXMuc3RhdHVzID0gU3RhdHVzLkNvbm5lY3RlZDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdjb21wb25lbnQgZXJyb3I6JywgZSk7XG4gICAgICB0aGlzLnN0YXR1cyA9IFN0YXR1cy5GYWlsZWQ7XG4gICAgfVxuICB9XG5cbiAgc2VuZE1lc3NhZ2UoKSB7XG4gICAgaWYgKHRoaXMubWVzc2FnZS50cmltKCkpIHtcbiAgICAgIHRoaXMubG9yYUNsaWVudFNlcnZpY2Uuc2VuZE1lc3NhZ2UodGhpcy5tZXNzYWdlKTtcbiAgICAgIHRoaXMubWVzc2FnZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIG9uTWVzc2FnZUNoYW5nZWQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgfVxuXG4gIG9uRW50ZXJQcmVzc2VkKCkge1xuICAgIHRoaXMuc2VuZE1lc3NhZ2UoKTtcbiAgfVxuXG4gIG9uTWVzc2FnZShtZXNzYWdlOiBDbGllbnRNZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlcyA9IHRoaXMubG9yYUNsaWVudFNlcnZpY2UuZ2V0TWVzc2FnZXMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubG9yYUNsaWVudFNlcnZpY2UuZGlzY29ubmVjdCgpO1xuXG4gIH1cbn1cbiJdfQ==