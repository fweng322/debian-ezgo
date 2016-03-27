
loadTemplate("org.kde.plasma.desktop.defaultPanel")

for (var i = 0; i < screenCount; ++i) {
    var id = createActivity("Desktop", "org.kde.plasma.folder");
    if (setCurrentActivity(id)) {
        //setActivityName(id, "ezgo");
        var desktopsArray = desktopsForActivity(id);
        print(desktopsArray.length);
        for( var j = 0; j < desktopsArray.length; j++) {
            var a = desktopsArray[j];
            a.wallpaperPlugin = 'org.kde.image';

            //firefox = a.addWidget("org.kde.plasma.icon")
            //firefox.currentConfigGroup = ["General"]
            //firefox.writeConfig("iconName", "firefox")
            //firefox.writeConfig("url", "/usr/share/ezgo/ezgo-menu/applications/firefox.desktop")
            //firefox.writeConfig("applicationName", "網頁瀏覽_firefox")

            //trash = a.addWidget("org.kde.plasma.trash");
            //trash.geometry = QRectF(screenGeometry(desktop.screen).width - 200,450,174,104)
            //trash.writeConfig("immutability", 1)
            //trash.writeConfig("zvalue", 0)

            //desktopsArray[j].wallpaperPlugin = 'org.kde.image';
            //var clock = desktopsArray[j].addWidget("org.kde.plasma.analogclock");
        }
    }
}
