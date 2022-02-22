import * as React from "react";
import { render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom";
// import About from '~/pages/about'
import About from "../../pages/about";

test("test about page", () => {
  render(<About />);

  const title = screen.getByRole("heading");
  const paragraph = screen.getByTestId("paragraph");

  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  expect(title).toHaveTextContent("judul ini");
  expect(paragraph).toHaveTextContent("tolong laaah");
});
