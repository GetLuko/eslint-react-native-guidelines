const validStatements: string[] = [
  `
import React from 'react';
import { Text } from 'react-native';

const ReactComponent = () => {
  return (
    <Text testID="hello-world">{'Test ID Prop'}</Text>
  );
};

export default ReactComponent;
`,
  `
import React from 'react';
import { Text } from 'react-native';

const ReactComponent = () => {
  return (
    <Text testID="hello">{'Test ID Prop'}</Text>
  );
};

export default ReactComponent;
`,
];

export default validStatements;
