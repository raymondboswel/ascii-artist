#!/usr/bin/python
from PIL import Image
from pylab import *
import rof
from asciiGeneratorUtils import *

'''Steps: -convert any input image to a black and white bitmap
	  -get dimensions of image programmatically
          -divide image into subarrays
          -convert each subarray to an ascii representation
          -print ascii text into file.'''

subArraySize = 4
image = Image.open('Bob_Marley.png').convert('L')
im = array(image)
width, height = image.size
outputFile = "output.txt"


subArrays = []
subArrays = getSubArrays(im, width, height, subArraySize)

#Get average value of array
printCharacters(outputFile, subArrays)