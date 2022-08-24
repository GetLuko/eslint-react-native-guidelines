const invalidStatements: string[] = [
  `
import i18n from '@locales/i18n';
const key = i18n.t('home.setupAccount.title');
`,
  `
import i18n from '@locales/i18n';
const MyComponent = () => {
  const key = i18n.t('home.setupAccount.title');
  return <Text>{key}</Text>;
};
`,
];

export default invalidStatements;
