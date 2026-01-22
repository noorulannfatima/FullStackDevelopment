from fastapi import FastAPI
from pydantic import BaseModel
# BaseModel helps with validation, we can define structure of data
from typing import List


app = FastAPI()

class Tea(BaseModel):
    id: int
    name: str
    price: float
    description: str

teas: List[Tea] = []

@app.get("/")
def read_root():
    return {"Message": "Welcome to our Tea Shop"}

@app.get("/teas")
def read_teas():
    return teas

# post method

@app.post("/teas")
def add_tea(tea: Tea):
    teas.append(tea)
    return teas

# put method

@app.put("/teas/{tea_id}")
def update_tea(tea_id: int, updated_tea: Tea):
    for index, tea in enumerate(teas):
        if tea.id == tea_id:
            teas[index] = updated_tea
            return updated_tea
    return {"error": "Tea not found"}

# delete method

@app.delete("/teas/{tea_id}")
def delete_tea(tea_id: int):
    for index, tea in enumerate(teas):
        if tea.id == tea_id:
            deleted = teas.pop(index)
            return deleted
    return {"error": "Tea not found"} 
