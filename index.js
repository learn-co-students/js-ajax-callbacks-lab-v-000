function handlebarsSetup() {
    //put any handlebars setup in here
    Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function() {
    handlebarsSetup()
});

function displayError() {
    $('#errors').text("I'm sorry, there's been an error. Please try again.");
}

function displayResults(results) {
    var template = Handlebars.compile(document.getElementById("result-template").innerHTML);
    var result = template(results);
    document.getElementById('results').innerHTML = result;
}

function searchRepositories() {
    terms = $('#searchTerms')[0].value
    $.getJSON("https://api.github.com/search/repositories?q=" + terms, function(response) {
        results = response.items;
        displayResults(results);
    }).fail(function(error) { displayError(error) });
}

function displayCommits(results) {
    var template = Handlebars.compile(document.getElementById("commits-template").innerHTML);
    var result = template(results);
    document.getElementById('details').innerHTML = result;
}

function showCommits(el) {
    const repo = el.dataset.repository;
    const owner = el.dataset.owner;
    commits_url = 'https://api.github.com/repos/' + owner + '/' + repo + '/commits'

    $.getJSON(commits_url, function(response) {
        displayCommits(response);
    }).fail(function(error) { displayError(error) });
}