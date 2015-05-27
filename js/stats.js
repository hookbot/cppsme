// Update User Stats
  (function(){
    var refresh = function(){
      var script = document.createElement("script");
      script.type = 'text/javascript';
      script.src = "http://stats.cpps.me/users.js?" + new Date().getTime();
      script.onload = function(){
        if (stats && stats.total) {
          var now = Math.round(+new Date()/1000);
          var txt = "";
          txt += "Stats as of: <b>" + Math.round((now-stats.when)/8640)/10 + "</b> (Days ago)<br>\n";
          txt += "Total users: <b>" + stats.total + "</b><br>\n";
          txt += "Active users: <b>" + stats.active + "</b> (Login within past 30 days)<br>\n";
          txt += "Users Online: <b>" + stats.online + "</b> (Right now)<br>\n";
          txt += "Most Online: <b>" + stats.max_online + "</b> (MAX Simultaneous Users)<br>\n";
          txt += "Max Reached: <b>" + Math.round((now-stats.max_when)/8640)/10 + "</b> (Days ago)<br>\n";
          txt += "<table border=1>\n";
          txt += "<tr><th>World</th><th>Lang</th><th>Now</th></tr>\n";
          for (var i = 0; i < stats.servers.length; i++) {
            var s = stats.servers[i];
            if (s.a > 3600) s.p = '?';
            txt += "<tr><td>" + s.name + "</td><td>" + s.l + "</td><td align=right>" + s.p + "</td></tr>\n";
          }
          txt += "</table>\n";
          var userstats = document.getElementById("userstats");
          if (userstats) userstats.innerHTML = txt;

          txt = "";
          txt += "<a href=http://cpps.me/stats.html target=_top><font color=#5580B4>Users Online: <b>" + stats.online + "</b></font></a><br>\n";
          var online = document.getElementById("online");
          if (online) online.innerHTML = txt;
        } // if stats.total
      };
      script.onreadystatechange = function(){
        if(this.readyState != "complete") return;
        this.onload();
      }
      document.getElementsByTagName("head")[0].appendChild(script);
    };
    refresh();
    setInterval(refresh, 60000);
  })();
// END stats.js