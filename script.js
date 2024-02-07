replaceText(document.body);

function replaceText(element) {
    if(element.hasChildNodes()){
        element.childNodes.forEach(replaceText)
    }else if(element.nodeType === Text.TEXT_NODE){
        if(element.textContent.match(/election/gi)){
            const newElement = document.createElement("span");
            newElement.innerHTML = element.textContent.replace(/(election)/gi, `<span class="rainbow">selection</span>`);
            element.replaceWith(newElement);
        }
    }
}