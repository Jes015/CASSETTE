'use client'
export type functionEvent <type>= (details?: CustomEventInit<type>) => unknown

export class CustomMessageEventApp <MessageDetailsType>{
    private readonly eventName: string
    private callback: functionEvent<MessageDetailsType>

    constructor(eventName: string) {
        this.eventName = 'custom:' + eventName
        this.callback = () => { }
    }

    public sendMessage(params?: { detail?: MessageDetailsType | null }) {
        const customEvent = new CustomEvent(this.eventName, { detail: params?.detail })
        document.dispatchEvent(customEvent)
    }

    public listenEvent(callback: functionEvent<MessageDetailsType>) {
        this.callback = callback
        document.addEventListener(this.eventName, callback)
    }

    public removeEvent() {
        document.removeEventListener(this.eventName, this.callback)
    }
}