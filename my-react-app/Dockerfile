# Use the base image from Docker file
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Export the port that the application will run on
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev"]