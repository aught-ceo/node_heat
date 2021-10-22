import { serverHttp } from './app';

serverHttp.listen(4000, () =>
  // eslint-disable-next-line no-console
  console.log(`🚀 Server is running at http://localhost:4000`)
);
