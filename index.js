searchRepositories =()=>{
  const searchTerms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    // console.log(data.items[0])
    $('#results').html(renderResults(data));
  }).fail(error =>{
    displayError();
  });
}

displayError = ()=>{$('#errors').html("I'm sorry, there's been an error. Please try again.");}

renderResults = (data) => {
  return data.items.map(item => {
    // console.log(item.name);
    return `<div>
            ${item.description}
            </div>
            <div>
              <a href="${item.html_url}"> ${item.name}</a>
              <p> ${item.description}</p>
              <p><a href="${item.owner.url}"> ${item.owner.login}</a></p>
              <img src="${item.owner.avatar_url}" width="32" height="32" />
              <a href="#" data-repository="${item.name}" data-owner="${item.owner.login}" onclick="showCommits(this)"> Show commits </a>
            </div>
          `
}).join('')
}

function showCommits(el){
  console.log(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`)
  $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, data=> {
    $('#details').html(renderCommits(data));
  }).fail(error =>{
    displayError();
  });
}

function renderCommits(data) {
  return `<ul> ${data.map(commit => {
    return displayCommit(commit);
  }).join('')}
          </ul>
  `
};

function displayCommit(commit) {
  return `<p>${commit.sha}</p>
  <p>${commit.commit.message}</p>`
}


$(document).ready(function (){

});
