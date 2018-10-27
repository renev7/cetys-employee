FROM node:carbon

WORKDIR /app

COPY . /app

EXPOSE 3000

CMD ["node", "employees.js"]
