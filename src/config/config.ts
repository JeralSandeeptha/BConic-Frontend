const isProduction = process.env.NODE_ENV === 'production';

const getEnv = (key: string): string | undefined => {
  if (isProduction) {
    return window._env_?.[key];
  } else {
    return process.env[key];
  }
};

export const config = {
  REACT_APP_BACKEND_BASE_URL: getEnv('REACT_APP_BACKEND_BASE_URL'),
  MODE: getEnv('REACT_APP_MODE'),
};
