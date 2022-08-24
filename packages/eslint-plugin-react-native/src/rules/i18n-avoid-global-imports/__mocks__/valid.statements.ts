const validStatements: string[] = [
  `
const getKey = () => i18n.t('home.setupAccount.title');
`,
  `
const MyComponent = () => {
  const getKey = () => i18n.t('home.setupAccount.title');
  return <Text>{key}</Text>;
};
`,
];

export default validStatements;
