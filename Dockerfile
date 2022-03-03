# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/src/app/frontend

# Add the source code to app
COPY ./ /usr/src/app/frontend

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/src/app/frontend/dist/front-ent-project /usr/share/nginx/html

# Expose port 80
EXPOSE 80
