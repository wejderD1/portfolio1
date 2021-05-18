import DescriptionItem from "./js/descItem.js";
import { myEducation, mySkill, myContacts, myCharacters, myFuture } from "./js/db.js";

const { title, content } = myEducation;
const educationWrapper = document.querySelector(".description-education");

for (let i = 0; i < 2; i++) {
    const item = new DescriptionItem(title[i], content[i]);
    educationWrapper.append(item.render(i, "color-orange"));
}


const skillsWrapper = document.querySelector(".description-skills");
const { titleSkill, contentSkill } = mySkill;

for (let i = 0; i < titleSkill.length; i++) {
    const item = new DescriptionItem(titleSkill[i], contentSkill[i])
    skillsWrapper.append(item.render(i, `color-black`));
}

const contactWrapper = document.querySelector(".description-contact");
const { titleContact, contentContact } = myContacts;

for (let i = 0; i < titleContact.length; i++) {
    const item = new DescriptionItem(titleContact[i], contentContact[i])
    contactWrapper.append(item.render(i, `color-orange`, false));
}

const charactersWrapper = document.querySelector(".description-characters");
const {titleCharacters, contentCharacters} = myCharacters;

for (let i = 0; i < titleCharacters.length; i++) {
    const item = new DescriptionItem(titleCharacters[i], contentCharacters[i])
    charactersWrapper.append(item.render(i, `color-orange`));
}

const futureWrapper = document.querySelector(".description-future");
const {titleFuture, contentFuture} = myFuture;

for (let i = 0; i < titleCharacters.length; i++) {
    const item = new DescriptionItem(titleFuture[i], contentFuture[i])
    futureWrapper.append(item.render(i, `color-black`, false));
}
