
for (var i = 0; i < screenCount; ++i) {
    var desktop = new Activity("folderview")
    desktop.name = i18n("ezgo\u684c\u9762")
    desktop.screen = i
    desktop.writeConfig("savedPositions", "1,3,ezgo 教學,10,110,我的 ezgo.desktop,10,10,firefox.desktop,13,214")
    desktop.wallpaperPlugin = 'image'
    desktop.wallpaperMode = 'SingleImage'
    desktop.writeConfig('zvalue', 0)
    desktop.currentConfigGroup = Array('Wallpaper', 'image')
    desktop.writeConfig('slidepaths', '/usr/share/ezgo/wallpaper/')
    desktop.writeConfig("slideTimer", 360)
    desktop.writeConfig("userswallpapers", "/usr/share/ezgo/wallpaper/ezgo12-wallpapaer-1366x768.png,/usr/share/ezgo/wallpaper/ezgo12-wallpaper-1920x1080.png")
    desktop.writeConfig("wallpaper", "/usr/share/ezgo/wallpaper/ezgo12-wallpaper-1366x768.png")

    rssnow = desktop.addWidget("rssnow")
    rssnow.writeConfig("feeds", "http://ezgo-tw.blogspot.tw/feeds/posts/default");
    rssnow.writeConfig("interval", 5)
    rssnow.writeConfig("switchInterval", 30)
    rssnow.writeConfig("immutability", 1)
    rssnow.geometry = QRectF(700,66,300,300)

    var sal = new Activity("sal")
    sal.name = i18n("Netbook\u684c\u9762")
    sal.wallpaperPlugin = 'image'
    sal.wallpaperMode = 'SingleImage'
    sal.writeConfig("EnabledEntries", "plasma-sal-graphics.desktop,plasma-sal-education.desktop,plasma-sal-office.desktop,Tutorial/,ezgo/,Network/,wine-wine/,OpenContent/,Settingsmenu/,AudioVideo/,Game/,Accessibility/,plasma-sal-system.desktop,plasma-sal-development.desktop")

    sal.writeConfig('zvalue', 0)
    sal.currentConfigGroup = Array('Wallpaper', 'image')
    sal.writeConfig('slidepaths', '/usr/share/ezgo/wallpaper/')
    sal.writeConfig("slideTimer", 60)
    sal.writeConfig("userswallpapers", "/usr/share/ezgo/wallpaper/ezgo12-wallpaper-1366x768.png,/usr/share/ezgo/wallpaper/ezgo12-wallpaper-1920x1080.png")
    sal.writeConfig("wallpaper", "/usr/share/ezgo/wallpaper/ezgo12-wallpaper-1366x768.png")

    sal.currentConfigGroup = Array('stripwidget', 'favourite-0')
    sal.writeConfig('url', '/usr/share/applications/firefox.desktop')
    sal.currentConfigGroup = Array('stripwidget', 'favourite-1')
    sal.writeConfig('url', '/usr/share/applications/xbmc.desktop')
    sal.currentConfigGroup = Array('stripwidget', 'favourite-2')
    sal.writeConfig('url', '/usr/share/ezgo/desktop-files/ezinstall.desktop')
    sal.currentConfigGroup = Array('stripwidget', 'favourite-3')
    sal.writeConfig('url', '/usr/share/applications/kde4/konsole.desktop')
    sal.currentConfigGroup = Array('stripwidget', 'favourite-4')
    sal.writeConfig('url', '/usr/share/applications/kde4/kate.desktop')

    sal.reloadConfig()
}
