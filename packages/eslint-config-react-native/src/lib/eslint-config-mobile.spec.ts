import { eslintConfigMobile } from './eslint-config-react-native';

describe('eslintConfigMobile', () => {
  it('should work', () => {
    expect(eslintConfigMobile()).toEqual('eslint-config-react-native');
  });
});
