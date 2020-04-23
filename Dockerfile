#############
### build ###
#############

# base image
FROM node:12.14.1 as build

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm ci
RUN npm install -g @angular/cli@8.3.23

# add app
COPY . /app

# run tests
RUN ng test --watch=false
RUN ng e2e --port 4202

# generate production build
RUN ng build --output-path=dist --configuration=production

# base image
FROM nginx:1.17.8-alpine

# copy artifact build from the 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html

# copy nginx config
COPY /nginx /etc/nginx/conf.d

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
