let counter = 0;

export const v4 = jest.fn(() => {
  counter++;
  return `test-uuid-${counter}`;
});

export default { v4 };
