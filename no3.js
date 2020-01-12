const ul = document.getElementById('characters');
const url = new URL('https://www.potterapi.com/v1/characters/'), params = {key: key, house: ''}
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}
fetch(url, {key: key}).then((resp) => resp.json()).then(function(data) {
    let characters = data;
    return characters.map(function(character) {
        let li = createNode('li');
        li.innerHTML = `${character.name}, ${character.bloodStatus}`;
        append(ul, li);
    })    
}).catch(function(error) {
    let p = "There's an error with the API.";
    append(body, p);
});      