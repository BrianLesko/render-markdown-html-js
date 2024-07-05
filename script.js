window.onload = function() {
    fetch('test.md')
        .then(response => response.text())
        .then(text => {
            document.getElementById('content').innerHTML = marked(text);
        });
}