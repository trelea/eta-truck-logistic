import os
from PIL import Image

for img in os.listdir('./'):
  if (img.split('.')[-1] != 'py'):
    image = Image.open(img)
    image.save(f'{str(img)}', quality=10)

  