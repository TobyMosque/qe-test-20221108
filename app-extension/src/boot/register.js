import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-qe-test-20220811'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
