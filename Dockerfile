# Multi‑stage build for the Vue frontend
# -------------------------------------------------
# 1️⃣ Builder stage – install deps and compile the app
FROM node:20-alpine AS builder
WORKDIR /app
# Copy only package files first for efficient caching
COPY frontend/package*.json ./
RUN npm ci
# Copy the rest of the source code
COPY frontend .
# Build the production assets
RUN npm run build

# 2️⃣ Runtime stage – serve static files via Nginx
FROM nginx:alpine
# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*
# Copy built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html
# Expose the HTTP port
EXPOSE 80
# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
