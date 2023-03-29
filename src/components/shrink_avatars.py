import os
from PIL import Image

path = r"../assets/Avatars/Sighted Avatars"

for filename in os.listdir(path):
    image = Image.open(os.path.join(path, filename))
    # reduce the image dimensions
    print(image.width)
    if image.width <= 800:
        continue
    image = image.resize((int(image.width * 0.5), int(image.height * 0.5)))
    # save the resized image
    image.save(os.path.join(path, filename))
