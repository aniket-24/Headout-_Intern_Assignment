# Use the official Node.js image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# Expose port 8080
EXPOSE 8080

# Specify the command to run your application
CMD [ "node", "server.js" ]
