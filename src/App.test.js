import React from 'react'

import { shallow } from 'enzyme'
import App from '../src/App'
it('expect render App component', () => {
  expect(shallow(<App />)).toMatchSnapshot()
})
