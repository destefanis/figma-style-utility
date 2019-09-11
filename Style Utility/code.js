figma.showUI(__html__);
if (figma.currentPage.selection.length === 1) {
    var allResults_1 = [];
    // Find all the nodes
    var allNodes = figma.currentPage.selection[0].findAll();
    allNodes.unshift(figma.currentPage.selection[0]);
    allNodes.forEach(function (currentSelection) {
        var result = checkForStyle(currentSelection);
        allResults_1.unshift(result);
    });
    var text = allResults_1;
    figma.showUI("\n      <div>" + text + "</div>\n    ", {});
}
function checkForStyle(node) {
    if (node.fillStyleId) {
        // Fetch the style by using the ID.
        var style = figma.getStyleById(node.fillStyleId);
        console.log(style);
        var text = 'Name: ' + style.name + 'Key: ' + style.key;
        return (text);
    }
    else {
        return;
    }
}
figma.ui.onmessage = function (msg) {
    if (msg.type === 'close') {
        figma.closePlugin();
    }
};
