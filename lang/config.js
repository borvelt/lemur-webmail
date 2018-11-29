module.exports = {
  locales: [
    {
      code: 'en',
      name: 'English',
      iso: 'en-US',
      file: 'en-US.js'
    },
    {
      code: 'fa',
      name: 'فارسی',
      iso: 'fa-IR',
      file: 'fa-IR.js'
    }
  ],
  lazy: true,
  langDir: 'lang/',
  defaultLocale: 'en',
  vueI18n: {
    locale: 'en',
    fallbackLocale: 'en'
  }
}
