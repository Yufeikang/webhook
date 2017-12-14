FROM node:9.2.1-alpine

ADD ./ /app/

WORKDIR /app/


RUN npm -g install yarn && cd /app && yarn install

CMD "/app/api_entrypoint.sh"
