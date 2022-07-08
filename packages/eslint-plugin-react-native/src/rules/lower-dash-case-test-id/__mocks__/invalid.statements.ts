const invalidStatements: string[] = [
  `
import React from 'react';
import { Text } from 'react-native';

const ReactComponent = () => {
  return (
    <Text testID="HelloWorld">{'Test ID Prop'}</Text>
  );
};

export default ReactComponent;
`,
  `
import React from 'react';
import { Text } from 'react-native';

const ReactComponent = () => {
  return (
    <Text testID="helloWorld">{'Test ID Prop'}</Text>
  );
};

export default ReactComponent;
`,
  `
import React from 'react';
import { Text } from 'react-native';

const ReactComponent = () => {
  return (
    <Text testID="Hello World">{'Test ID Prop'}</Text>
  );
};

export default ReactComponent;
`,
];

export default invalidStatements;
