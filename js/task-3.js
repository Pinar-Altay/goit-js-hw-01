function getElementWidth(content, padding, border) {
    // for px problem: convert to number 
    let contentWidth = parseFloat(content);
    let paddingWidth = parseFloat(padding);
    let borderWidth = parseFloat(border);

    // total width
    let totalWidth = contentWidth + (2 * paddingWidth) + (2 * borderWidth);

    // return
    return totalWidth;

}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200