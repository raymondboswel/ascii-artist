#!/usr/bin/python
from PIL import Image
from pylab import *
import rof
from asciiGeneratorUtils import *
import sys

'''Steps: -convert any input image to a black and white bitmap
	  -get dimensions of image programmatically
          -divide image into subarrays
          -convert each subarray to an ascii representation
          -print ascii text into file.
          
           input args:  Image location (fully qualified/same directory)
                        SubArraySize
                        Output file name'''
inputFile = sys.argv[1]
subArraySize = int(sys.argv[2])
outputFile = sys.argv[3]

image = Image.open(inputFile).convert('L')
im = array(image)
width, height = image.size



subArrays = []
subArrays = getSubArrays(im, width, height, subArraySize)

#Get average value of array
printCharacters(outputFile, subArrays)


