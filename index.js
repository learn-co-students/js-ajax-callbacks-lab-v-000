function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function showCommits(el) {
  var url = ("https://api.github.com/repos/" + el['dataset']['owner'] + "/"+ el['dataset']['repository'] + '/commits');

  $.get(url, function(data){
    for (var i in data) {
      let obj = {};
      obj.sha = data[i]['sha'];
      $('#details').append(obj.sha);
    }
  })
}

function searchClick() {
  $('#search').on('click', function(event){
    searchRepositories();
  });
}

function searchRepositories() {
  var terms = $('#searchTerms').val();
  var url = ("https://api.github.com/search/repositories?q=" + terms);
  var results = [];

  $.get(url, function(data) {
    for(var i in data['items']) {
      let obj = {};
      obj.name = data['items'][i].name;
      obj.description = data['items'][i].description;
      obj.url = data['items'][i].html_url;
      obj.login = data['items'][i]['owner'].login;
      obj.avatar = data['items'][i]['owner'].avatar_url;
      obj.link = data['items'][i]['owner'].url;
      displayUser(obj);
    }
  }).fail(function(error){
    console.log('something went wrong ' + error);
  });
}

function commitClick(){
  $('#show').on('click', function(event){
    showCommits();
  })
}

function displayUser(user){
  var source = $('#user-details-partial').html();
  var template = Handlebars.compile(source);
  var context = user;
  var html = template(context);
  $('#results').append(html);
}

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

$(document).ready(function (){
  handlebarsSetup()
})

$(document).ajaxSuccess(function(){
  showCommits();
})
