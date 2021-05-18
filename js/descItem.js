export default class DescriptionItem {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    /**
     * Creations new HTML-element without params
     * @param {namr} name - name of creating tags
     * @param {className} className - add class name for new elements
     * @param {content} content - content adding to new elements || default empty line
     * @returns new creations HTML-elements
     */
    createElement(name, className, content = "") {
        const elem = document.createElement(name);
        elem.className = className;
        elem.innerHTML = content;

        return elem;
    }

    /**
     * adding zero number to incoming digit
     * @param {num} num - numbers included in the function
     * @returns this number without zero if number less 10 else returns num
     */
    addNull(num) {
        if (num < 10) {
            return num = "0" + String(num);
        }
        return num
    }

    /**
     * create new HTML-element counter
     * @param {num} num - numbers included in the function
     * @returns new HTML-element what is responsible for displaying the counter
     */
    createCounter(num) {
        const counter = document.createElement("h1");
        counter.className = "description-item_count col-auto";
        counter.innerHTML = `${this.addNull(num + 1)} &mdash; `;
        return counter;
    }

    /**
     * 
     * @param {num} num - numbers included in the function
     * @param {textColor} textColor - changeable color
     * @param {isCounter} isCounter - if true - adding to item counter (start with - 0) 
     * @param {isLink} isLink - if true - new element was <a> - tag.
     * @returns - new HTML-element "DescriptionItem"
     */
    render(num, textColor, isCounter = true) {
        const descItem = this.createElement("div", "description-item row align-content-center");
        const descItemContent = this.createElement('div', "description-item__content col")
        const descTitle = this.createElement(`h1`, `title ${textColor}`, this.title);

        const descContent = this.createElement('p', "subtitle color-white", this.content);

        descItemContent.append(descTitle);
        descItemContent.append(descContent);

        // если счетчик создан, то к елементу добавляем номерацию
        if (isCounter) {
            descItem.append(this.createCounter(num));
        }

        descItem.append(descItemContent);
        return descItem;
    }
}


