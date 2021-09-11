FROM node:14-buster
WORKDIR /app
RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add - \
    && echo "deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.4 main" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list \
    && apt-get update \
    && apt-get install -y -qq --no-install-recommends \
        mongodb-org-tools \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get clean
ARG NPM_CONFIG_REGISTRY=""
COPY ./package*.json ./
RUN npm install
COPY . .
COPY ./scripts ./scripts
ENV PORT 8000
EXPOSE $PORT
CMD ["node", "app.js"]
