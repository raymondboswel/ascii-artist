#!/usr/bin/python
from PIL import Image
from pylab import *


def getSubArrays(imageArray, width, height, subArraySize):
    i=0
    subArrays = []
    global subArraySizeGlobal
    subArraySizeGlobal = subArraySize
    global loop_width
    loop_width =width-(width%subArraySize)
    loop_height=height-(height%subArraySize)
    for x in range (0, loop_width):
        for y in range (0, loop_height):
            if((x%subArraySize==0)and(y%subArraySize==0)):
                subArrays.append([[imageArray[j][i] for j in range(x, x+subArraySize)] for i in range(y, y+subArraySize)])
    return subArrays

def getAverageOfArray(arr):
    sum=0
    for lst in arr:
        for value in lst:    
            sum=sum+value
    average=sum/(len(arr)*len(arr[0]))
    return average

def getArrayAverage(subArray):
    height = len(subArray)
    sum = 0
    width = len(subArray[0])
    for j in range(0, height):
        for i in range(0, width):
            sum=sum+subArray[j][i]
    return sum/(width*height)

def getCharacter(arrayAverageValue):
    char = ""
    if(arrayAverageValue <= 50):
        char = "#"
    if((arrayAverageValue>50)and(arrayAverageValue<75)):
        char = "i"
    if((arrayAverageValue>75)and(arrayAverageValue<100)):
        char = "+"
    if((arrayAverageValue>100)and(arrayAverageValue<120)):
        char = "*"
    if((arrayAverageValue>120)and(arrayAverageValue<140)):
        char = "@"
    if((arrayAverageValue>140)and(arrayAverageValue<160)):
        char = "&"
    if((arrayAverageValue>160)and(arrayAverageValue<200)):
        char = "?"
    if(arrayAverageValue>=200):
        char = " "
    return char

def printCharacters(outputFile, subArrays):
    x=0
    i=0
    j=0
    count=0
    string=""
    textfile = open("output.txt", "w")
    numBoxes=len(subArrays)
    numColinBox=len(subArrays[0])
    print numBoxes
    numRowinBox=len(subArrays[0][0])

    for x in range (0, numBoxes): 
        avg = 0
        avg = getArrayAverage(subArrays[x])    
        character = getCharacter(avg)  
        if (x%(loop_width/subArraySizeGlobal)==0):
            textfile.write("\n")
        else:
            textfile.write(character)
            
	

    textfile.close()




            
