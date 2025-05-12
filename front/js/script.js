const form = document.getElementById('charForm');
const input = document.getElementById('charName');
const results = document.getElementById('results');

async function getChar(charName) {
    const response = await fetch(`http://localhost:3000/characters/${nameCharacter}`)
    const data = await response.json()
    return data;
}

form.addEventListener('', async (e) => {
    e.preventDefault();
    const characterName = input.value;
    try {
        const data = await getChar(characterName);
        results.innerHTML = data.map(char => {
            const {name, status, species, gender, origin, image} = char;
            return `
            <li>
            <h2>${name}</h2>
            <img src="${image}" alt="">
            <p>${status}</p>
            <p>${species}</p>
            <p>${origin}</p>
            <p>${gender}</p>
            </li>
            `
        }).join("");
    } catch (error) {
       console.log(error);
       results.innerHTML ='<p>Char not found</p>'
    }
});