from pydantic import BaseModel

class Car(BaseModel):
    id: int
    name: str
    choice_percentage: int
    image_url: str
    reposts: int
    rental_price_per_hour: int 