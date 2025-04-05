from fastapi import FastAPI, HTTPException, File, UploadFile, Form

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()




app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# @app.get('/')
# def get_default():
#     return {"test": "Hello World"}

# @app.get("/cars")



# @app.get("/cars/{name}")


# @app.post("/cars")


# @app.put("/cars/{id}")


# @app.delete("/cars/{id}")



