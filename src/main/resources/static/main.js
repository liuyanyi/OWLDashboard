function scoreAjax() {
    var scorelist;
    var respon = null;
    var xmlhttp = new XMLHttpRequest();
    if (xmlhttp != null) {
        xmlhttp.open("GET", "/scores", true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = doResult;
    }

    function doResult() {
        if (xmlhttp.readyState === 4) {
            respon = '{ "score" : ' + xmlhttp.responseText + '}';
            scorelist = JSON.parse(respon);
            TableGenerate(scorelist);
        }
    }
}

function TableGenerate(scorelist) {
    var table = document.getElementById("dashboard");
    var l = scorelist.score.length;
    for (var i = 0; i < l; i++) {
        var newTR = table.insertRow(i);
        var cellRank = newTR.insertCell(-1);
        var cellTeam = newTR.insertCell(-1);
        var cellRegion = newTR.insertCell(-1);
        var cellWin = newTR.insertCell(-1);
        var cellLose = newTR.insertCell(-1);
        cellRank.outerHTML = "<th scope=\"row\">" + (i + 1) + "</th>";
        cellTeam.innerText = scorelist.score[i].teamName;
        cellRegion.innerText = scorelist.score[i].region;
        cellWin.innerText = scorelist.score[i].win;
        cellLose.innerText = scorelist.score[i].lose;
        newTR.setAttribute("id", i + 1);
        newTR.setAttribute("onclick", "jump(\"" + scorelist.score[i].nameAbbr + "\")");
    }
}


function teamAjax() {
    var teamlist;
    var respon = null;
    var xmlhttp = new XMLHttpRequest();
    if (xmlhttp != null) {
        xmlhttp.open("GET", "/teaminfo", true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = doResult;
    }

    function doResult() {
        if (xmlhttp.readyState === 4) {
            respon = '{ "team" : ' + xmlhttp.responseText + '}';
            teamlist = JSON.parse(respon);
            CardsGenerate(teamlist);
        }
    }
}

function CardsGenerate(teamlist) {
    var maincont = document.getElementById('maincont');
    for(var i=0;i<teamlist.team.length;i++){

        if(GetQueryString("abbr")===teamlist.team[i].nameAbbr){
            createButton(maincont);
            createCard(maincont,teamlist.team[i]);
            createInfoCard(maincont,teamlist.team[i]);
            var n=document.getElementById(teamlist.team[i].nameAbbr);
            n.setAttribute("onclick","");
            return;
        }

    }
    for(var j=0;j<teamlist.team.length;j++)
        createCard(maincont,teamlist.team[j]);

    // for (var i = 0; i < teamlist.team.length; i++)
    //
    //      var info = team[i];

    function createButton(maincont) {
        var part = document.createElement("div");
        maincont.appendChild(part);
        part.outerHTML="    <div class=\"row\" style=\"margin: 20px;\">\n" +
            "        <div class=\"col\">\n" +
            "            <button class=\"btn btn-primary\" onclick=\"ref()\">Show All Team</button>\n" +
            "        </div>\n" +
            "    </div>";
    }

    function createInfoCard(maincont,info) {
        var infoCard =document.createElement("div");
        var abbr = info.nameAbbr;
        var name = info.teamName;
        var region = info.region;
        var pcolor = info.primaryColor;
        var acolor = info.accentColor;
        maincont.appendChild(infoCard);
        infoCard.outerHTML="    <div id=\""+abbr+"-info\" class=\"card orgi-info\" onmouseover=\"omovinfo('"+abbr+"-info','"+acolor+"')\" onmouseleave=\"omleinfo('"+abbr+"-info','"+pcolor+"','"+acolor+"')\">\n" +
            "        <div class=\"container\">\n" +
            "            <div class=\"row align-items-center\">\n" +
            "                <div class=\"col-sm\">\n" +
            "                    <div class=\"container\">\n" +
            "                        <h3 style=\"margin: 10px\">"+name+"</h3>\n" +
            "                        <div class=\"w-100\"></div>\n" +
            "                        <p style=\"margin: 10px\">"+region+"</p>\n" +
            "                        <div class=\"w-100\"></div>\n" +
            "                        <p style=\"margin: 10px\">FULL TEAM INTRODUCE (UNDER CONSTRUCT)</p>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>";
        omleinfo(abbr+"-info", pcolor, acolor);
    }

    function createCard(maincont, info) {
        var newcard = document.createElement("div");
        var abbr = info.nameAbbr;
        var imglocate = info.image;
        var name = info.teamName;
        var region = info.region;
        var pcolor = info.primaryColor;
        var acolor = info.accentColor;
        maincont.appendChild(newcard);
        newcard.outerHTML = "\n" +
            "    <div id=\"" + abbr + "\" class=\"card orgi\" onclick=\"jump('" + abbr + "')\" onmouseover=\"omov('" + abbr + "','" + pcolor + "')\" onmouseleave=\"omle('" + abbr + "','" + pcolor + "','" + acolor + "')\" >\n" +
            "        <div class=\"container\">\n" +
            "            <div class=\"row align-items-center\">\n" +
            "                <div class=\"col-sm\" style=\"text-align: center\">\n" +
            "                    <img src=\"" + imglocate + "\" style=\"width: 35%\">\n" +
            "                </div>\n" +
            "                <div class=\"col-sm\">\n" +
            "                    <div class=\"container\">\n" +
            "                        <h3 style=\"margin: 10px\">" + name + "</h3>\n" +
            "                        <div class=\"w-100\"></div>\n" +
            "                        <p style=\"margin: 10px\">" + region + "</p>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n";
        omle(abbr, pcolor, acolor);
        //newcard.setAttribute("style","border-color:"+acolor+";border-left-color:"+pcolor+";");
    }

}


/*鼠标在*/
function omov(id, pcolor) {
    var card = document.getElementById(id);
    card.setAttribute("class", "card orgi mouseover");
    card.setAttribute("style", "border-left-color:" + pcolor + ";");
}

function omovinfo(id, acolor) {
    var card = document.getElementById(id);
    card.setAttribute("class", "card orgi-info mouseover");
    card.setAttribute("style", "border-top-color:" + acolor + ";");
}

/*鼠标走*/
function omle(id, pcolor, acolor) {
    var card = document.getElementById(id);
    card.setAttribute("class", "card orgi");
    card.setAttribute("style", "border-color:" + acolor + ";border-left-color:" + pcolor + ";");
}

function omleinfo(id, pcolor, acolor) {
    var card = document.getElementById(id);
    card.setAttribute("class", "card orgi-info");
    card.setAttribute("style", "border-color:" + pcolor + ";border-top-color:" + acolor + ";");
}


function choice() {
    var team = GetQueryString('abbr');
    var info = document.getElementById(team);
    info.style.display = "block";
}


function jump(abbr) {
    window.location.href = "/team?abbr=" + abbr;
}


function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}


function ref() {
    window.location.href = "/team";
}