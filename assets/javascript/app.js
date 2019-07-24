$(document).ready(function () {
    ​
    const apiKey = "api-key=nBAkbogRHgIsRY86uWJH4q0ViWa7dkF2";
    var q = $("#search-term").val();
    var rec = $("#num-records").val();
    var startYear = $("#start-year").val();
    var endYear = $("data-endYear").val();​
    const nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + apiKey + "&q=" + "begin_date=" + startYear + "end_date=" + endYear;​
    console.log(nytURL);​
    function runQuery() {
        ​
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            ​
            console.log(response);​
            var results = response[i].response;​
            $("button").on('click', '#search-btn', function (event) {

                event.preventDefault();​

                console.log(nytURL);​​
                for (var i = 0; i < results.length; i++) {
                    ​​​​
                    var spaceOut = $("<div class='col-md-4'>");​
                    var title = results[i].docs.headline.main;
                    spaceOut.append(title);
                    var author = results[i].docs.byline.original;
                    spaceOut.append(author);
                    var snippet = results[i].docs.snippet;
                    spaceOut.append(snippet);
                    var webURL = results[i].docs.webURL;
                    spaceOut.append(webURL)​
                    $('#result').prepend(spaceOut);​
                }​
            })​​​​
        });
    }
});

function constructQuery(q, num, start, end) {
    var query = nytURL + q + num;

    if (start) {
        query += start;
    }

    if (end) {
        query += end;
    }
}