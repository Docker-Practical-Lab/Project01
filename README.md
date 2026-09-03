# 🐳 Docker · React App

A modern **React + TypeScript + Vite** application, containerized with **Docker** for easy setup, portability, and development. This README documents both how to run the app locally and everything covered in the Docker session — building images, running/managing containers, and working with volumes.

---

## Table of Contents

- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Run Locally (without Docker)](#️-run-locally-without-docker)
- [Run with Docker](#-run-with-docker)
- [Docker Commands Reference](#-docker-commands-reference)
- [Docker Volumes & Live Reload](#-docker-volumes--live-reload)
- [Project Structure](#-project-structure)

---

## 🧱 Tech Stack

- **React 19** — UI library
- **TypeScript** — typed JavaScript
- **Vite 8** — fast build tool & dev server
- **Oxlint** — fast linting
- **Docker** — containerization

The app runs on the **5173** port (configurable via Vite).

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended) — for local development
- [Docker](https://www.docker.com/) — for containerized development

Verify your installation:

```bash
node --version
docker --version
```

---

## 🖥️ Run Locally (without Docker)

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (available at http://localhost:5173)
npm run dev
```

Additional scripts:

```bash
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run lint     # run Oxlint
```

---

## 🐳 Run with Docker

### 1. Create a Docker image using the Dockerfile

From the project root (`my-react-app`):

```bash
docker build -t image_name .
```

Breakdown of the `Dockerfile`:

| Instruction | Purpose |
| ----------- | ------- |
| `FROM node:20-alpine` | Use a lightweight Node base image |
| `WORKDIR /app` | Set the working directory inside the container |
| `COPY package*.json ./` | Copy dependency manifests first (for better caching) |
| `RUN npm install` | Install dependencies |
| `COPY . .` | Copy the rest of the application code |
| `EXPOSE 5173` | Document that the app listens on port 5173 |
| `CMD ["npm", "run", "dev"]` | Start the dev server when the container runs |

### 2. See all the images

```bash
docker images
```

### 3. Create a container from that image

```bash
# Run in the foreground (logs print to the terminal)
docker run --name container_name -p 3000:5173 image_name

# Run in detached (background) mode
docker run --name container_name -p 3000:5173 -d image_name
```

> The port mapping `-p 3000:5173` maps the container port `5173` to your host machine's port `3000`. Open **http://localhost:3000** in your browser.

---

## 📟 Docker Commands Reference

Everything below was covered in the session.

### See all running services (containers)

```bash
docker ps
```

### See all containers (running or stopped)

```bash
docker ps -a
```

### Stop a running container

```bash
docker stop container_name
# or
docker stop container_id
```

### Restart a container

```bash
docker start container_name
```

> When restarting, you **don't** need to re-configure the port mappings — they were already set when you created the container earlier.

### Remove a container

```bash
# First, list all containers to find the ID/name
docker ps -a

# Remove one
docker container rm CONTAINER_ID_OR_NAME

# Remove multiple containers
docker container rm CONTAINER_ID_OR_NAME CONTAINER_ID_OR_NAME
```

### Remove an image

```bash
# First, list all images to find the ID/tag
docker images

# Remove
docker image rm IMAGE_ID_OR_TAG
```

### Remove all containers, all images, and all volumes

```bash
docker system prune -a
```

> ⚠️ **Caution:** This removes **everything** Docker-related on your system, including all images, stopped/running containers, and unused volumes. Use it only when you're sure you no longer need any of them.

---

## 🔁 Docker Volumes & Live Reload

This command sets up a container (`vite_container`) based on the `vite-app` image with:

- **Port mappings** — `5173` from the container exposed on the host
- **Volume mounts** — live code updates between host and container
- **Environment variable settings** — reliable file-change detection
- **`--rm` flag** — automatic container removal when it stops

```bash
docker run --name container_name -p 5000:5000 \
  --rm \
  -v /app/node_modules \
  -v ${PWD}:/app \
  image_name
```

### What each part does

| Flag | Purpose |
| ---- | ------- |
| `--name container_name` | Give the container a friendly name |
| `-p 5000:5000` | Map container port to a host port |
| `--rm` | **Remove** the container automatically when it exits |
| `-v ${PWD}:/app` | Mount your local project folder into the container so code edits reflect live |
| `-v /app/node_modules` | Keep the container's `node_modules` (an anonymous volume) so it isn't shadowed by the host folder |
| `CHOKIDAR_USEPOLLING=true` | Ensure reliable file-change detection for live reload |

### About `--rm`

The `--rm` flag stands for **"remove"**. When you use it, Docker automatically removes the container **and its filesystem** once the container exits. It's ideal for short-lived development containers you don't want to manually clean up.

---

## 📁 Project Structure

```
my-react-app/
├── public/               # Static assets
├── src/                  # React application source
├── .dockerignore         # Files excluded from the Docker build
├── Dockerfile            # Docker image definition
├── index.html            # HTML entry point
├── package.json          # Dependencies & scripts
├── vite.config.ts        # Vite configuration
└── tsconfig*.json        # TypeScript configuration
```

---

## ✅ Quick Start Summary

```bash
# Build the image once
docker build -t image_name .

# Run a dev container with live reload & auto-cleanup
docker run --name vite_container -p 5173:5173 --rm -v ${PWD}:/app -v /app/node_modules image_name
```

Open [http://localhost:5173](http://localhost:5173) and enjoy! 🚀
