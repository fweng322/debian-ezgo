#!/bin/bash

function user() {
	rm /dev/shm/ezgo
	UID_MIN=`cat /etc/login.defs | egrep "^UID_MIN" | gawk ' { print $2; } '`
	UID_MAX=`cat /etc/login.defs | egrep "^UID_MAX" | gawk ' { print $2; } '`

	while read myLine
	do
		TMP1=${myLine/:/ }
		TMP2=${TMP1/:/ }
		TMP3=${TMP2/:/ }
		TMP4=${TMP3/:/ }
		USERNAME=`echo $TMP4 | gawk ' { print $1; }'`
		USERUID=`echo $TMP4 | gawk ' { print $3; } '`
		if [ $USERUID -ge `expr $UID_MIN - 1` ]; then
			if [ $USERUID -le $UID_MAX ]; then
				echo $USERNAME >>/dev/shm/ezgo
			fi
		fi
	done < /etc/passwd	
	username=$(cat /dev/shm/ezgo |tr '\n' ' ')
}

#LANG=zh_TW.utf8

function zh_TW {
lang=("將 ezgo 還原初始設定，還原完成後將會自動重新開機。您確定要進行嗎？" "確定" "取消" "準備重新開機" "系統將重新開機" "請選擇要還原回初始設定的帳號" "請選擇您要的帳號")
}

function en_US {
lang=("ezgo default settings will be restored.  System will be automatically rebooted after it is done.  Are you sure?" "OK" "Cancel" "Rebooting..." "Rebooting the system..." "Please choose which account to restore the factory default settings" "Please choose an account")
}

locale=$(env |grep "LANG="|sed  s/LANG=//g|sed s/.UTF-8//g|sed s/.utf8//g)
$locale;


skel=$(zenity --question --text "${lang[0]}" --ok-label="${lang[1]}" --cancel-label="${lang[2]}")

if [ $? == 0 ]; then
	#user=$(env |grep SUDO_USER= |sed -e 's/SUDO_USER=//g' )
	user
	USER=$(zenity --list --text "${lang[5]}" --column="${lang[6]}" $username)
	FNAME=/usr/share/ezgo/recover/skel_${USER}.sh

	cat > ${FNAME} << EOL
#!/bin/bash
rm -rf /home/${USER}
mkdir -p /home/${USER}
cp -af /etc/skel/* /home/${USER}
cp -af /etc/skel/.[a-z]* /home/${USER}
chown -R ${USER}.${USER} /home/${USER}
rm -f /etc/systemd/system/multi-user.target.wants/skel_ezgo.service
rm -f /lib/systemd/system/multi-user.target.wants/skel_ezgo.service 
EOL

	cat > /lib/systemd/system/multi-user.target.wants/skel_ezgo.service << EOT
[Unit]
Description = Recover ezgo home directory to the factory default
Before = sddm.service

[Service]
Type = oneshot
ExecStart = ${FNAME}

[Install]
WantedBy = multi-user.target
EOT

	chmod +x ${FNAME}
	ln -s /lib/systemd/system/multi-user.target.wants/skel_ezgo.service /etc/systemd/system/multi-user.target.wants/skel_ezgo.service

	zenity --info --title "${lang[3]}" --text "${lang[4]}"
	reboot

elif [ $? == 1 ]; then
	zenity --error --text "Something wrong"
	exit
fi 

