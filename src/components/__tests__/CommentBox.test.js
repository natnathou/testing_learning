import React from 'react';
import { mount } from 'enzyme';
import { CommentBox } from 'components/CommentBox';
import { Root } from 'components/Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  wrapped
    .find('textarea')
    .simulate('change', { target: { value: 'new comment' } });

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});
