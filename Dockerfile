FROM nodesource/wheezy:0.12.0
MAINTAINER Brandon Papworth <brandon@powertower.com>

COPY data/index.js data/package.json /data/thalassa-server/

RUN cd /data/thalassa-server && \
    npm install

WORKDIR /data/thalassa-server
VOLUME ["/data/thalassa-server"]
EXPOSE 5001 9000
CMD ["node","index.js"]
