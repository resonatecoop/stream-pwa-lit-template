/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

import config from '../config.js'
import { PageElement } from '../helpers/page-element.js'

@customElement('page-home')
export class PageHome extends PageElement {
  static styles = css`
    section {
      padding: 1rem;
    }
  `

  render() {
    return html`
      <section>
        <h1>Home</h1>
      </section>
    `
  }

  meta() {
    return {
      title: config.appName,
      titleTemplate: null,
      description: config.appDescription,
    }
  }
}
