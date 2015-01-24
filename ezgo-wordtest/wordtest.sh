#!/bin/bash

# Franklin.20150123: It's better to run wordtest with firefox or iceweasel, because google would not allow user to access local files.

FIREFOX=`which firefox`
ICEWEASEL=`which iceweasel`
CHROME=`which google-chrome`
CHROMIUM=`which chromium-browser`

WORDTEST=/usr/share/ezgo/ezgo-wordtest/index.html

if [ ! -z "${FIREFOX}" ]; then	# use firefox
	${FIREFOX} ${WORDTEST}
elif [ ! -z "${ICEWEASEL}" ]; then # use iceweasel
	${ICEWEASEL} ${WORDTEST}
elif [ ! -z "${CHROMIUM}" ]; then # use chromium
	${CHROMIUM} /usr/share/ezgo/ezgo-wordtest/start_server.sh
elif [ ! -z "${CHROME}" ]; then # use google-chrome
	${CHROME} /usr/share/ezgo/ezgo-wordtest/start_server.sh
else
	xdg-open ${WORDTEST}
fi

