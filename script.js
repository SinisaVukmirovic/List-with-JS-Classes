const myListElem = document.querySelector('#myList');
const inputElem = document.querySelector('#myInput');
const indexInputElem = document.querySelector('#indexInput');
const addBtn = document.querySelector('#addBtn');
const delBtn = document.querySelector('#delBtn');

class AddToList {
    constructor(elem) {
        this.listElem = elem;
        this.listText = [
            'Svelte.js',
            'Vue.js',
            'React.js',
            'Angular'
        ];
    }

    // static method to create an <li> element with passed text
    static createListItem(text) {
        const li = document.createElement('li');

        li.textContent = text;

        return li;
    }

    // instance method for updating/adding new items
    update() {
        while(this.listElem.firstChild) {
            this.listElem.removeChild(this.listElem.firstChild);
        }

        for(const text of this.listText) {
            this.listElem.appendChild(AddToList.createListItem(text))
        }
    }

    add(text) {
        this.listText.push(text);
        this.update();
    }

    remove(index) {
        this.listText.splice(index, 1);
        this.update();
    }
}

const addItem = new AddToList(myListElem);

addItem.update();

addBtn.addEventListener('click', () => {
    if (!inputElem.value) return;
    addItem.add(inputElem.value);
    inputElem.value = '';
});

delBtn.addEventListener('click', () => {
    if (!indexInputElem.value) return;
    addItem.remove((indexInputElem.value - 1));
    indexInputElem.value = '';
});