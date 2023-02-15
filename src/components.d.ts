/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IpNotification {
        "duration": string;
        "iconSrc": string;
        "popDirection": string;
        "state": string;
    }
}
declare global {
    interface HTMLIpNotificationElement extends Components.IpNotification, HTMLStencilElement {
    }
    var HTMLIpNotificationElement: {
        prototype: HTMLIpNotificationElement;
        new (): HTMLIpNotificationElement;
    };
    interface HTMLElementTagNameMap {
        "ip-notification": HTMLIpNotificationElement;
    }
}
declare namespace LocalJSX {
    interface IpNotification {
        "duration"?: string;
        "iconSrc"?: string;
        "popDirection"?: string;
        "state"?: string;
    }
    interface IntrinsicElements {
        "ip-notification": IpNotification;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ip-notification": LocalJSX.IpNotification & JSXBase.HTMLAttributes<HTMLIpNotificationElement>;
        }
    }
}
