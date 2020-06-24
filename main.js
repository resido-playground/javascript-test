function loadJSON(callback, url) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '/javascript-test/book.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);  
}

window.addEventListener('load', (event) => {
    let h = '<p>スクリプトで追加しました。</p>';
    let p = document.querySelector('p');
    p.insertAdjacentHTML('afterend', h);
    
    loadJSON(function(response) {
        // Parse JSON string into object
        let book = JSON.parse(response);
        h = '<p>' + book.title + '</p>';
        p.insertAdjacentHTML('afterend', h);
    });
});
