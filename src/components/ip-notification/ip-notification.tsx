import { Component, Host, h, Element, getAssetPath, Prop } from '@stencil/core';

@Component({
  tag: 'ip-notification',
  styleUrl: './ip-notification.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class IpNotification {
  @Element() el: HTMLElement;

  @Prop() state: string;
  @Prop() iconSrc: string;
  @Prop() popDirection: string;
  @Prop() duration: string;

  componentDidLoad() {
    const closeBtn = this.el.shadowRoot.getElementById('close');
    const timer = this.el.shadowRoot.getElementById('timer');

    const delay = parseInt(this.duration) * 1000;

    this.setAnimation('normal');

    timer.animate({ inlineSize: ['100%', '0'] }, { delay: 1000, duration: delay, fill: 'forwards' });

    closeBtn.addEventListener('click', () => {
      this.setAnimation('alternate-reverse');

      setTimeout(() => {
        this.el.style.display = 'none';
      }, 1000);
    });

    setTimeout(() => {
      this.setAnimation('alternate-reverse');
    }, delay + 1200);

    this.setState();
  }

  setAnimation(play) {
    switch (this.popDirection) {
      case 'top':
        this.el.animate({ insetBlockStart: ['-100vh', '2vh'] }, { duration: 1000, direction: play, fill: 'forwards' });
        this.el.style.insetInline = '0';
        this.el.style.marginInline = 'auto';
        break;

      case 'left':
        this.el.animate({ insetInlineStart: ['-100vw', '2vw'] }, { duration: 1000, direction: play, fill: 'forwards' });
        break;

      case 'right':
        this.el.animate({ insetInlineEnd: ['-100vw', '2vw'] }, { duration: 1000, direction: play, fill: 'forwards' });
        break;

      default:
        this.el.animate({ insetBlockStart: ['-100vh', '2vh'] }, { duration: 1000, direction: play, fill: 'forwards' });
        break;
    }
  }

  setCloseAnimation() {
    switch (this.popDirection) {
      case 'top':
        this.el.animate({ insetBlockStart: ['-100vh', '2vh'] }, { duration: 1000, fill: 'forwards' });

        break;

      case 'left':
        this.el.animate({ insetInlineStart: ['-100vw', '2vw'] }, { duration: 1000, fill: 'forwards' });
        break;

      case 'right':
        this.el.animate({ insetInlineEnd: ['-100vw', '2vw'] }, { duration: 1000, fill: 'forwards' });
        break;

      default:
        this.el.animate({ insetBlockStart: ['-100vh', '2vh'] }, { duration: 1000, fill: 'forwards' });
        break;
    }
  }

  setState() {
    switch (this.state) {
      case 'success':
        this.el.style.setProperty('--ip-primary-color', 'var(--success)');
        break;

      case 'info':
        this.el.style.setProperty('--ip-primary-color', 'var(--info)');
        break;

      case 'warning':
        this.el.style.setProperty('--ip-primary-color', 'var(--warning)');
        break;

      case 'error':
        this.el.style.setProperty('--ip-primary-color', 'var(--error)');
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <Host>
        <span aria-hidden="true" id="timer"></span>

        <img
          src={this.iconSrc ? this.iconSrc : this.state ? getAssetPath(`assets/${this.state}.png`) : getAssetPath('assets/success.png')}
          alt=""
          class="icon"
          aria-hidden="true"
        />

        <div class="desc">
          <p class="title">Your success message</p>
          <p class="text">Describe the event and give further instructions if needed</p>
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
