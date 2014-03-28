#!/bin/sh

rm -rf /usr/share/ezgo/ezgo-menu/applications.bak
mv /usr/share/ezgo/ezgo-menu/applications /usr/share/ezgo/ezgo-menu/applications.bak
cp -LR /usr/share/applications /usr/share/ezgo/ezgo-menu
chmod +x /usr/share/ezgo/ezgo-menu/ezgomenu/desktop_maker.py
/usr/share/ezgo/ezgo-menu/ezgomenu/desktop_maker.py
