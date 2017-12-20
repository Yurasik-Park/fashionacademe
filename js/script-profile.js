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
  for (var i = 0; i < data.length; i++) {
    if(data[i].ID == id) {
      for (var k = 0; k < data[i].images.length; k++) {
        strImg += '<div class="prof"><img src="'+ data[i].images[k] +'" alt="'+ data[i].Name +'" class="img-prof"></div>';
      };
      $('.profile-all').html(strImg);
      break;
    };
  };
}).fail(function(jqXHR, textStatus, errorThrown ){
  alert('Sorry, something wrong with server');
});
