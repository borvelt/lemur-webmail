export default function({ app }) {
  const dir = detectDir(app.i18n.locale)
  app.head.htmlAttrs = { dir }
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    const dir = detectDir(newLocale)
    app.head.htmlAttrs = { dir }
  }
}

const detectDir = locale => (locale === 'fa' && 'rtl') || 'ltr'
