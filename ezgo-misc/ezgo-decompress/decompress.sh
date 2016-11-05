#!/bin/bash

if [ {$1}z = 'z' ]; then
	echo "$0 <filename>"
	exit
fi


if [ -x /usr/bin/kdialog ]; then
  DIALOG=kdialog
  DECOMPRESS_METHOD=`kdialog --title "請選擇解壓縮方式" --combobox "請選擇要使用的解壓縮方式。\n若選擇的方式解出來是亂碼，可以換其他種方式試試。" "unzip" "7z" "unrar" --default "unzip"`
  FOLDER=`kdialog --title "請選擇解壓縮的檔案要放在哪裡" --getexistingdirectory "$PWD"`
elif [ -x /usr/bin/zenity ]; then
  DIALOG=zenity
  DECOMPRESS_METHOD=`zenity --list --radiolist --text "請選擇要解壓縮的方式" --column "button" --column "method" --hide-header TRUE unzip FALSE 7z FALSE unrar`
  FOLDER=`zenity --title "請選擇解壓縮的檔案要放在哪裡" --file-selection --directory --filename="$PWD"`
else
  DECOMPRESS_METHOD=unzip
  FOLDER="$HOME"
fi

case $DECOMPRESS_METHOD in
  unzip)
    echo "User chose unzip."
    unzip "$1" -d "$FOLDER"
    ;;
  7z)
    echo "User chose 7z."
    7za x -o"$FOLDER" "$1"
    ;;
  unrar)
    echo "User chose unrar."
    unrar x "$1" "$FOLDER/"
    ;;
  *)
    echo "Use default option unzip."
    unzip "$1" -d "$FOLDER"
    ;;
esac

exit

