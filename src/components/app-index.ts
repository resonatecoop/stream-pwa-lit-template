/* eslint-disable wc/guard-super-call */
/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type {
  Router,
  BeforeEnterObserver,
  RouterLocation,
} from '@vaadin/router'
import { LitElement, html, css } from 'lit'
import { customElement, state, query } from 'lit/decorators.js'

import { attachRouter } from '../router/index.js'
import tachyons from '../style/main.module.css'

import './header/header.js'

@customElement('app-index')
export class AppIndex extends LitElement implements BeforeEnterObserver {
  @query('main')
  private main!: HTMLElement
  @state()
  private location: RouterLocation | undefined
  pathname = '/'

  static styles = [
    tachyons,
    css`


      /* FIX custom-media not working here */
      @media screen and (min-width: 60em) {
        :host {
          padding-top: 0;
        }
      }      :host {
        display: flex;
        flex-direction: column;
        padding-top: 3rem;
      }
    `,
  ]

  render() {
    return html`
      <lit-header .pathname=${this.pathname}></lit-header>
      <!-- The main content is added / removed dynamically by the router -->
      <main role="main"></main>
    `
  }

  _handleRouteChange(
    event: CustomEvent<{
      router: Router
      location: RouterLocation
    }>
  ) {
    const { pathname } = event.detail.router.location
    this.pathname = pathname
    this.requestUpdate()
  }

  connectedCallback() {
    super.connectedCallback()
    window.addEventListener(
      'vaadin-router-location-changed',
      this._handleRouteChange.bind(this)
    )
  }

  disconnectedCallback() {
    window.removeEventListener(
      'vaadin-router-location-changed',
      this._handleRouteChange.bind(this)
    )
    super.disconnectedCallback()
  }

  async onBeforeEnter(location: RouterLocation) {
    this.location = location
    this.pathname = this.location!.pathname
  }

  firstUpdated() {
    attachRouter(this.main)
  }
}
