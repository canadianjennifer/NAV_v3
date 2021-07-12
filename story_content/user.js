function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6kKjPfJhh3k":
        Script1();
        break;
      case "6P8EI9klj9e":
        Script2();
        break;
      case "6PjY7Xpk2Qy":
        Script3();
        break;
      case "5cgWQ9U3olU":
        Script4();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var uname = player.GetVar("userName");

var pname = player.GetVar("projectName");

var pos = player.GetVar("position");

var q1 = player.GetVar("Q1Full");

var q2 = player.GetVar("Q2Full");

var q3 = player.GetVar("Q3Full");

var q4 = player.GetVar("Q4Full");

var q5 = player.GetVar("Q5Full");

var q6 = player.GetVar("Q6Full");

var q7 = player.GetVar("Q7Full");

var q8 = player.GetVar("Q8Full");

var q9 = player.GetVar("Q9Full");

var q10 = player.GetVar("Q10Full");

var urlstring = ("story_content/external_files/minimalchange.html?uname=" + uname + "&pname=" + pname+ "&pos=" + pos + "&q1=" + q1  + "&q2=" + q2+ "&q3=" + q3  + "&q4=" + q4  + "&q5=" + q5  + "&q6=" + q6  + "&q7=" + q7  + "&q8=" + q8  + "&q9=" + q9  + "&q10=" + q10);

window.open(urlstring,"minimalchange.html");
}

function Script2()
{
  var player = GetPlayer();

var uname = player.GetVar("userName");

var pname = player.GetVar("projectName");

var pos = player.GetVar("position");

var q1 = player.GetVar("Q1Full");

var q2 = player.GetVar("Q2Full");

var q3 = player.GetVar("Q3Full");

var q4 = player.GetVar("Q4Full");

var q5 = player.GetVar("Q5Full");

var q6 = player.GetVar("Q6Full");

var q7 = player.GetVar("Q7Full");

var q8 = player.GetVar("Q8Full");

var q9 = player.GetVar("Q9Full");

var q10 = player.GetVar("Q10Full");

var urlstring = ("story_content/external_files/lowchange.html?uname=" + uname + "&pname=" + pname+ "&pos=" + pos + "&q1=" + q1  + "&q2=" + q2+ "&q3=" + q3  + "&q4=" + q4  + "&q5=" + q5  + "&q6=" + q6  + "&q7=" + q7  + "&q8=" + q8  + "&q9=" + q9  + "&q10=" + q10);

window.open(urlstring,"lowchange.html");
}

function Script3()
{
  var player = GetPlayer();

var uname = player.GetVar("userName");

var pname = player.GetVar("projectName");

var pos = player.GetVar("position");

var q1 = player.GetVar("Q1Full");

var q2 = player.GetVar("Q2Full");

var q3 = player.GetVar("Q3Full");

var q4 = player.GetVar("Q4Full");

var q5 = player.GetVar("Q5Full");

var q6 = player.GetVar("Q6Full");

var q7 = player.GetVar("Q7Full");

var q8 = player.GetVar("Q8Full");

var q9 = player.GetVar("Q9Full");

var q10 = player.GetVar("Q10Full");

var urlstring = ("story_content/external_files/mediumchange.html?uname=" + uname + "&pname=" + pname+ "&pos=" + pos + "&q1=" + q1  + "&q2=" + q2+ "&q3=" + q3  + "&q4=" + q4  + "&q5=" + q5  + "&q6=" + q6  + "&q7=" + q7  + "&q8=" + q8  + "&q9=" + q9  + "&q10=" + q10);

window.open(urlstring,"mediumchange.html");
}

function Script4()
{
  var player = GetPlayer();

var uname = player.GetVar("userName");

var pname = player.GetVar("projectName");

var pos = player.GetVar("position");

var q1 = player.GetVar("Q1Full");

var q2 = player.GetVar("Q2Full");

var q3 = player.GetVar("Q3Full");

var q4 = player.GetVar("Q4Full");

var q5 = player.GetVar("Q5Full");

var q6 = player.GetVar("Q6Full");

var q7 = player.GetVar("Q7Full");

var q8 = player.GetVar("Q8Full");

var q9 = player.GetVar("Q9Full");

var q10 = player.GetVar("Q10Full");

var urlstring = ("story_content/external_files/highchange.html?uname=" + uname + "&pname=" + pname+ "&pos=" + pos + "&q1=" + q1  + "&q2=" + q2+ "&q3=" + q3  + "&q4=" + q4  + "&q5=" + q5  + "&q6=" + q6  + "&q7=" + q7  + "&q8=" + q8  + "&q9=" + q9  + "&q10=" + q10);

window.open(urlstring,"highchange.html");
}

