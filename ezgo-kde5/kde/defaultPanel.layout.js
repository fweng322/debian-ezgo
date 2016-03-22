var panel = new Panel
var panelScreen = panel.screen
var freeEdges = {"bottom": true, "top": true, "left": true, "right": true}

for (i = 0; i < panelIds.length; ++i) {
    var tmpPanel = panelById(panelIds[i])
    if (tmpPanel.screen == panelScreen) {
        // Ignore the new panel
        if (tmpPanel.id != panel.id) {
            freeEdges[tmpPanel.location] = false;
        }
    }
}

if (freeEdges["bottom"] == true) {
    panel.location = "bottom";
} else if (freeEdges["top"] == true) {
    panel.location = "top";
} else if (freeEdges["left"] == true) {
    panel.location = "left";
} else if (freeEdges["right"] == true) {
    panel.location = "right";
} else {
    // There is no free edge, so leave the default value
    panel.location = "top";
}

panel.height = screenGeometry(panel.screen).height > 1024 ? 35 : 27

var kickoff = panel.addWidget("org.kde.plasma.kicker")
kickoff.currentConfigGroup = ["General"]
kickoff.writeConfig("useCustomButtonImage", "true")
kickoff.writeConfig("customButtonImage", "/usr/share/ezgo/icons/start_menu.png")
kickoff.currentConfigGroup = ["Shortcuts"]
kickoff.writeConfig("global", "Alt+F1")

panel.addWidget("org.kde.plasma.showActivityManager")
//panel.addWidget("org.kde.plasma.pager")
firefox = panel.addWidget("org.kde.plasma.icon")
firefox.currentConfigGroup = ["General"]
firefox.writeConfig("iconName", "firefox")
firefox.writeConfig("url", "/usr/share/ezgo/ezgo-menu/applications/firefox.desktop")
firefox.writeConfig("applicationName", "網頁瀏覽_firefox")

systemsettings = panel.addWidget("org.kde.plasma.icon")
systemsettings.currentConfigGroup = ["General"]
systemsettings.writeConfig("iconName", "preferences-system")
systemsettings.writeConfig("url", "/usr/share/ezgo/ezgo-menu/applications/systemsettings.desktop")
systemsettings.writeConfig("applicationName", "系統設定_systemsettings")

dolphin = panel.addWidget("org.kde.plasma.icon")
dolphin.currentConfigGroup = ["General"]
dolphin.writeConfig("iconName", "system-file-manager")
dolphin.writeConfig("url", "/usr/share/ezgo/ezgo-menu/applications/org.kde.dolphin.desktop")
dolphin.writeConfig("applicationName", "檔案總管_dolphin")

panel.addWidget("org.kde.plasma.taskmanager")
panel.addWidget("org.kde.plasma.systemtray")
panel.addWidget("org.kde.plasma.digitalclock")

