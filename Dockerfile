# -----------------------------------------------------

## Use Node Slim image
FROM node:14-slim

## Copy source code
COPY . .

## Start the application
CMD ["node", "server.js"]

# -----------------------------------------------------
