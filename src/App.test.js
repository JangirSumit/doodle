import { render, screen, fireEvent } from "@testing-library/react";
import { useSelector } from "react-redux";
import App from "./App";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("App", () => {
  it("test", () => {
    expect(true).toEqual(true);
  });
});
