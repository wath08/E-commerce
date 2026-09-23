# Tech Simplify Store 🚀

A modern, full-stack E-Commerce platform built for high performance and security.

## 🛠 Tech Stack
- **Frontend:** Vue.js 3 (Composition API), Vite, TailwindCSS
- **Backend:** Python (FastAPI)
- **Database:** MySQL 8.0
- **Infrastructure:** Docker & Docker Compose
- **Database Management:** phpMyAdmin

## 📦 Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

## 🚀 How to Run the Project
You don't need to install Node, Python, or MySQL on your local machine. Docker handles everything!

1. Open your terminal in the root of the project.
2. Run the following command to build and start the servers in the background:
   ```bash
   docker-compose up -d
   ```

## 🌐 Services & Ports
Once the Docker containers are running, you can access the different parts of the application here:

- **Frontend (Website):** [http://localhost](http://localhost)
- **Backend (Python API):** [http://localhost:8000](http://localhost:8000)
- **Database Manager (phpMyAdmin):** [http://localhost:8080](http://localhost:8080)
  - *Note: phpMyAdmin is configured to Auto-Login securely during local development.*

## 🛑 How to Stop the Project
To shut down the servers and free up your computer's memory, run:
```bash
docker-compose down
```

---
*Developed for Tech Simplify.*
