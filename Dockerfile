    # Dockerfile
    FROM node:18

    # Set working directory
    WORKDIR /usr/src/app

    # Install app dependencies
    COPY package*.json ./

    RUN npm install

    # Copy app source
    COPY . .

    # Generate Prisma Client
    RUN npx prisma generate

    # Expose the Next.js port
    EXPOSE 3000

    # Start the Next.js development server
    CMD ["npm", "run", "dev"]
