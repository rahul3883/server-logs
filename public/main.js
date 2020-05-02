const socket = io.connect('http://localhost:5000');

socket.on('data', (data) => {
    output(syntaxHighlight(getStr(data)));
    console.log(data);
});

socket.on('reconnect', () => {
    console.debug('reconnected');
});

console.debug = function() {
    function clear(o) {

        var obj = JSON.parse(JSON.stringify(o));
        // [!] clone

        if (obj && typeof obj === 'object') {
            obj.__proto__ = null;

            // clear

            for (var j in obj) {
                obj[j] = clear(obj[j]); // recursive
            }
        }
        return obj;
    }
    for (var i = 0, args = Array.prototype.slice.call(arguments, 0); i < args.length; i++) {
        args[i] = clear(args[i]);
    }
    console.log.apply(console, args);
};

function output(inp) {
    document.getElementsByClassName('output')[0].innerHTML = inp;
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function getStr(obj) {
    let s = JSON.stringify(obj, function(k,v){
        if(v instanceof Array && typeof v[0] !== 'object')
            return JSON.stringify(v);
        return v;
    }, 4);
    s=s.replace(/"(\w+)"\s*:/g, '$1:');
    return s;
}
