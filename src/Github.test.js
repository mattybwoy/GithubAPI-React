import React from 'react';
import {render, screen, waitForElement}from '@testing-library/react';
import Github from './Github'

import mockResponse from './__mocks__/github.json'
//mock fetch and return the mock response json
jest.spyOn(global, "fetch").mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockResponse)
  })
})
test("shows my repository", async () => {
  render(<Github />)
  const element = await waitForElement(() => screen.getByText("Matthew Lock"))
  expect(element).toBeInTheDocument()
})
