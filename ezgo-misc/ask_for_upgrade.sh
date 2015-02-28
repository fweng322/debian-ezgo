#!/bin/sh

if [ -x /usr/bin/kdialog ]; then
	kdialog --yesno "系統將進行更新。注意：此動作一旦開始就無法中止，否則可能造成系統問題。要繼續嗎？"
elif [ -x /usr/bin/zenity ]; then
	zenity --question --text  "系統將進行更新。注意：此動作一旦開始就無法中止，否則可能造成系統問題。要繼續嗎？"
else
	exit
fi

ans=$?

if [ $ans -eq 0 ]; then
        gksudo -- sed -ri 's/tw.archive.ubuntu.com/free.nchc.org.tw/' /etc/apt/sources.list /etc/apt/sources.list.d/*
        gksudo -- sed -ri 's/security.ubuntu.com/free.nchc.org.tw/' /etc/apt/sources.list /etc/apt/sources.list.d/*
	gksudo -- apt-get update
	gksudo -- apt-get -y upgrade
#	gksudo -- /usr/share/ezgo/ezgomenu/desktop_maker.py
fi
