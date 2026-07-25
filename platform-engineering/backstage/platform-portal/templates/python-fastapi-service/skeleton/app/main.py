from fastapi import FastAPI

app = FastAPI(
    title="${{ values.name }}",
    description="${{ values.description }}",
    version="1.0.0",
)


@app.get("/")
def root():
    return {
        "service": "${{ values.name }}",
        "status": "running",
        "message": "Welcome to ${{ values.name }}"
    }


@app.get("/health")
def health():
    return {
        "status": "UP"
    }
