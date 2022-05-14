const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`Selection ${selection} does not Exist in html`);
  }
};

export default getElement;
