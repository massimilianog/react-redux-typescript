FROM node:10-alpine AS build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . ./

RUN npm run build

FROM caddy

WORKDIR /srv

COPY --from=build /usr/src/app/build /srv

COPY api /srv

ENV CREATED 'today'
ENV VERSION 1
ENV REVISION 1

LABEL org.opencontainers.image.created=$CREATED
LABEL org.opencontainers.image.url="https://hub.docker.com/r/massimilianog/react-redux-typescript"
LABEL org.opencontainers.image.source="https://github.com/massimilianog/react-redux-typescript"
LABEL org.opencontainers.image.version=$VERSION
LABEL org.opencontainers.image.revision=$REVISION

EXPOSE 3001

COPY Caddyfile /srv/Caddyfile

CMD ["caddy", "run", "-config", "/srv/Caddyfile"]
