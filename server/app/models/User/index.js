import {createModel} from '@orion-js/models';

export default createModel({
  name: 'User',
  schema: () => require('./schema'),
  resolvers: () => require('./resolvers'),
});
