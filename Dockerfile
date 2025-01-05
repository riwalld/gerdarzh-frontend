FROM node:20.8-alpine as build

ARG VITE_BACKEND_URL
ARG VITE_API_ENDPOINT

ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
ENV VITE_API_ENDPOINT=${VITE_API_ENDPOINT}

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install --silent

COPY . /app

EXPOSE 8080

CMD ["npm", "run", "dev", "--", "--host"]


