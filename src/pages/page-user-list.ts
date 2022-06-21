import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('page-user-list')
export class UserList extends LitElement {
  render() {
    return html` <h2>All users</h2> `
  }
}
