const invalidStatements: string[] = [
  `
import i18n from '@locales/i18n';
const key = i18n.t('home.setupAccount.title');
`,
  `
import i18n from '@locales/i18n';
const values = {
  key: i18n.t('home.setupAccount.title'),
};
`,
];

export default invalidStatements;
