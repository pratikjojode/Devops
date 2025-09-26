# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first (better for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Run Vite
CMD ["npm", "run", "dev"]
