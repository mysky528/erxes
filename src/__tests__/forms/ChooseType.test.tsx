import { mount, shallow } from 'enzyme';
import ChooseType from 'modules/forms/components/step/ChooseType';
import React from 'react';

describe('ChooseType component', () => {
  const defaultProps = {
    type: 'string',
    onChange: (name: 'type', value: string) => null,
    color: 'pink',
    theme: 'default'
  };

  test('renders shallow successfully', () => {
    shallow(<ChooseType {...defaultProps} />);
  });
});