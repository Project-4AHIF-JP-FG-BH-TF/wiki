FROM node:latest As build
WORKDIR /app
COPY . .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "docs:dev"]
