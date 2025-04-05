from fastapi import FastAPI, HTTPException, File, UploadFile, Form
import crud 
from fastapi.middleware.cors import CORSMiddleware
from models import Car


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def get_default():
    return {"test": "Hello World"}

@app.get("/cars")
def get_all_cars():
    return crud.get_all_cars()



@app.get("/cars/{name}")
def get_car_by_name(name: str):
    return crud.get_car_by_name(name)



@app.post("/cars")
def create_car(car:Car):
    if not crud.create_car(car):
        raise HTTPException(status_code=400, detail="Error while creating a car ")
    return {"messsage": "car created successfully"}



@app.put("/cars/{id}")
def update_car(car_id:int, car:Car):
    if not crud.update_car(car_id,car):
        raise HTTPException(status_code=400, detail="Error while updating a car ")
    return{"message": "updating car successfully"}
        

@app.delete("/cars/{id}")
def delete_car(car_id: int):
    if not crud.delete_car(car_id):
        raise HTTPException(status_code=400, detail="Error while deleting a car ")
    return{"message":"deleting car successfully"}
        
    



