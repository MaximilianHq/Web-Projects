$.get("/docs/saker/footer/footer.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});