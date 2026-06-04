// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

if (typeof require !== "undefined" && !require.context) {
  require.context = (
    directory,
    useSubdirectories = false,
    regExp = /^\.\//,
  ) => {
    const keys = ["test-image-1.png", "test-image-2.png", "test-image-3.png"];
    const req = (key) => key;
    req.keys = () => keys;
    return req;
  };
}
