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
#zh_TW lang=([0]"系統開機還原設定" [1]"選項" [2]"請選擇您要的項目" [3]"設定開機時系統自動還原" [4]"解除開機自動還原設定" [5]"設定開機時系統自動還原" [6]"請選擇要開機還原的帳號" [7]"請選擇您要的帳號" [8]"系統備份中請稍待..." [9]"系統開機還原設定完成" [10]"解除開機自動還原設定" [11]"請選擇要開機還原的帳號" [12]"請選擇您要的帳號" [13]"解除開機自動還原設定完成"

function zh_TW {
lang=("系統開機還原設定" "選項" "請選擇您要的項目" "設定開機時系統自動還原" "解除開機自動還原設定" "設定開機時系統自動還原" "請選擇要開機還原的帳號" "請選擇您要的帳號" "系統備份中請稍待..." "系統開機還原設定完成" "解除開機自動還原設定" "請選擇要開機還原的帳號" "請選擇您要的帳號" "解除開機自動還原設定完成")
}

#en_US lang=([0]"System restore settings" [1]"Options" [2]"Please choose an option" [3]"Restore default ezgo settings at boot time" [4]"Do not restore default ezgo settings at boot time" [5]"thenSystem restore setting stored." [6]"Please choose which account to restore the default settings" [7]"Please choose an account" [8]"Running system backup.  Please wait..." [9]"System restore setting stored. " [10]"Do not restore default ezgo settings at boot time" [11]"Please choose which account to restore the default settings" [12]"Please choose an account" [13]"System restore setting stored."

function en_US {
lang=("System restore settings" "Options" "Please choose an option" "Restore default ezgo settings at boot time" "Do not restore default ezgo settings at boot time" "System restore setting stored." "Please choose which account to restore the default settings" "Please choose an account" "Running system backup.  Please wait..." "System restore setting stored. " "Do not restore default ezgo settings at boot time" "Please choose which account to restore the default settings" "Please choose an account" "System restore setting stored.")
}

locale=$(env |grep "LANG="|sed  s/LANG=//g|sed s/.UTF-8//g|sed s/.utf8//g)
$locale;
if [ -e /etc/ezgo ]; then
        echo "已經有ezgo資料夾"
  else
       mkdir /etc/ezgo 
  fi


input=$(zenity --list --radiolist --text "${lang[0]}" --column="${lang[1]}" --column="${lang[2]}" 1 "${lang[3]}" 2 "${lang[4]}")

if [ "$input" == "${lang[3]}" ]; then
	user;
        tar=$(zenity --list --text "${lang[6]}" --column="${lang[7]}" $username)		
       	
	case $tar in
	         "")
		exit 0
	    ;;
	    *)
		rm -rf /home/${tar}/.kde/socket-*
		rm -rf /home/${tar}/.kde/tmp-*
		rm -rf /home/${tar}/.kde/cache-*
		tar jcvpf /etc/ezgo/${tar}.tar.bz2 /home/${tar} | tee >(zenity --progress --pulsate --text="${lang[8]}"  --auto-close)

		ls -a /home/${tar} |tr '\n' ' ' >/etc/ezgo/${tar}.txt           
		FNAME=/usr/share/ezgo/recover/restore_${tar}.sh
		echo '#!/bin/bash' > ${FNAME}
		#echo "${tar}"'=$(cat /etc/ezgo/'"${tar}"'.txt)' >>/etc/init.d/restore_"${tar}".sh
		#echo 'cd /home/'"${tar}" >>/etc/init.d/restore_"${tar}".sh		
		echo 'sudo rm -rf /home/'"${tar}"'/*' >> ${FNAME}
		echo 'sudo rm -rf /home/'"${tar}"'/[.a-zA-Z0-9]*' >> ${FNAME}
		echo 'sudo tar jxvpf /etc/ezgo/'"${tar}"'.tar.bz2 -C /' >> ${FNAME}
		chmod +x ${FNAME}
		cat > /lib/systemd/system/multi-user.target.wants/recover_ezgo.service << EOL
[Unit]
Description = Recover user settings while booting
Before = sddm.service

[Service]
ExecStart = ${FNAME}
Type = oneshot

[Install]
WantedBy = multi-user.target
EOL
		ln -s /lib/systemd/system/multi-user.target.wants/recover_ezgo.service /etc/systemd/system/multi-user.target.wants/recover_ezgo.service
		zenity --info --text "${lang[9]}"

	    ;;
	esac

else 
	if [ "$input" == "${lang[4]}" ]; then
	ls /etc/ezgo/*.tar.bz2 |sed -e 's/\.tar\.bz2//g' |sed -e 's/[/]etc[/]ezgo[/]//g' >/dev/shm/unezgo	
	username=$(cat /dev/shm/unezgo |tr '\n' ' ')
    	tar=$(zenity --list --text "${lang[10]}" --column="${lang[12]}" $username)
		
	case ${tar} in
	         "")
		exit 0
	    ;;
	    *)
		sudo rm -f /etc/ezgo/${tar}.tar.bz2
		sudo rm -f /etc/ezgo/${tar}.txt		
		sudo rm -f /etc/systemd/system/multi-user.target.wants/recover_ezgo.service
		sudo rm -f /lib/systemd/system/multi-user.target.wants/recover_ezgo.service
               	zenity --info --text "${lang[13]}"
	    ;;
	esac
	
	else 
		exit 0

	fi

fi


