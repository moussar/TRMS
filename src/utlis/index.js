export const denormalize = data => {
  return Object.keys(data).map(id => data[id]);
};
