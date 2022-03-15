import React from 'react'

import { shallow } from 'enzyme'
import { SearchBox } from '../search-box/search-box.component'
it('expect render SearchBox component', () => {
  expect(shallow(<SearchBox placeholder="search user" />)).toMatchSnapshot()
})
