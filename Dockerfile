FROM node:20

ARG VITE_BACKEND_URL
ARG VITE_API_ENDPOINT

ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
ENV VITE_API_ENDPOINT=${VITE_API_ENDPOINT}

WORKDIR /app
COPY package.json /app/

RUN rm -rf node_modules package-lock.json && npm cache clean --force
RUN npm install
COPY . /app/

CMD ["npm", "run", "dev"]


