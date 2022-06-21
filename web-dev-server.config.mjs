/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import replace from '@rollup/plugin-replace'
import { esbuildPlugin } from '@web/dev-server-esbuild'
import { fromRollup } from '@web/dev-server-rollup'
import postcssCustomMedia from 'postcss-custom-media'
import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'
import litcss from 'rollup-plugin-lit-css'
import styles from 'rollup-plugin-styles'

const litcssPlugin = fromRollup(litcss)
const stylesPlugin = fromRollup(styles)
const NODE_ENV = process.env.NODE_ENV || 'development'

export default {
  port: 8080,
  appIndex: 'index.html',
  open: process.env.NODE_ENV !== 'production',
  nodeResolve: {
    exportConditions: ['development'],
  },
  preserveSymlinks: true,
  mimeTypes: {
    // serve .module.css files as js
    '**/*.css': 'js',
  },
  plugins: [
    stylesPlugin({
      mode: 'emit',
      plugins: [
        postcssImport(),
        postcssPresetEnv({
          stage: 1,
          features: {
            'nesting-rules': true,
          },
        }),
        postcssCustomMedia({
          importFrom: [
            {
              customMedia: {
                '--breakpoint-not-small': 'screen and (min-width: 30em)',
              },
            },
            {
              customMedia: {
                '--breakpoint-medium':
                  'screen and (min-width: 30em) and (max-width: 60em)',
              },
            },
            {
              customMedia: {
                '--breakpoint-large': 'screen and (min-width: 60em)',
              },
            },
          ],
        }),
      ],
    }),
    esbuildPlugin({ ts: true }),
    litcssPlugin(),
    ...(NODE_ENV !== 'development'
      ? [
          fromRollup(replace)({
            preventAssignment: true,
            include: 'src/**/*.ts',
            exclude: 'src/config.*.ts',
            delimiters: ['', ''],
            values: {
              './config.js': `./config.${NODE_ENV}.js`,
            },
          }),
        ]
      : []),
  ],
}
