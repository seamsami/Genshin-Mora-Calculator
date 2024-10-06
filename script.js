function addCharacter() {
    const characterList = document.getElementById('characterList');
    const newCharacterEntry = document.createElement('div');
    newCharacterEntry.className = 'characterEntry';
    newCharacterEntry.innerHTML = `
        <div class="charType">
            <label for="CharacterType">Choose Character Type</label>
            <select class="CharacterType">
                <option value="">Select Character Type</option>
                <option value="4">4 Star</option>
                <option value="5">5 Star</option>
            </select>
        </div>
        <div class="charAmount">
            <label for="CharacterAmount">Insert Character Amount</label>
            <input type="number" class="CharacterAmount" min="1" value="1">
        </div>
    `;
    characterList.appendChild(newCharacterEntry);
}

function addWeapon() {
    const weaponList = document.getElementById('weaponList');
    const newWeaponEntry = document.createElement('div');
    newWeaponEntry.className = 'weaponEntry';
    newWeaponEntry.innerHTML = `
        <div class="weaponT">
            <label for="WeaponType">Choose Weapon Type</label>
            <select class="WeaponType">
                <option value="">Select Weapon Type</option>
                <option value="4">4 Star</option>
                <option value="5">5 Star</option>
            </select>
        </div>
        <div class="refinement">
            <label for="WeaponRefinement">Choose Refinement Level</label>
            <select class="WeaponRefinement">
                <option value="1">Refinement 1</option>
                <option value="2">Refinement 2</option>
                <option value="3">Refinement 3</option>
                <option value="4">Refinement 4</option>
                <option value="5">Refinement 5</option>
            </select>
        </div>
    `;
    weaponList.appendChild(newWeaponEntry);
}

// Function to calculate total Mora (existing code, modified to handle multiple entries)
function calculateMora() {
    const characterEntries = document.querySelectorAll('.characterEntry');
    const weaponEntries = document.querySelectorAll('.weaponEntry');

    // Mora Cost Constants
    const moraFor5StarChar = 6630900; // Mora cost to level a 5-star character to 90
    const moraFor4StarChar = 6630900; // Mora cost to level a 4-star character to 90
    const moraFor5StarWeapon = 750000; // Mora cost to level a 5-star weapon to 90
    const moraFor4StarWeapon = 600000; // Mora cost to level a 4-star weapon to 90

    let totalCharMora = 0;
    let totalWeaponMora = 0;

    // Calculate Character Mora
    characterEntries.forEach(entry => {
        const charType = entry.querySelector('.CharacterType').value;
        const charAmount = parseInt(entry.querySelector('.CharacterAmount').value) || 0;

        if (charType === '5') {
            totalCharMora += charAmount * moraFor5StarChar;
        } else if (charType === '4') {
            totalCharMora += charAmount * moraFor4StarChar;
        }
    });

    // Calculate Weapon Mora
    weaponEntries.forEach(entry => {
        const weaponType = entry.querySelector('.WeaponType').value;
        const refinementLevel = parseInt(entry.querySelector('.WeaponRefinement').value) || 1;

        if (weaponType === '5') {
            totalWeaponMora += moraFor5StarWeapon * refinementLevel;
        } else if (weaponType === '4') {
            totalWeaponMora += moraFor4StarWeapon * refinementLevel;
        }
    });

    // Calculate Total Mora
    const totalMora = totalCharMora + totalWeaponMora;

    // Display the results
    document.querySelector('.totalCharMora').textContent = totalCharMora.toLocaleString() + " Mora (lvl 10 Talent Included)";
    document.querySelector('.totalWeaponMora').textContent = totalWeaponMora.toLocaleString() + " Mora";
    document.querySelector('.totalMora').textContent = totalMora.toLocaleString() + " Mora";
}
