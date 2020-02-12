FROM node:dubnium-slim

RUN mkdir -p /usr/local/fizzbuzz

WORKDIR /usr/local/fizzbuzz

ADD CODE_SOURCE_FOR_BUILD/ ./

RUN npm i --production 

VOLUME [ "/usr/local/fizzbuzz/src/config", "/var/log" ]

EXPOSE SERVICE_PORT

CMD [ "npm", "start" ]
