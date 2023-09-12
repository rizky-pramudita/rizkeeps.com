# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code to the container
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the port that your Next.js app will run on (default is 3000)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
