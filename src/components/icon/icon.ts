import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import tachyons from '../../style/main.module.css'

@customElement('lit-icon')
export class LitIcon extends LitElement {
  @property({ type: String }) name = 'logo'
  @property({ type: String }) size = 'sm'

  static styles = [
    tachyons,
    css`
      :host {
        display: flex;
      }
      svg {
        display: inline-block;
        width: var(--width-2);
        height: var(--width-2);
        fill: currentcolor;
      }
    `,
  ]

  render() {
    return html`
      <svg
        viewBox="0 0 16 16"
        class="icon icon-${this.name} icon--${this.size}"
      >
        <use href="icons.svg#icon-${this.name}" />
      </svg>
    `
  }
}
