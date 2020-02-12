FROM node:dubnium-slim

RUN mkdir -p /usr/local/fizzbuzz/src

WORKDIR /usr/local/fizzbuzz

ADD CODE_SOURCE_FOR_BUILD/ ./src

RUN npm i --production 

VOLUME [ "/usr/local/fizzbuzz/src/app/config", "/var/log" ]

EXPOSE SERVICE_PORT

CMD [ "npm", "start" ]
