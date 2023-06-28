import { createTransform } from 'redux-persist';

export const userTransform = createTransform(
  (inboundState: any, key) => {
    return {
      ...inboundState,
    };
  },
  (outboundState: any, key): {} => {
    return {
      ...outboundState,
    };
  },
  { whitelist: ['user'] },
);
