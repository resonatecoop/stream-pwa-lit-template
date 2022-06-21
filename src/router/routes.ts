/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Route, Context, Commands } from '@vaadin/router'

export const routes: Route[] = [
  {
    path: '/',
    name: 'home',
    action: (_context: Context, commands: Commands) => {
      return commands.redirect('/discover')
    },
  },
  {
    path: '/users',
    children: [
      {
        path: '/',
        component: 'page-user-list',
        action: async () => {
          await import('../pages/page-user-list.js')
        },
      },
      {
        path: '/:user',
        component: 'page-user-profile',
        action: async () => {
          await import('../pages/page-user-profile.js')
        },
      },
    ],
  },
  {
    path: '/discover',
    name: 'discover',
    component: 'page-discover',
    action: async () => {
      await import('../pages/page-discover.js')
    },
  },
  {
    path: '/about',
    name: 'about',
    component: 'page-about',
    action: async () => {
      await import('../pages/page-about.js')
    },
  },
  {
    path: '(.*)',
    name: 'not-found',
    component: 'page-not-found',
    action: async () => {
      await import('../pages/page-not-found.js')
    },
  },
]
