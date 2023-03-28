const Hapi = require('@hapi/hapi');
//files
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localHost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);

  await server.start();
  console.log(`Server sedang berjalan di ${server.info.uri}`);
};

init();
