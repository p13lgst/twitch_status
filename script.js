var users = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas"
];

$("document").ready(function (){
  $("#users").hide();

  var html = "";
  users.forEach(function(e,i,a) {
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + e +'?callback=?', function(json) {
      console.log(json);
      var classes = "text-left";
      var channelLink = "https://twitch.tv/" + e.toLowerCase();
      var displayName;
      var status;


      if (json.stream) {
        classes += " bg-success text-success";
        displayName = json.stream.channel.display_name;
        status=json.stream.channel.status;
      } else {
        classes += ' bg-danger text-danger';
        displayName = e;
        status="";
      }

      html +='<div class="'+classes+'"><a href="'+channelLink+'"><h2>'+displayName+'</h2><p>'+status+'</p></a></div>';
      $("#users").html(html);

    });
  });
  console.log(html)

  $("#users").fadeIn('slow');
});
