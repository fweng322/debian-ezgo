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

panel.addWidget("org.kde.showActivityManager")

//firefox = panel.addWidget("icon")
//firefox.writeConfig("Url", "file:///usr/share/applications/firefox.desktop")

systemsettings = panel.addWidget("icon")
systemsettings.writeConfig("Url", "file:///usr/share/applications/kde4/systemsettings.desktop")

dolphin = panel.addWidget("icon")
dolphin.writeConfig("Url", "file:///usr/share/applications/kde4/dolphin.desktop")

showdesktop = panel.addWidget("showdesktop")
showdesktop.globalShortcut = "Meta+D"

panel.addWidget("tasks")

//panel.addWidget("pager")
panel.addWidget("systemtray")
panel.addWidget("digital-clock")
panel.addWidget("trash")

