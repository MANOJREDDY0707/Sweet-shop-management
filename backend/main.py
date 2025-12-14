from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------ DUMMY DATA ------------------

sweets = [
    {
        "id": 1,
        "name": "Ladoo",
        "quantity": 10,
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Laddu.jpg"
    },
    {
        "id": 2,
        "name": "Jalebi",
        "quantity": 5,
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/48/Jalebi.jpg"
    },
    {
        "id": 3,
        "name": "Kaju Katli",
        "quantity": 8,
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Kaju_katli.jpg"
    }
]

# ------------------ ROUTES ------------------

@app.get("/")
def home():
    return {"message": "Sweet Shop Backend Running"}

@app.get("/sweets")
def get_sweets():
    return sweets

@app.post("/purchase/{sweet_id}")
def purchase_sweet(sweet_id: int):
    for sweet in sweets:
        if sweet["id"] == sweet_id:
            if sweet["quantity"] > 0:
                sweet["quantity"] -= 1
                return {"success": True, "sweet": sweet}
            return {"success": False, "message": "Out of stock"}
    return {"success": False, "message": "Sweet not found"}
