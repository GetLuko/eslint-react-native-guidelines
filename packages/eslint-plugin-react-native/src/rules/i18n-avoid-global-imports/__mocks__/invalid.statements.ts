const invalidStatements: string[] = [
  `
const key = i18n.t('home.setupAccount.title');
`,
  `
const MyComponent = () => {
  const key = i18n.t('home.setupAccount.title');
  return <Text>{key}</Text>;
};
`,
];

export default invalidStatements;
