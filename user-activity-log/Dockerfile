# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the app (if using TypeScript)
RUN yarn build

# Expose the app port
EXPOSE 3000

# Start the NestJS app (debug mode if DEBUG=true)
CMD ["sh", "-c", "if [ \"$DEBUG\" = 'true' ]; then node --inspect-brk=0.0.0.0:9229 dist/main.js; else node dist/main.js; fi"]
