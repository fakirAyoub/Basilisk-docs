(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),i=t(7),a=(t(0),t(92)),s=t(93),l={id:"node_monitoring",title:"Node Monitoring"},o={unversionedId:"node_monitoring",id:"node_monitoring",isDocsHomePage:!1,title:"Node Monitoring",description:"In diesem Kapitel durchlaufen wir den Einrichtungsprozess eines lokalen Monoitoring-Systems der Validator Node.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/node_monitoring.md",slug:"/node_monitoring",permalink:"/de/node_monitoring",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/node_monitoring.md",version:"current",sidebar:"sidebar",previous:{title:"Leistungs-Benchmark",permalink:"/de/performance_benchmark"},next:{title:"Set up a development chain",permalink:"/de/build_dev_chain"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prometheus Setup",id:"prometheus-setup",children:[{value:"Benutzer und Ordner",id:"user-and-directories",children:[]},{value:"Prometheus installieren",id:"install-prometheus",children:[]},{value:"Prometheus starten",id:"starting-prometheus",children:[]}]},{value:"Node Exporter",id:"node-exporter",children:[{value:"Node Exporter installieren",id:"install-node-exporter",children:[]},{value:"Einen Systemd Service erstellen",id:"create-a-systemd-service",children:[]},{value:"Scrape Job f\xfcr Node Exporter hinzuf\xfcgen",id:"add-scrape-job-for-node-exporter",children:[]}]},{value:"Grafana Setup",id:"grafana-setup",children:[{value:"Grafana installieren",id:"install-grafana",children:[]},{value:"Die Benutzeroberfl\xe4che aufrufen",id:"accessing-the-web-interface",children:[]},{value:"Die Datenquelle konfigurieren",id:"configuring-the-datasource",children:[]},{value:"Das Dashboard importieren",id:"importing-the-dashboard",children:[]}]}],u={toc:c};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In diesem Kapitel durchlaufen wir den Einrichtungsprozess eines lokalen Monoitoring-Systems der Validator Node."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"Sie m\xfcssen Ihre ",Object(a.b)("a",{parentName:"p",href:"/node_setup"},"Validator Node")," fertig eingerichtet und aktiv haben.",Object(a.b)("br",{parentName:"p"}),"\n","Dieser Guide wurde unter dem Ubuntu 20.04 LTS Release getestet."),Object(a.b)("h2",{id:"prometheus-setup"},"Prometheus Setup"),Object(a.b)("p",null,"Im ersten Schritt werden wir den Prometheus Server einrichten."),Object(a.b)("h3",{id:"user-and-directories"},"Benutzer und Ordner"),Object(a.b)("p",null,"Sie erstellen einen separaten Benutzer f\xfcr die \xdcberwachungszwecke, f\xfcr den kein Home-Verzeichnis angelegt wird und der sich nicht einloggen kann."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo useradd --no-create-home --shell /usr/sbin/nologin prometheus\n")),Object(a.b)("p",null,"Als n\xe4chstes erstellen Sie Verzeichnisse f\xfcr die ausf\xfchrbaren Dateien und die Konfigurationsdateien."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo mkdir /etc/prometheus\n$ sudo mkdir /var/lib/prometheus\n")),Object(a.b)("p",null,"\xc4ndern Sie den Eigent\xfcmer der Verzeichnisse auf den neu erstellten Benutzer."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown -R prometheus:prometheus /etc/prometheus\n$ sudo chown -R prometheus:prometheus /var/lib/prometheus\n")),Object(a.b)("h3",{id:"install-prometheus"},"Prometheus installieren"),Object(a.b)("p",null,"Schauen Sie nach der aktuellsten Version auf der ",Object(a.b)("a",{parentName:"p",href:"https://github.com/prometheus/prometheus/releases/"},"GitHub Release Seite"),".",Object(a.b)("br",{parentName:"p"}),"\n","Zum Zeitpunkt der Ver\xf6ffentlichung ist dies v2.25.2. Setzen Sie die aktuellste Version in die folgenden Befehle ein."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# download prometheus\n$ wget https://github.com/prometheus/prometheus/releases/download/v2.25.2/prometheus-2.25.2.linux-amd64.tar.gz\n\n# unpack the binaries\n$ tar xfz prometheus-*.tar.gz\n\n# enter the unpacked directory\n$ cd prometheus-2.25.2.linux-amd64\n")),Object(a.b)("p",null,"Nun kopieren Sie die Binaries in das lokale Verzeichnis."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo cp ./prometheus /usr/local/bin/\n$ sudo cp ./promtool /usr/local/bin/\n")),Object(a.b)("p",null,"Als Besitzer der Dateien wird ebenfalls unser neuer Benutzer gesetzt."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown prometheus:prometheus /usr/local/bin/prometheus\n$ sudo chown prometheus:prometheus /usr/local/bin/promtool\n")),Object(a.b)("p",null,"Danach kopieren Sie die Benutzeroberfl\xe4che und die Konfigurationsdateien."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo cp -r ./consoles /etc/prometheus\n$ sudo cp -r ./console_libraries /etc/prometheus\n")),Object(a.b)("p",null,"Sie ahnen es sicher bereits, doch wir m\xfcssen mal wieder die Benutzer der Verzeichnisse \xe4ndern."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown -R prometheus:prometheus /etc/prometheus/consoles\n$ sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries\n")),Object(a.b)("p",null,"Sie haben nun alles, was Sie aus dem heruntergeladenen Paket ben\xf6tigen, also navigieren Sie einen Schritt zur\xfcck und r\xe4umen etwas auf."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ cd .. && rm -rf prometheus*\n")),Object(a.b)("p",null,"Nun erstellen Sie eine ",Object(a.b)("inlineCode",{parentName:"p"},"YAML"),"-Komnfigurationsdatei f\xfcr Prometheus mit einem Editor Ihrer Wahl (nano / vim / pico)."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/prometheus/prometheus.yml\n")),Object(a.b)("p",null,"Die Konfigurationsdatei ist in drei Bereiche gegliedert:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"global"),": setzt die Standardwerte f\xfcr das Abtastungsintervall ",Object(a.b)("inlineCode",{parentName:"li"},"scrape_interval")," und das Ausf\xfchrungsintervall der Regeln ",Object(a.b)("inlineCode",{parentName:"li"},"evaluation_interval")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"rule_files"),": legt die Regel-Dateien fest, die Prometheus laden soll"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"scrape_configs"),": hier wird festgelegt welche Resourcen \xfcberwacht werden sollen")),Object(a.b)("p",null,"Wir werden uns auf die Grunds\xe4tze beschr\xe4nken und folgende Konfiguration erstellen:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'global:\n  scrape_interval: 15s\n  evaluation_interval: 15s\n\nrule_files:\n  # - "weHaveNo.rules"\n\nscrape_configs:\n  - job_name: "prometheus"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9090"]\n  - job_name: "substrate_node"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9615"]\n')),Object(a.b)("p",null,"Der erste Job exportiert Daten von Prommetheus selbst, der zweite exportiert die Metriken der HydraDX Node.\nWir \xe4ndern das ",Object(a.b)("inlineCode",{parentName:"p"},"scrape_interval")," beider Jobs um ein detaillierteres Dashboard zu erstellen. Dies \xfcberschreibt die globalen Variablen.\nDas ",Object(a.b)("inlineCode",{parentName:"p"},"target")," in ",Object(a.b)("inlineCode",{parentName:"p"},"static_configs")," legt fest, wo die Exporter laufen, wir belassen dies bei den Standardwerten."),Object(a.b)("p",null,"Nachdem die Konfiguration gespeichert wurde, wird erneut der Besitzer ge\xe4ndert."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml\n")),Object(a.b)("h3",{id:"starting-prometheus"},"Prometheus starten"),Object(a.b)("p",null,"Damit Prometheus automatisch startet und im Hintergrund l\xe4uft werden wir ",Object(a.b)("inlineCode",{parentName:"p"},"systemd")," verwenden.\nErstellen Sie eine neue Konfiguration (wieder mit einem Editor Ihrer Wahl):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/systemd/system/prometheus.service\n")),Object(a.b)("p",null,"F\xfcgen Sie folgende Konfiguration ein und speichern sie ab."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[Unit]\n  Description=Prometheus Monitoring\n  Wants=network-online.target\n  After=network-online.target\n\n[Service]\n  User=prometheus\n  Group=prometheus\n  Type=simple\n  ExecStart=/usr/local/bin/prometheus \\\n  --config.file /etc/prometheus/prometheus.yml \\\n  --storage.tsdb.path /var/lib/prometheus/ \\\n  --web.console.templates=/etc/prometheus/consoles \\\n  --web.console.libraries=/etc/prometheus/console_libraries\n  ExecReload=/bin/kill -HUP $MAINPID\n\n[Install]\n  WantedBy=multi-user.target\n")),Object(a.b)("p",null,"Danach f\xfchren Sie die drei folgenden Schritte aus:\n",Object(a.b)("inlineCode",{parentName:"p"},"systemctl deamon-reload")," l\xe4dt neue Konfigurationen und aktualisiert die bestehende\n",Object(a.b)("inlineCode",{parentName:"p"},"systemctl enable")," aktiviert Ihren neuen Service\n",Object(a.b)("inlineCode",{parentName:"p"},"systemctl start")," startet den Service"),Object(a.b)("p",null,"Hiermit k\xf6nnen Sie alle drei Befehle in einer Zeile ausf\xfchren:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && systemctl enable prometheus && systemctl start prometheus\n")),Object(a.b)("p",null,"Sie sollten nun in der Lage sein die Benutzeroberfl\xe4che von Prometheus unter http://localhost:9090/ aufzurufen."),Object(a.b)("h2",{id:"node-exporter"},"Node Exporter"),Object(a.b)("p",null,"Wir werden Node Exporter installieren um Hardware-Werte f\xfcr das Dashboard abzugreifen.\nBitte schauen Sie ",Object(a.b)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter/releases/"},"hier")," nach, welches die aktuellste Version ist und ersetzen die Versionsnummer im folgenden Befehl.",Object(a.b)("br",{parentName:"p"}),"\n","Zum Ver\xf6ffentlichungszeitpunkt war die aktuellste Version ",Object(a.b)("inlineCode",{parentName:"p"},"1.1.2"),"."),Object(a.b)("h3",{id:"install-node-exporter"},"Node Exporter installieren"),Object(a.b)("p",null,"Laden Sie die neuste Version herunter."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ wget https://github.com/prometheus/node_exporter/releases/download/v1.1.2/node_exporter-1.1.2.linux-amd64.tar.gz\n")),Object(a.b)("p",null,"Entpacken Sie das eben heruntergeladene Paket. Dadurch wird ein Verzeichnis mit dem Namen ",Object(a.b)("inlineCode",{parentName:"p"},"node_exporter-1.1.2.linux-amd64")," erstellt."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ tar xvf node_exporter-1.1.2.linux-amd64.tar.gz\n")),Object(a.b)("p",null,"Als N\xe4chstes kopieren Sie die Binary in das lokale Applikationsverzeichnis und weisen es dem entsprechenden Benutzer zu."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# copy binary\n$ cp node_exporter-1.1.2.linux-amd64/node_exporter /usr/local/bin\n\n# set ownership\n$ sudo chown prometheus:prometheus /usr/local/bin/node_exporter\n")),Object(a.b)("p",null,"Sie k\xf6nnen etwas aufr\xe4umen und das heruntergeladene Paket und die entpackten Dateien entfernen."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ rm -rf node_exporter*\n")),Object(a.b)("h3",{id:"create-a-systemd-service"},"Einen Systemd Service erstellen"),Object(a.b)("p",null,"Genau wie bei Prometheus starten Sie Node Exporter als Service im Hintergrund.\nErstellen Sie einen systemd Service mit einem Editor Ihrer Wahl."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/systemd/system/node_exporter.service\n")),Object(a.b)("p",null,"Und f\xfcgen Sie folgende Konfiguration ein."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[Unit]\nDescription=Node Exporter\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/node_exporter\n\n[Install]\nWantedBy=multi-user.target\n")),Object(a.b)("p",null,"Aktivieren und starten Sie den Service mit folgendem Einzeiler."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && systemctl enable node_exporter && systemctl start node_exporter\n")),Object(a.b)("h3",{id:"add-scrape-job-for-node-exporter"},"Scrape Job f\xfcr Node Exporter hinzuf\xfcgen"),Object(a.b)("p",null,"Der Node Exporter ist nun einsatzbereit, Sie m\xfcssen Prometheus jedoch noch anleiten die Daten zu erheben.\n\xd6ffnen Sie die Konfiguration mit einem beliebigen Editor."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/prometheus/prometheus.yml\n")),Object(a.b)("p",null,"F\xfcgen Sie ganz unten am Ende der Datei eine weitere Scrape-Konfiguration ein.\nKopieren Sie folgenden Codeblock hinein und speichern die Datei."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"  - job_name: 'node_exporter'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9100']\n")),Object(a.b)("p",null,"Um die neue Konfiguration anzuwenden muss der Prometheus Service neugestartet werden."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl restart prometheus.service \n")),Object(a.b)("p",null,"Ihre Server-Metriken werden nun ausgelesen und k\xf6nnen in der Prometheus Benutzeroberfl\xe4che eingesehen werden.\nSie werden sie sp\xe4ter f\xfcr das Dashboard ben\xf6tigen."),Object(a.b)("h2",{id:"grafana-setup"},"Grafana Setup"),Object(a.b)("p",null,"Sie k\xf6nnen die Daten in der Benutzeroberfl\xe4che sehen, das war jedoch nicht das Ziel dieser Anleitung.\nWir m\xf6chten die Daten h\xfcbsch angezeigt bekommen und da kommt Grafana ins Spiel."),Object(a.b)("h3",{id:"install-grafana"},"Grafana installieren"),Object(a.b)("p",null,"Bitte \xfcberpr\xfcfen Sie mit ",Object(a.b)("a",{parentName:"p",href:"https://grafana.com/grafana/download?platform=linux"},"diesem Link"),", welches die neuste Version von Grafana ist.\nSie k\xf6nnen entweder die Versionsnummer in folgendem Befehl anpassen oder die Befehle aus der verlinkten Seite kopieren und direkt benutzen.\nZum Ver\xf6ffentlichungszeitpunkt war die aktuellste Version ",Object(a.b)("inlineCode",{parentName:"p"},"7.5.1"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo apt-get install -y adduser libfontconfig1\n$ wget https://dl.grafana.com/oss/release/grafana_7.5.1_amd64.deb\n$ sudo dpkg -i grafana_7.5.1_amd64.deb\n")),Object(a.b)("p",null,"Das Paket enth\xe4lt einen fertigen ",Object(a.b)("inlineCode",{parentName:"p"},"systemd"),"-Service, welchen Sie direkt verwenden k\xf6nnen."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && sudo systemctl enable grafana-server && sudo systemctl start grafana-server\n")),Object(a.b)("h3",{id:"accessing-the-web-interface"},"Die Benutzeroberfl\xe4che aufrufen"),Object(a.b)("p",null,"Sie k\xf6nnen die Benutzeroberfl\xe4che von Grafana nun unter http://localhost:3000/ aufrufen.\nDie standardm\xe4\xdfigen Login-Daten f\xfcr Grafana sind:",Object(a.b)("br",{parentName:"p"}),"\n","Benutzer: ",Object(a.b)("inlineCode",{parentName:"p"},"admin"),Object(a.b)("br",{parentName:"p"}),"\n","Passwort: ",Object(a.b)("inlineCode",{parentName:"p"},"admin"),"  "),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{src:Object(s.a)("/node-monitoring/grafana-home.png")})),Object(a.b)("h3",{id:"configuring-the-datasource"},"Die Datenquelle konfigurieren"),Object(a.b)("p",null,"Bitte klicken Sie das Einstellungs-Zahnrad im Men\xfc und w\xe4hlen ",Object(a.b)("inlineCode",{parentName:"p"},"Datasources"),".\nIm n\xe4chsten Fenster klicken Sie ",Object(a.b)("inlineCode",{parentName:"p"},"Add Datasource")," und w\xe4hlen Sie ",Object(a.b)("inlineCode",{parentName:"p"},"Prometheus"),"."),Object(a.b)("p",null,"Im nachfolgenden Formular m\xfcssen Sie nichts \xe4ndern au\xdfer die URL.\nStellen Sie ",Object(a.b)("inlineCode",{parentName:"p"},"http://localhost:9090/")," ein und klicken ",Object(a.b)("inlineCode",{parentName:"p"},"Save and Test"),".  "),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{src:Object(s.a)("/node-monitoring/grafana-datasource.png")})),Object(a.b)("h3",{id:"importing-the-dashboard"},"Das Dashboard importieren"),Object(a.b)("p",null,"Bitte klicken Sie den ",Object(a.b)("inlineCode",{parentName:"p"},"Plus"),"-Button im Hauptmen\xfc und w\xe4hlen ",Object(a.b)("inlineCode",{parentName:"p"},"import"),"."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{src:Object(s.a)("/node-monitoring/grafana-import.png")})),Object(a.b)("p",null,"Sie k\xf6nnen das ",Object(a.b)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/14158"},"HydraDX Dashboard")," nutzen und um es zu laden geben Sie einfach die ID ",Object(a.b)("inlineCode",{parentName:"p"},"14158")," ein und klicken auf ",Object(a.b)("inlineCode",{parentName:"p"},"Load"),"."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{src:Object(s.a)("/node-monitoring/grafana-import-options.png")})),Object(a.b)("p",null,"Hier m\xfcssen Sie nicht viel einstellen, vergewissern Sie sich lediglich, dass ",Object(a.b)("inlineCode",{parentName:"p"},"Prometheus")," als ",Object(a.b)("inlineCode",{parentName:"p"},"Datasource")," eingestellt ist.\nSie k\xf6nnen den Importvorgang nun abschlie\xdfen."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)("img",{src:Object(s.a)("/node-monitoring/grafana-dashboard.png")})),Object(a.b)("p",null,"Sie sollten das Dashboard sofort mit ihren Daten sehen.\nFalls einzelne Panele leer sind, vergewissern Sie sich bitte, dass die Auswahlfelder ganz oben folgende Werte enthalten:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Chain Metrics"),": Substrate  "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Chain Instance"),": localhost:9615  "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Server Job"),": node_exporter  "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Server Host"),": localhost:9100  ")))}d.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),u=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||a;return t?i.a.createElement(m,l(l({ref:n},c),{},{components:t})):i.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=b;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},93:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return s}));var r=t(16),i=t(94);function a(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,s=a.forcePrependBaseUrl,l=void 0!==s&&s,o=a.absolute,c=void 0!==o&&o;if(!t)return t;if(t.startsWith("#"))return t;if(Object(i.b)(t))return t;if(l)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return c?e+u:u}(a,t,e,n)}}}function s(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},94:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}))}}]);