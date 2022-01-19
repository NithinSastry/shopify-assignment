const storage = window.localStorage;

export const setTickets = (data = {}) => {
  storage.setItem('tickets', JSON.stringify(data));
};

export const getTickets = () => {
  return JSON.parse(storage.getItem('tickets'));
};
