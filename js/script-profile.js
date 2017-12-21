var id;


function getIdFromURL() {
  var url = location.href;
  id = url.match(/id=(\d)/)[1];
};

getIdFromURL();


function getWomenJSON() {
  return $.ajax({
    url: 'js/women-feed.json',
    dataType: 'json'
  });
};



getWomenJSON().then(function(data) {
  var strImg = '';
  var strAbout = '';
  for (var i = 0; i < data.length; i++) {
    if(data[i].ID == id) {
      for (var k = 0; k < data[i].images.length; k++) {
        strImg += '<div class="prof"><img src="'+ data[i].images[k] +'" alt="'+ data[i].Name +'" class="img-prof"></div>';
      };
      strAbout += 'HEIGHT: <span class="about-data">' + data[i].Height + '</span>'+
                  'BUST: <span class="about-data">' + data[i].Bust + '</span>'+
                  'WAIST: <span class="about-data">' + data[i].Waist + '</span>'+
                  'HIPS: <span class="about-data">' + data[i].Hips + '</span>'+
                  'SHOES: <span class="about-data">' + data[i].Shoes + '</span>'+
                  'HAIR: <span class="about-data">' + data[i].Hair + '</span>'+
                  'EYES: <span class="about-data">' + data[i].Eyes + '</span>';
      $('.profile-all').html(strImg);
      $('#profile-name').html(data[i].Name + ' ' + data[i].SureName);
      $('#profile-data').html(strAbout);
      break;
    };
  };
}).fail(function(jqXHR, textStatus, errorThrown ){
  alert('Sorry, something wrong with server');
});
