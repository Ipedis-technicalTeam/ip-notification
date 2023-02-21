import { Component, Host, h, Element, getAssetPath, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'ip-notification',
  styleUrl: './ip-notification.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class IpNotification {
  @Element() el: HTMLElement;

  /** The alert message  */
  @Prop() message: string = 'Your success message';

  /** The alert description */
  @Prop() description: string = 'Describe the event and give further instructions if needed';

  /** The alert state (Options: "success", "info", "warning", "error") */
  @Prop() state: string = 'success';

  /** The icon to display - optional */
  @Prop() iconSrc: string;

  /** The direction the alert will display (Options: "left", "right") - optional */
  @Prop() popDirection: string;

  /** The duration of the alert (Options: in seconds) - optional */
  @Prop() duration: string;

  /** The id to trigger the alert (Options: a button or link should have the attribute "data-trigger" with the trigger-id) - optional */
  @Prop() triggerId: string;

  @State() isActive: boolean = false;

  @Watch('isActive')
  watchStateHandler(newValue: boolean) {
    this.isActive = newValue;
  }

  connectedCallback() {
    const triggerBtn = this.triggerId ? document.querySelector(`[data-trigger="${this.triggerId}"]`) : document.querySelector('[data-trigger]');

    triggerBtn.addEventListener('click', () => {
      this.isActive = true;
    });
  }

  componentWillLoad() {
    this.hideAlert();
    this.setState();
  }

  componentDidLoad() {
    const closeBtn = this.el.shadowRoot.getElementById('close');

    closeBtn.addEventListener('click', () => {
      this.setAnimation('alternate-reverse');

      setTimeout(() => {
        this.hideAlert();
        this.isActive = false;
      }, 100);
    });
  }

  componentDidUpdate() {
    const timer = this.el.shadowRoot.getElementById('timer');
    const duration = parseFloat(this.duration) * 1000;

    if (this.isActive) {
      this.showAlert();

      this.setAnimation('normal');

      if (this.duration) {
        timer.animate({ inlineSize: ['100%', '0'] }, { delay: 1000, duration, fill: 'forwards' });

        setTimeout(() => {
          this.setAnimation('alternate-reverse');
        }, duration + 1200);

        setTimeout(() => {
          this.hideAlert();
          this.isActive = false;
        }, duration + 1200 + 100);
      }
    }
  }

  hideAlert() {
    this.el.style.display = 'none';
    this.el.setAttribute('tabindex', '-1');
  }

  showAlert() {
    this.el.style.display = 'grid';
    this.el.setAttribute('tabindex', '0');
  }

  setAnimation(direction) {
    switch (this.popDirection) {
      case 'left':
        this.el.animate({ insetInlineStart: ['-100vmax', '2vmax'] }, { duration: 1000, direction, fill: 'forwards' });
        break;

      case 'right':
        this.el.animate({ insetInlineEnd: ['-100vmax', '2vmax'] }, { duration: 1000, direction, fill: 'forwards' });
        break;

      default:
        this.el.animate({ insetInlineEnd: ['-100vmax', '2vmax'] }, { duration: 1000, direction, fill: 'forwards' });
        break;
    }
  }

  setState() {
    switch (this.state) {
      case 'success':
        this.el.style.setProperty('--ip-notification-primary-color', 'var(--notification-success)');
        break;

      case 'info':
        this.el.style.setProperty('--ip-notification-primary-color', 'var(--notification-info)');
        break;

      case 'warning':
        this.el.style.setProperty('--ip-notification-primary-color', 'var(--notification-warning)');
        break;

      case 'error':
        this.el.style.setProperty('--ip-notification-primary-color', 'var(--notification-error)');
        break;

      default:
        this.el.style.setProperty('--ip-notification-primary-color', 'var(--notification-success)');
        break;
    }
  }

  render() {
    return (
      <Host>
        <span aria-hidden="true" id="timer"></span>

        <img src={this.iconSrc ? this.iconSrc : getAssetPath(`assets/${this.state}.png`)} alt="" class="icon" aria-hidden="true" />

        <div class="message">
          <p part="title" class="title">
            {/* The title of the alert message */}
            {this.message}
          </p>
          <p part="desc" class="desc">
            {/* The description of the alert message */}
            {this.description}
          </p>
        </div>

        <button id="close">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.625 4.375L4.375 15.625" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.625 15.625L4.375 4.375" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </Host>
    );
  }
}
