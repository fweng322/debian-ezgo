#!/bin/bash

if [ {$1}z = 'z' ]; then
	echo "$0 <filename>"
	exit
fi

if [ -x /usr/bin/kdialog ]; then
  7za x -o`kdialog --title "請選擇解壓縮的檔案要放在哪裡" --getexistingdirectory $PWD` $1
elif [ -x /usr/bin/zenity ]; then
  7za x -o`zenity --title "請選擇解壓縮的檔案要放在哪裡" --file-selection --directory` $1
else
  7za x -o$HOME $1
fi
