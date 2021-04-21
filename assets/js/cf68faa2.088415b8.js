(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(93)),s=n(92),i={id:"node_monitoring",title:"Node Monitoring"},l={unversionedId:"node_monitoring",id:"node_monitoring",isDocsHomePage:!1,title:"Node Monitoring",description:"In this chapter we will walk you through the setup of local monitoring for your validator node.",source:"@site/docs/node_monitoring.md",slug:"/node_monitoring",permalink:"/node_monitoring",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/node_monitoring.md",version:"current",sidebar:"sidebar",previous:{title:"Performance benchmark",permalink:"/performance_benchmark"},next:{title:"Set up a development chain",permalink:"/build_dev_chain"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Prometheus Setup",id:"prometheus-setup",children:[{value:"User and Directories",id:"user-and-directories",children:[]},{value:"Install Prometheus",id:"install-prometheus",children:[]},{value:"Starting Prometheus",id:"starting-prometheus",children:[]}]},{value:"Node Exporter",id:"node-exporter",children:[{value:"Install Node Exporter",id:"install-node-exporter",children:[]},{value:"Create a Systemd Service",id:"create-a-systemd-service",children:[]},{value:"Add Scrape Job for Node Exporter",id:"add-scrape-job-for-node-exporter",children:[]}]},{value:"Grafana Setup",id:"grafana-setup",children:[{value:"Install Grafana",id:"install-grafana",children:[]},{value:"Accessing the Web Interface",id:"accessing-the-web-interface",children:[]},{value:"Configuring the Datasource",id:"configuring-the-datasource",children:[]},{value:"Importing the Dashboard",id:"importing-the-dashboard",children:[]}]}],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this chapter we will walk you through the setup of local monitoring for your validator node."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"You must have your ",Object(o.b)("a",{parentName:"p",href:"/node_setup"},"validator node")," up and running.",Object(o.b)("br",{parentName:"p"}),"\n","This guide was tested on Ubuntu 20.04 LTS release."),Object(o.b)("h2",{id:"prometheus-setup"},"Prometheus Setup"),Object(o.b)("p",null,"In the first step we will set up the Prometheus server."),Object(o.b)("h3",{id:"user-and-directories"},"User and Directories"),Object(o.b)("p",null,"We create a user just for monitoring purposes which has no home directory and can't be used to log in."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo useradd --no-create-home --shell /usr/sbin/nologin prometheus\n")),Object(o.b)("p",null,"Then we create directories for the executable and the configuration file."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo mkdir /etc/prometheus\n$ sudo mkdir /var/lib/prometheus\n")),Object(o.b)("p",null,"Change ownership of the directories to restrict them to our new monitoring user."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown -R prometheus:prometheus /etc/prometheus\n$ sudo chown -R prometheus:prometheus /var/lib/prometheus\n")),Object(o.b)("h3",{id:"install-prometheus"},"Install Prometheus"),Object(o.b)("p",null,"Check latest version number of Prometheus at the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/prometheus/prometheus/releases/"},"GitHub release page"),".",Object(o.b)("br",{parentName:"p"}),"\n","At the time of writing it is v2.25.2. Insert the latest release version in the following commands."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# download prometheus\n$ wget https://github.com/prometheus/prometheus/releases/download/v2.25.2/prometheus-2.25.2.linux-amd64.tar.gz\n\n# unpack the binaries\n$ tar xfz prometheus-*.tar.gz\n\n# enter the unpacked directory\n$ cd prometheus-2.25.2.linux-amd64\n")),Object(o.b)("p",null,"Now copy over the binaries into the local folder."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo cp ./prometheus /usr/local/bin/\n$ sudo cp ./promtool /usr/local/bin/\n")),Object(o.b)("p",null,"We now need to assign those binaries to our freshly created user."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown prometheus:prometheus /usr/local/bin/prometheus\n$ sudo chown prometheus:prometheus /usr/local/bin/promtool\n")),Object(o.b)("p",null,"Next up we'll copy the web interface and the configuration presets."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo cp -r ./consoles /etc/prometheus\n$ sudo cp -r ./console_libraries /etc/prometheus\n")),Object(o.b)("p",null,"You may have guessed it already but we're also changing the ownership of those directories."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown -R prometheus:prometheus /etc/prometheus/consoles\n$ sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries\n")),Object(o.b)("p",null,"We now have everything we need from the downloaded package so we will go one step back and do some cleanup."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ cd .. && rm -rf prometheus*\n")),Object(o.b)("p",null,"Let's create a ",Object(o.b)("inlineCode",{parentName:"p"},"YAML")," configuration file for Prometheus with the editor of your choice (nano / vim / pico)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/prometheus/prometheus.yml\n")),Object(o.b)("p",null,"Our config is divided in three sections:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"global"),": sets the default values for ",Object(o.b)("inlineCode",{parentName:"li"},"scrape_interval")," and the rule-execution interval with ",Object(o.b)("inlineCode",{parentName:"li"},"evaluation_interval")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rule_files"),": specify rule-files the Prometheus server should load"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"scrape_configs"),": this is where you set the monitoring-resources")),Object(o.b)("p",null,"We will keep it very basic and end up with something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'global:\n  scrape_interval: 15s\n  evaluation_interval: 15s\n\nrule_files:\n  # - "weHaveNo.rules"\n\nscrape_configs:\n  - job_name: "prometheus"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9090"]\n  - job_name: "substrate_node"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9615"]\n')),Object(o.b)("p",null,"The first scrape job exports data of Prometheus itself, the second one exports the HydraDX node metrics.\nWe adjusted the ",Object(o.b)("inlineCode",{parentName:"p"},"scrape_interval")," of both jobs to get more detailed statistics. This overrides the global values.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"target")," in ",Object(o.b)("inlineCode",{parentName:"p"},"static_configs")," sets where the exporters run, we stick to the default ports here."),Object(o.b)("p",null,"After saving the configuration we will - once again - change the ownership."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml\n")),Object(o.b)("h3",{id:"starting-prometheus"},"Starting Prometheus"),Object(o.b)("p",null,"To have Prometheus starting automatically and running in the background we'll use ",Object(o.b)("inlineCode",{parentName:"p"},"systemd"),".\nCreate a new config (again with the editor of your choice):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/systemd/system/prometheus.service\n")),Object(o.b)("p",null,"Paste the following configuration and save the file."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Unit]\n  Description=Prometheus Monitoring\n  Wants=network-online.target\n  After=network-online.target\n\n[Service]\n  User=prometheus\n  Group=prometheus\n  Type=simple\n  ExecStart=/usr/local/bin/prometheus \\\n  --config.file /etc/prometheus/prometheus.yml \\\n  --storage.tsdb.path /var/lib/prometheus/ \\\n  --web.console.templates=/etc/prometheus/consoles \\\n  --web.console.libraries=/etc/prometheus/console_libraries\n  ExecReload=/bin/kill -HUP $MAINPID\n\n[Install]\n  WantedBy=multi-user.target\n")),Object(o.b)("p",null,"Next we will perform the following three steps:\n",Object(o.b)("inlineCode",{parentName:"p"},"systemctl deamon-reload")," loads new configurations and updates existing\n",Object(o.b)("inlineCode",{parentName:"p"},"systemctl enable")," activates our new service\n",Object(o.b)("inlineCode",{parentName:"p"},"systemctl start")," triggers the execution of the service"),Object(o.b)("p",null,"You can perform the steps above in one command by executing:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && systemctl enable prometheus && systemctl start prometheus\n")),Object(o.b)("p",null,"You should now be able to access Prometheus' web interface at http://localhost:9090/."),Object(o.b)("h2",{id:"node-exporter"},"Node Exporter"),Object(o.b)("p",null,"We will install Node Exporter to scrape server metrics that will be used in the dashboard.",Object(o.b)("br",{parentName:"p"}),"\n","Please check the version number of the latest release ",Object(o.b)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter/releases/"},"here")," and update the command.",Object(o.b)("br",{parentName:"p"}),"\n","At the time of writing the latest version was ",Object(o.b)("inlineCode",{parentName:"p"},"1.1.2"),"."),Object(o.b)("h3",{id:"install-node-exporter"},"Install Node Exporter"),Object(o.b)("p",null,"Download the latest release."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ wget https://github.com/prometheus/node_exporter/releases/download/v1.1.2/node_exporter-1.1.2.linux-amd64.tar.gz\n")),Object(o.b)("p",null,"Unpack the archive you just downloaded. This will create a folder called ",Object(o.b)("inlineCode",{parentName:"p"},"node_exporter-1.1.2.linux-amd64"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ tar xvf node_exporter-1.1.2.linux-amd64.tar.gz\n")),Object(o.b)("p",null,"Next we copy the binary into our local application directory and assign it to our monitoring user."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# copy binary\n$ cp node_exporter-1.1.2.linux-amd64/node_exporter /usr/local/bin\n\n# set ownership\n$ sudo chown prometheus:prometheus /usr/local/bin/node_exporter\n")),Object(o.b)("p",null,"We can now do some cleanup and remove the downloaded and unpacked package."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ rm -rf node_exporter*\n")),Object(o.b)("h3",{id:"create-a-systemd-service"},"Create a Systemd Service"),Object(o.b)("p",null,"Similar to prometheus we want Node Exporter to run as a service too.",Object(o.b)("br",{parentName:"p"}),"\n","Create a systemd service with your editor of choice."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/systemd/system/node_exporter.service\n")),Object(o.b)("p",null,"And paste the following configuration into it."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[Unit]\nDescription=Node Exporter\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/node_exporter\n\n[Install]\nWantedBy=multi-user.target\n")),Object(o.b)("p",null,"We will now activate and start the service with this one-liner."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && systemctl enable node_exporter && systemctl start node_exporter\n")),Object(o.b)("h3",{id:"add-scrape-job-for-node-exporter"},"Add Scrape Job for Node Exporter"),Object(o.b)("p",null,"The Node Exporter is now up and running but we need to tell Prometheus to scrape its data.",Object(o.b)("br",{parentName:"p"}),"\n","We will open the configuration file once again with the editor of choice."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/prometheus/prometheus.yml\n")),Object(o.b)("p",null,"And at the very bottom of the file we will append one more scrape config.",Object(o.b)("br",{parentName:"p"}),"\n","Paste the following content and save the file."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"  - job_name: 'node_exporter'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9100']\n")),Object(o.b)("p",null,"The apply the changes configuration a restart of the Prometheus service is required."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl restart prometheus.service \n")),Object(o.b)("p",null,"Your server metrics are now scraped and can be found in the Prometheus web interface.",Object(o.b)("br",{parentName:"p"}),"\n","We will need them later for our dashboard."),Object(o.b)("h2",{id:"grafana-setup"},"Grafana Setup"),Object(o.b)("p",null,"We can see our metrics in the web interface, but that's not how we want to monitor it.",Object(o.b)("br",{parentName:"p"}),"\n","We want it nice and beautiful. That's where Grafana comes into play. "),Object(o.b)("h3",{id:"install-grafana"},"Install Grafana"),Object(o.b)("p",null,"Please check what's the latest Grafana Version ",Object(o.b)("a",{parentName:"p",href:"https://grafana.com/grafana/download?platform=linux"},"with this link"),".",Object(o.b)("br",{parentName:"p"}),"\n","You can either change the version number in the following commands or copy the install commands directly from the link.",Object(o.b)("br",{parentName:"p"}),"\n","At the time of writing the latest version was ",Object(o.b)("inlineCode",{parentName:"p"},"7.5.1"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo apt-get install -y adduser libfontconfig1\n$ wget https://dl.grafana.com/oss/release/grafana_7.5.1_amd64.deb\n$ sudo dpkg -i grafana_7.5.1_amd64.deb\n")),Object(o.b)("p",null,"The package comes with a builtin ",Object(o.b)("inlineCode",{parentName:"p"},"systemd"),"-service which we will configure and start just like the Prometheus service."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && sudo systemctl enable grafana-server && sudo systemctl start grafana-server\n")),Object(o.b)("h3",{id:"accessing-the-web-interface"},"Accessing the Web Interface"),Object(o.b)("p",null,"We'll be able to open the Grafana web interface at http://localhost:3000/.",Object(o.b)("br",{parentName:"p"}),"\n","The default login Grafana is:",Object(o.b)("br",{parentName:"p"}),"\n","User: ",Object(o.b)("inlineCode",{parentName:"p"},"admin"),Object(o.b)("br",{parentName:"p"}),"\n","Password: ",Object(o.b)("inlineCode",{parentName:"p"},"admin"),"  "),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:Object(s.a)("/node-monitoring/grafana-home.png")})),Object(o.b)("h3",{id:"configuring-the-datasource"},"Configuring the Datasource"),Object(o.b)("p",null,"Please click the settings gear in the menu and select datasources.",Object(o.b)("br",{parentName:"p"}),"\n",'In the next window you click "Add Datasource" and select "Prometheus".  '),Object(o.b)("p",null,"In the following form you don't need to change anything but the URL.",Object(o.b)("br",{parentName:"p"}),"\n","Set ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:9090/")," and click ",Object(o.b)("inlineCode",{parentName:"p"},"Save and Test"),".  "),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:Object(s.a)("/node-monitoring/grafana-datasource.png")})),Object(o.b)("h3",{id:"importing-the-dashboard"},"Importing the Dashboard"),Object(o.b)("p",null,"Please click the ",Object(o.b)("inlineCode",{parentName:"p"},"Plus"),"-button in the main navigation and select ",Object(o.b)("inlineCode",{parentName:"p"},"import"),".  "),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:Object(s.a)("/node-monitoring/grafana-import.png")})),Object(o.b)("p",null,"We will use the ",Object(o.b)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/14158"},"HydraDX Dashboard")," and to load it you simply input the id ",Object(o.b)("inlineCode",{parentName:"p"},"14158")," and hit the ",Object(o.b)("inlineCode",{parentName:"p"},"Load"),"-button.  "),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:Object(s.a)("/node-monitoring/grafana-import-options.png")})),Object(o.b)("p",null,"You don't need much configuration here, just make sure Prometheus is used as the datasource.",Object(o.b)("br",{parentName:"p"}),"\n","You can now finish the import.  "),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)("img",{src:Object(s.a)("/node-monitoring/grafana-dashboard.png")})),Object(o.b)("p",null,"You should now see your dashboard right away.",Object(o.b)("br",{parentName:"p"}),"\n","If some panels are empty please ensure your selection above the panels is like this:    "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chain Metrics"),": Substrate  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Chain Instance"),": localhost:9615  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Server Job"),": node_exporter  "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Server Host"),": localhost:9100  ")))}b.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n(16),a=n(94);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,s=o.forcePrependBaseUrl,i=void 0!==s&&s,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(o,n,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);