import {
  defineConfig,
  presetUno,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno()
  ],
  transformers: [
    transformerDirectives()
  ],
  rules: [
    [
      'navbar-shadow', { 'box-shadow': '0 1px 4px rgb(0 21 41 / 8%)' }
    ],
    [
      'dark-navbar-shadow', { 'box-shadow': '0 1px 4px rgb(255 255 255 / 16%)' }
    ],
    [
      'login-navbar-shadow', { 'box-shadow': '0 -3px 8px 3px #727272' }
    ],
    [
      'sidebar-shadow', { 'box-shadow': '2px 0 8px #1d23290d;' }
    ],
    [
      'dark-sidebar-shadow', { 'box-shadow': '2px 0px 6px 0px #6060605e' }
    ]

  ]
})
