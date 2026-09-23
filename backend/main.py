from fastapi import FastAPI

app = FastAPI(title="Tech Simplify Store API")

@app.get("/")
def read_root():
    return {"message": "Welcome to Tech Simplify Store API"}

@app.get("/health")
def health_check():
    return {"status": "Database and API are running!"}
