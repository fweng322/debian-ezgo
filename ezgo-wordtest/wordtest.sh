#!/bin/bash

FIREFOX=`which firefox`
ICEWEASEL=`which iceweasel`
CHROME=`which google-chrome`
CHROMIUM=`which chromium-browser`

WORDTEST=

if [ ! -z "${FIREFOX}" ]; then	# use firefox
	${FIREFOX} /usr/share/ezgo/ezgo-wordtest/index.html
elif [ ! -z "${ICEWEASEL}" ]; then # use iceweasel
	${ICEWEASEL} /usr/share/ezgo/ezgo-wordtest/index.html
elif [ ! -z "${CHROMIUM}" ]; then # use chromium
	${CHROMIUM} /usr/share/ezgo/ezgo-wordtest/start_server.sh
elif [ ! -z "${CHROME}" ]; then # use google-chrome
	${CHROME} /usr/share/ezgo/ezgo-wordtest/start_server.sh
else
	xdg-open /usr/share/ezgo/ezgo-wordtest/index.html
fi

