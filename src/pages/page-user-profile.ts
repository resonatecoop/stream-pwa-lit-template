import type { BeforeEnterObserver, RouterLocation } from '@vaadin/router'
import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

@customElement('page-user-profile')
export class UserProfile extends LitElement implements BeforeEnterObserver {
  @state()
  private user = ''

  render() {
    return html` <h2>User ${this.user}</h2> `
  }

  async onBeforeEnter(location: RouterLocation) {
    this.user = location.params.user as string
  }
}
