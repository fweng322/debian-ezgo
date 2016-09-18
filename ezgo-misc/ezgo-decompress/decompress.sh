#!/bin/bash

if [ {$1}z = 'z' ]; then
	echo "$0 <filename>"
	exit
fi

7za x -o`kdialog --getexistingdirectory $PWD` $1
