FROM node:22-alpine

WORKDIR /transcribator_app

RUN echo "stage 1" && ls -a

ADD package.json ./

RUN npm install

RUN npm install -g serve

RUN echo "stage 2" && ls -a
ADD . .
RUN echo "stage 3" && ls -a

RUN npm run build --production
RUN echo "stage 4" && ls -a 

#функциональность может быть переопределена в docker-compose
# EXPOSE 3000

CMD ["serve", "-s", "build"]