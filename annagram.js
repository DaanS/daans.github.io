'use strict';

window.onload = () => {
    document.getElementById('entry').addEventListener('input', procInput);
    document.getElementById('entry').addEventListener('keyup', (e) => {
        if (e.keyCode === 13) procSave();
    });

    document.getElementById('target').addEventListener('input', procInput);

    document.getElementById('save').addEventListener('click', procSave);

    document.getElementById('target').value = 'katoenenkniekousen';
    document.getElementById('entry').value = '';

    procInput();
};

function removeChar(str, idx) {
    return str.slice(0, idx) + str.slice(idx + 1);
}

function procInput() {
    let entry = document.getElementById('entry').value.toLowerCase();
    let missing = document.getElementById('target').value.toLowerCase();
    
    for (let i = 0; i < entry.length;) {
        let chr = entry.charAt(i);

        if (chr.match(/[a-z]/)) {
            let idx = missing.indexOf(chr);

            if (idx !== -1) {
                entry = removeChar(entry, i);
                missing = removeChar(missing, idx);
            } else {
                i++;
            }
        } else {
            i++;
        }
    }

    document.getElementById('missing').textContent = missing;
    document.getElementById('extra').textContent = entry;
}

function procSave() {
    let list = document.getElementById('list');
    let entry = document.createElement('li');
    entry.appendChild(document.createTextNode(document.getElementById('entry').value));
    list.appendChild(entry);

    document.getElementById('entry').value = '';
    procInput();
}
