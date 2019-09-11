
figma.showUI(__html__);

if (figma.currentPage.selection.length === 1) {
  let allResults = [];

  // Find all the nodes
  let allNodes = figma.currentPage.selection[0].findAll();
  allNodes.unshift(figma.currentPage.selection[0]);

  allNodes.forEach(function(currentSelection) {
    let result = checkForStyle(currentSelection);
    allResults.unshift(result);
  });

  let text = allResults;

  figma.showUI(`
      <div>${text}</div>
    `, {})
}

function checkForStyle(node) {
  
  if (node.fillStyleId) {
    // Fetch the style by using the ID.
    let style = figma.getStyleById(node.fillStyleId);
    console.log(style);

    let text = 'Name: ' + style.name + 'Key: ' + style.key;

    return(text);
  } else{
    return
  }
}

figma.ui.onmessage = msg => {
  if (msg.type === 'close') {
    figma.closePlugin();
  }
};
