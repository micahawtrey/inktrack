import io
import os
from PIL import Image, ImageOps

def convertimage(photo):
    # Covnerts image into a usable format
    temp_image_path = 'temp_path.png'
    with open(temp_image_path, "wb+") as destination:
        for chunk in photo.chunks():
            destination.write(chunk)

    # Flips image
    im = Image.open(temp_image_path)
    im_flip = ImageOps.flip(im)
    im_flip.save(temp_image_path)

    return temp_image_path
