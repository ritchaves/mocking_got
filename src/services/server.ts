import { createServer, Model, Server } from 'miragejs';
import { Characters } from '../models/Characters';
import charactersMock from '../__mocks__/characters.json';
import culturesMock from '../__mocks__/cultures.json';

export function server(): Server {
  return createServer({
    environment: 'development',
    models: {
      gotCharacter: Model,
    },
    seeds(server: Server) {
      for (let i = 0; i <= charactersMock.length; i++) {
        server.create('gotCharacter', charactersMock[i]);
      }
    },
    routes() {
      this.get('/categories', () => culturesMock);
      this.get('/characters', (schema: any, request: any) => {
        const category = request.queryParams.categories;
        const searchName = request.queryParams.search;

        let response = schema.gotCharacters.all();

        if (category) {
          response = schema.gotCharacters
            .where((char: Characters) => char.culture?.includes(category))
            .filter((char: Characters) =>
              char.name.toLowerCase().includes(searchName?.toLowerCase()),
            );
        } else if (searchName) {
          response = schema.gotCharacters.where((char: Characters) =>
            char.name?.toLowerCase().includes(searchName?.toLowerCase()),
          );
        }
        return response;
      });
    },
  });
}
