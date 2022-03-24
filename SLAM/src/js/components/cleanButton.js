document.addEventListener('DOMContentLoaded', () => {
    function clear() {
        document.getElementById('textInput').value = '';
    }
    document.getElementById("cleanButton").onclick = clear;
});