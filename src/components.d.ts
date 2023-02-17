/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IpNotification {
        /**
          * The alert description
         */
        "description": string;
        /**
          * The duration of the alert (Options: in seconds) - optional
         */
        "duration": string;
        /**
          * The icon to display - optional
         */
        "iconSrc": string;
        /**
          * The alert message
         */
        "message": string;
        /**
          * The direction the alert will display (Options: "left", "right") - optional
         */
        "popDirection": string;
        /**
          * The alert state (Options: "success", "info", "warning", "error")
         */
        "state": string;
        /**
          * The id to trigger the alert (Options: a button or link should have the attribute "data-trigger" with the trigger-id) - optional
         */
        "triggerId": string;
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
        /**
          * The alert description
         */
        "description"?: string;
        /**
          * The duration of the alert (Options: in seconds) - optional
         */
        "duration"?: string;
        /**
          * The icon to display - optional
         */
        "iconSrc"?: string;
        /**
          * The alert message
         */
        "message"?: string;
        /**
          * The direction the alert will display (Options: "left", "right") - optional
         */
        "popDirection"?: string;
        /**
          * The alert state (Options: "success", "info", "warning", "error")
         */
        "state"?: string;
        /**
          * The id to trigger the alert (Options: a button or link should have the attribute "data-trigger" with the trigger-id) - optional
         */
        "triggerId"?: string;
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
