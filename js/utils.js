$( document ).ready(function() {
    document.getElementById('appendtable').innerHTML =arrayToTable(table);
});

function toggleWine() {
    var x = document.getElementById("wine-definition");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function toggleStyle() {
    var x = document.getElementById("appendtable");
    var y = document.getElementById("myInput")
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "none";
    }
}


function arrayToTable(myArray) {
    var result = "<table class='table table-hover'>";
    for(var i=0; i<myArray.length; i++) {
        result += "<tbody><tr>";
        for(var j=0; j<myArray[i].length; j++){
            result += "<td>"+myArray[i][j]+"</td>";
        }
        result += "</tr>";
    }
    result += "</tbody></table>";
    return result;
}


var table = [
    ["Sparkling Wine", "This wine first came about in France and is synonymous with the region of Champagne. Despite the lowly appeal of many grocery store options (e.g. Cook’s), sparkling wines are the most technically challenging and time intensive wines made in the world."],
    ["Light-Bodied White Wine", "Light whites are like the “beer of wine” and, for this reason, they are perfect to drink with most foods. Some of these wines are perfect for savory lovers (like Sauv. Blanc and Grüner) with green herbal flavors of gooseberry and bell pepper."],
    ["Full-Bodied White Wine","Full-bodied white wines are perfect for red wine lovers because of their rich smooth taste with subtle creaminess. What makes them different than light white wines usually involves special winemaking techniques including the use of oak-aging"],
    ["Aromatic (sweet) White Wine","These wines have explosive, almost perfumed, aromas that spring out of the glass into your nose. They can be either dry or sweet, but most will taste a touch sweet due to all those perfume-y aromas."],
    ["Rosé Wine","Rosé is a true winemaker’s wine because it’s made by “dying” a wine for only a short time with the skins of red wine grapes."],
    ["Light-Bodied Red Wine","Light-bodied red wines are typically pale in color (you can see through them in a glass) and have very light tannin."],
    ["Medium-Bodied Red Wine","Medium-Bodied Red wine offer up tons of flavor with a balance of zesty acidity which makes them match with a wide variety of foods (from zesty salads to rich and cheesy lasagna). "],
    ["Full-Bodied Red Wine","Full-bodied red wines are the deepest darkest and most tannic of all the red wines. Tannin might sound weird and bitter but the tannin in wine binds to proteins in our saliva and it has a palate-cleansing effect."],
    ["Dessert Wine","Dessert wines today now range from dry to sweet and are some of the boldest, most intensely flavored (and aromatic) wines in the world."]
 ]
