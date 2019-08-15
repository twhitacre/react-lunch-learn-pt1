export const addWhisky = name => ({
  payload: { name, tasted: false },
  type: 'ADD_WHISKY',
});
