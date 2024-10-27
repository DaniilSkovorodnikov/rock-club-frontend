FROM node:20

USER root
WORKDIR /app

COPY package*.json ./
RUN npm i --legacy-peer-deps
COPY / .
RUN npm run build

FROM node:20

WORKDIR /app

COPY --from=build /app/dist ./dist
RUN npm install -g serve
ENTRYPOINT ["serve", "-s", "dist", "-l", "3000"]
