# -*- coding: utf-8 -*-
#set delimiters to _

import csv
import os
import re

def getLines(filePath):
    rows = []
    with open(filePath, 'r') as csvfile:
        reader = csv.reader(csvfile, delimiter='_', quotechar='\'')
        for row in reader:
            rows.append(row)
    return rows
    
def readLines(arr):
    for line in arr:
        print(line)
        
def createHeaderInsertLine():
    val = "SET DEFINE OFF;\n"
    val = val + "\nINSERT ALL\n"
    return val
    
def createValuesLine(line, num, name):
    #line = removeChar(line)
    
    val = "INTO " + name + " VALUES "
    val =  val + "('"
    val = val + '\'_\''.join(line)
    val = val +  "')" 
    val = replace(val)
    val = toDate(val)
    if num%50 == 0:
        val = val + "\nSELECT * FROM dual;\n"
        val = val + "SET DEFINE OFF;\n"
        val = val + "\nINSERT ALL"
    return val
        
def replace(line):
    line = re.sub(r' 0:00:00', '', line, flags=re.IGNORECASE)
    return line

#382001 last active offense

def toDate(line):
    words = line.split("_")
    words[7] = "TO_DATE(" + words[7] + ",'MM/DD/YYYY')"
    words[12] = "TO_DATE(" + words[12] + ",'MM/DD/YYYY')"
    words[13] = "TO_DATE(" + words[13] + ",'MM/DD/YYYY')"

    line = ",".join(words)
    return line


def main():
    print("Please enter the filepath of the file you would like to transform")
    filepath = input()
    lines = getLines(filepath)
    
    print("What is the name of the file that you would like to produce?")
    targetfile = input()
    f = open(targetfile, 'w')
    f.write(createHeaderInsertLine())
    
    print("What is the table name?")
    name = input()

    
    tLines = []
    print("currNum = ?")
    print("Enter:")

    currNum = input()
    currNum = int(currNum)
    for line in lines:
        tLines.append(createValuesLine(line, currNum, name))
        currNum += 1
    
    f.write(' \n'.join(tLines))
    f.write("\nSELECT * FROM dual")
    print("Check for errors: look for \\")