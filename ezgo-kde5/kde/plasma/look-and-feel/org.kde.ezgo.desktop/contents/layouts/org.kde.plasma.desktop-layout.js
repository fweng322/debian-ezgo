var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "600",
                    "DialogWidth": "800"
                },
                "/Wallpaper/org.kde.image/General": {
		    "Image": "file:///usr/share/ezgo/wallpaper/ezgo14/contents/images/1366x768.png",
                    "height": "768",
                    "width": "1366"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/Wallpaper/org.kde.image/General": {
		    "Image": "file:///usr/share/ezgo/wallpaper/ezgo14/contents/images/1366x768.png",
                    "height": "768",
                    "width": "1366"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "2",
                    "wallpaperplugin": "org.kde.image"
                },
                "/Wallpaper/org.kde.image/General": {
		    "Image": "file:///usr/share/ezgo/wallpaper/ezgo14/contents/images/1366x768.png",
                    "height": "768",
                    "width": "1366"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "600",
                            "DialogWidth": "800"
                        },
                        "/General": {
			    "icon": "/usr/share/ezgo/icons/start_menu.svg",
			    "useCustomButtonImage": "true",
			    "customButtonImage": "/usr/share/ezgo/icons/start_menu.svg",
                            "favoriteApps": "libreoffice-writer.desktop,libreoffice-calc.desktop,libreoffice-impress.desktop,inkscape.desktop,gimp.desktop,org.kde.konsole.desktop,phet.desktop",
                            "hiddenApplications": "display-im6.q16.desktop,display-im6.desktop,org.kde.ksshaskpass.desktop,org.kde.knetattach.desktop,JB-mission-control-jdk8.desktop,fcitx.desktop,nautilus.desktop,org.kde.kwalletmanager5.desktop,JB-jvisualvm-jdk8.desktop,JB-controlpanel-jdk8.desktop,JB-jconsole-jdk8.desktop,itweb-settings.desktop,openjdk-8-policytool.desktop,fcitx.desktop,org.kde.kwalletmanager5.desktop"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kicker"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.showActivityManager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/General": {
//                            "applicationName": "網頁瀏覽_firefox",
//                            "iconName": "firefox",
                            "url": "file:///usr/share/ezgo/ezgo-menu/applications/firefox.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icon"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/General": {
//                            "applicationName": "系統設定_systemsettings",
//                            "iconName": "preferences-system",
                            "url": "file:///usr/share/ezgo/ezgo-menu/applications/systemsettings.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icon"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/General": {
                            "url": "file:///usr/share/ezgo/ezgo-menu/applications/org.kde.dolphin.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icon"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "600",
                            "DialogWidth": "800"
                        },
                        "/General": {
                            "onlyGroupWhenFull": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
//                        "/Configuration/Containments/13": {
//                            "formfactor": "2"
//                        },
//                        "/Configuration/General": {
//                            "extraItems": "org.kde.plasma.bluetooth,org.kde.plasma.devicenotifier,org.kde.discovernotifier,org.kde.plasma.volume,org.kde.plasma.printmanager,org.kde.plasma.mediacontroller,org.kde.plasma.battery,org.kde.plasma.networkmanagement,org.kde.plasma.clipboard,org.kde.kdeconnect,org.kde.plasma.notifications",
//                            "hiddenItems": "org.kde.plasma.volume",
//                            "knownItems": "org.kde.plasma.bluetooth,org.kde.plasma.devicenotifier,org.kde.discovernotifier,org.kde.plasma.volume,org.kde.plasma.printmanager,org.kde.plasma.mediacontroller,org.kde.plasma.battery,org.kde.plasma.networkmanagement,org.kde.plasma.clipboard,org.kde.kdeconnect,org.kde.plasma.notifications"
//                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Appearance": {
                            "displayTimezoneAsCode": "false",
                            "use24hFormat": "2"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "600",
                            "DialogWidth": "800"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.trash"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "85",
                    "DialogWidth": "1366"
                }
            },
            "height": 1.75,
            "location": "bottom",
            "maximumLength": 68.299999999999997,
            "minimumLength": 68.299999999999997,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
