//  More map data structure
const updateUniqueItems = (items) => {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [keys, values] of items.entries()) {
    if (values === 1) {
      items.set(keys, 100);
    }
  }
  return items;
};

export default updateUniqueItems;
