'use strict';
function handlebarsSetup() {
  Handlebars.registerPartial('userDetails', $('#user-details-partial').html())
}

$(document).ready(function (){
  handlebarsSetup()
})

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories () {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
    const src = $('#results-template').html()
    const template = Handlebars.compile(src)
    $('#results').html(template(data))
  }).fail(function (error) {
    displayError(error)
  })
}

function showCommits(e) {
  const owner = e.dataset.owner
  const repo = e.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    const template = Handlebars.compile($('#commits-template').html())
    $('#details').html(template(data))
  }).fail(function (error) {
    displayError(error)
  })
}