import createLoggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import configureStorage from './configureStorage';
import swApiMiddleware from './swApiMiddleware';

const configureMiddleware = () => {
  const middleware = [
    thunkMiddleware,
    swApiMiddleware,
  ];

  const storageMiddleware = configureStorage();

  if (storageMiddleware) {
    middleware.push(storageMiddleware);
  }

  const enableLogger = process.env.NODE_ENV !== 'production';
  if (enableLogger) {
    const logger = createLoggerMiddleware({
      collapsed: true,
      stateTransformer: state => JSON.parse(JSON.stringify(state)),
    });
    middleware.push(logger);
  }

  return middleware;
};

export default configureMiddleware;
