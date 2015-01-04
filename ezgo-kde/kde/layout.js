var panel = new Panel
if (panelIds.length == 1) {
    // we are the only panel, so set the location for the user
    panel.location = 'bottom'
}

panel.height = screenGeometry(panel.screen).height > 1024 ? 35 : 27

launcher = panel.addWidget("simplelauncher")
launcher.writeConfig("icon", "/usr/share/ezgo/icons/start_menu.png")
launcher.writeConfig("format", "Name")
launcher.writeConfig("views", "Applications,Favorites,RecentlyUsed,RunCommand,Leave")
launcher.writeConfig("immutability", 1)

sam = panel.addWidget("org.kde.showActivityManager")
sam.writeConfig("immutability", 2)

firefox = panel.addWidget("icon")
firefox.writeConfig("Url", "file:///usr/share/applications/firefox.desktop")
firefox.writeConfig("immutability", 2)

systemsettings = panel.addWidget("icon")
systemsettings.writeConfig("Url", "file:///usr/share/applications/kde4/systemsettings.desktop")
systemsettings.writeConfig("immutability", 2)

dolphin = panel.addWidget("icon")
dolphin.writeConfig("Url", "file:///usr/share/applications/kde4/dolphin.desktop")
dolphin.writeConfig("immutability", 2)

showdesktop = panel.addWidget("showdesktop")
showdesktop.globalShortcut = "Meta+D"
showdesktop.writeConfig("immutability", 2)

tasks = panel.addWidget("tasks")
tasks.writeConfig("immutability", 2)

//panel.addWidget("pager")
systemtray = panel.addWidget("systemtray")
systemtray.writeConfig("immutability", 2)

dc = panel.addWidget("digital-clock")
dc.writeConfig("immutability", 2)

trash = panel.addWidget("trash")
trash.writeConfig("immutability", 2)

panel.writeConfig("immutability", 2)

