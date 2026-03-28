export default {
  target: {
    runtime: 'frontend',
    framework: 'vue',
    detect: true
  },
  domains: {
    enabled: true,
    root: 'src/domains',
    sharedRoot: 'src/support',
    routerPath: 'src/app/router/index.ts',
    routesFilename: 'routes.ts',
    importBase: '@/domains',
    promptForExtras: true,
    promptOnMissingDomain: false
  },
  generators: {
    component: {
      output: 'components',
      nameSuffix: 'Component'
    },
    composable: {
      output: 'composables'
    },
    interface: {
      output: 'types'
    },
    type: {
      output: 'types'
    },
    view: {
      output: 'views',
      nameSuffix: 'View'
    },
    service: {
      output: 'services'
    },
    store: {
      output: 'stores'
    }
  }
}
