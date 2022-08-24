const validStatements: string[] = [
  `
import i18n from '@locales/i18n';
const getKey = () => i18n.t('home.setupAccount.title');
`,
  `
import i18n from '@locales/i18n';
const MyComponent = () => {
  const getKey = () => i18n.t('home.setupAccount.title');
  return <Text>{key}</Text>;
};
`,
  `
import i18n from '@locales/i18n';
const MyComponent = () => {
  return <Text>{i18n.t('home.setupAccount.title')}</Text>;
};
`,
  `
import i18n from '@locales/i18n';
const getData = () => [
  {
    title: i18n.t('home.electricity.hours'),
  },
]
`,
  `
import i18n from '@locales/i18n';
export function setLocale(locale) {
  i18n.locale = locale;
}
`,
];

export default validStatements;
