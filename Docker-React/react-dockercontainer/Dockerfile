# Base image with Node.js
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy only package.json + package-lock.json first (for caching npm install)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Expose Vite default dev port
EXPOSE 5173

# Run the app in development mode with hot reload
CMD ["npm", "run", "dev", "--", "--host"]
