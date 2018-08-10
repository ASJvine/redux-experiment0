// object containing the debounced action (referenced by action.type)
const pending = {};

const debounceMiddleware = () => (next) => (action) => {
  const { debounce } = action.meta || {};

  if (!debounce) {
    return next(action);
  }

  if(pending[action.type]) {
    clearTimeout(pending[action.type]);
  }

  // save the latest action
  pending[action.type] = setTimeout(
    () => {
      delete pending[action.type];
      next(action);
    },
    debounce
  );
};

export default debounceMiddleware;
