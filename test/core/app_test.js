import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

import App from '../../src/core/app';
import SearchBar from '../../src/components/search_bar';

describe('NavigationPage', () => {
  const component = mount(
    <Provider
      store={
        createStore(
          combineReducers(
            { history: () => [] }
          )
        )
      }
    >
      <App />
    </Provider>
  );

  it('contains the search bar', () => {
    const bar = component.find(SearchBar);
    expect(bar).to.have.length(1);
  });
});
