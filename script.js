// Fetch the Markdown file and render it
fetch('markdown.md')
    .then(response => response.text())
    .then(text => {
        document.getElementById('content').innerHTML = marked.parse(text);
    })
    .catch(err => console.error('Error loading the Markdown file:', err));