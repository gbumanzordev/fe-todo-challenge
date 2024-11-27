 import { ApplicationConfig, provideZoneChangeDetection, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);
      const link = httpLink.create({
        // TODO: Move to .env
        uri: 'https://syn-api-prod.herokuapp.com/graphql',
      });

      const authLink = setContext((_, { headers }) => {
        // TODO: Move to .env
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiNWNhMWU2OGItNTEyMS00MzM1LWFiNWEtYjUxNzI3ODQxNGJjIiwicHJvamVjdElkIjoiMmI2MjU3YjctMjFkMi00NGE1LTlkZTgtM2E5MDNlZDdjMTcwIiwiZnVsbE5hbWUiOiJHZXJzb24gQmxhZGltaXIgVW1hbnpvciBBbGJlcnRvIiwiZW1haWwiOiJjb250YWN0QGdidW1hbnpvci5kZXYiLCJpYXQiOjE3MzI1Njk1MjF9.bgpNb475dHapJUaCXWGknhcFA8SmnIaat4D7cy2GOiM';
        return {
          headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
          },
        };
      });

      return {
        link: authLink.concat(link),
        cache: new InMemoryCache(),
      };
    }),
  ],
};
