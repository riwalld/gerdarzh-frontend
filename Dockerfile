FROM node:20.8-alpine as build

ARG VITE_BACKEND_URL
ARG VITE_API_ENDPOINT

ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
ENV VITE_API_ENDPOINT=${VITE_API_ENDPOINT}

WORKDIR /app
COPY package.json /app/
COPY . ./
RUN npm install --silent
RUN npm run build


FROM nginx:1.23.3 as final

COPY --from=build /app/dist/ /app/dist/

ARG nginx_uid=33
ARG nginx_gid=33

RUN usermod -u $nginx_uid -o nginx && groupmod -g $nginx_gid -o nginx


