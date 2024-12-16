import { createI18n } from 'vue-i18n'
import en from '@/lang/en.json'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en
  },
})

export default i18n