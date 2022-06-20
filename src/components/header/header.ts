import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { urlForName } from '../../router/index.js';
import tachyons from '../../style/main.module.css';
import headerStyle from './header.module.css';

import '../icon/icon.js';

@customElement('lit-header')
export class LitHeader extends LitElement {
  @property({
    type: String,
    hasChanged(newVal: string, oldVal: string) {
      return newVal?.toLowerCase() !== oldVal?.toLowerCase();
    },
  })
  pathname = '/';

  static styles = [tachyons, headerStyle];

  render() {
    return html`
      <header
        role="banner"
        class="bg-white black bg-white--light black--light bg-black--dark white--dark fixed sticky-l left-0 top-0-l bottom-0 right-0 w-100 z-9999 flex items-center bt bt-0-l bb-l bw b--mid-gray b--mid-gray--light b--near-black--dark"
      >
        <nav role="navigation" class="relative dropdown-navigation--focus">
          <ul
            role="menu"
            class="list ma0 pa0 bg-white bg-white--light bg-black--dark bg-transparent-l fixed w-100 w-auto-l top-0 left-0 flex relative-l flex-l bb bb-0-l bw b--mid-gray b--mid-gray--light b--near-black--dark"
            style="height:3rem"
          >
            <li role="menuitem">
              <a
                href="${urlForName('home')}"
                class="link flex items-center flex-shrink-0 h-100 ph2 ml2 overflow-hidden"
              >
                <lit-icon name="logo-wordmark" size="md"></lit-icon>
              </a>
            </li>
            <li class="flex flex-auto-l w-100-l justify-center" role="menuitem">
              <button
                title="Open learn menu"
                class="bg-transparent near-black near-black--light near-white--dark bn dropdown-toggle grow pa3"
              >
                <div class="flex justify-center items-center">
                  <span>Learn</span>
                  <div class="ph2">
                    <lit-icon name="caret-down" size="xxs"></lit-icon>
                  </div>
                </div>
              </button>
              <ul
                role="menu"
                class="bg-white black bg-black--dark white--dark bg-white--light black--light ba bw b--mid-gray b--mid-gray--light b--near-black--dark list ma0 pa0 absolute right-0 dropdown z-999 top-100"
                style="left:0;width:120px;"
              >
                <li>
                  <a
                    class="link db w-100 ph3 pv2 bg-animate hover-bg-light-gray hover-bg-light-gray--light hover-bg-dark-gray--dark"
                    href="https://resonate.coop/about"
                    target="_blank"
                    >About</a
                  >
                </li>
                <li>
                  <a
                    class="link db w-100 ph3 pv2 bg-animate hover-bg-light-gray hover-bg-light-gray--light hover-bg-dark-gray--dark"
                    href="https://resonate.coop/pricing"
                    target="_blank"
                    >Pricing</a
                  >
                </li>
                <li>
                  <a
                    class="link db w-100 ph3 pv2 bg-animate hover-bg-light-gray hover-bg-light-gray--light hover-bg-dark-gray--dark"
                    href="https://resonate.coop/the-coop"
                    target="_blank"
                    >The Co-op</a
                  >
                </li>
                <li>
                  <a
                    class="link db w-100 ph3 pv2 bg-animate hover-bg-light-gray hover-bg-light-gray--light hover-bg-dark-gray--dark"
                    href="/faq"
                    >FAQ</a
                  >
                </li>
                <li>
                  <a
                    class="link db w-100 ph3 pv2 bg-animate hover-bg-light-gray hover-bg-light-gray--light hover-bg-dark-gray--dark"
                    href="https://community.resonate.coop"
                    target="_blank"
                    >Forum</a
                  >
                </li>
              </ul>
            </li>
            <li class="flex w-100 justify-end clip-l" role="menuitem">
              <button class="dn-l mr4 bn bg-transparent pa0">
                <div class="flex items-center justify-center">
                  <lit-icon name="search" size="sm"></lit-icon>
                </div>
              </button>
            </li>
          </ul>
        </nav>

        <div class="search flex-l justify-center-l w-100-l">
          <button class="js bn dn db-l bg-transparent" style="height:3rem">
            <div class="flex items-center">
              <lit-icon name="search" size="sm"></lit-icon>
              <span class="db pl3 near-black near-black--light near-white--dark"
                >Search</span
              >
            </div>
          </button>
        </div>

        <nav
          role="navigation"
          aria-label="Main navigation"
          class="dropdown-navigation flex w-100 flex-auto justify-end-l"
        >
          <ul
            role="menu"
            class="flex list ma0 pa0 w-100 w-90-l justify-around items-center mr3"
          >
            <li
              role="menuitem"
              class="flex flex-auto w-100 justify-center relative${/\/artists|\/labels|\/tracks|\/releases/.test(
                this.pathname
              )
                ? ' active'
                : ''}"
            >
              <a
                href="/artists"
                class="link near-black near-black--light near-white--dark pv2 ph3"
                >Browse</a
              >
            </li>
            <li
              role="menuitem"
              class="flex flex-auto w-100 justify-center relative${this.pathname.startsWith(
                '/discover'
              )
                ? ' active'
                : ''}"
            >
              <a
                href="${urlForName('discover')}"
                class="link db near-black near-black--light near-white--dark pv2 ph3"
                >Discover</a
              >
            </li>
            <li
              role="separator"
              class="flex flex-auto w-100 justify-center"
            ></li>
            <li
              role="menuitem"
              class="flex flex-auto justify-center w-100 grow"
            >
              <a
                href="/login"
                class="link pv1 ph3 ttu ba b--mid-gray b--dark-gray--dark db f6 b"
                >Log In</a
              >
            </li>
          </ul>
        </nav>
      </header>
      <slot></slot>
    `;
  }
}
