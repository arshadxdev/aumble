# Use the official Node.js image as the base
FROM node:22-alpine3.20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for efficient caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build
# Expose the port your app runs on (change if needed)
EXPOSE 3000

# Start the app in development mode
CMD ["npm", "run", "start"]
