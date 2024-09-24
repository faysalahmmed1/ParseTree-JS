

// function formatLRClosureTable(lrClosureTable) {
// 	var result = "<table border=\"1\">";
// 	result += "<thead><tr><th colspan=\"4\">" + Item.prototype.grammarType + " closure table</th></tr><tr><th>Goto</th><th>Kernel</th><th>State</th><th>Closure</th></tr></thead>";
// 	result += "<tbody id=\"lrClosureTableRows\">";
	
// 	var kernel0 = lrClosureTable.kernels[0];
	
// 	result += "<tr><td></td><td>{" + formatItems(kernel0.items) +
// 			"}</td><td style=\"color: blue;\">" + 0 + "</td><td>{" + formatItems(kernel0.closure) + "}</td></tr>";
	
// 	var done = [0];
	
// 	for (var i in lrClosureTable.kernels) {
// 		var kernel = lrClosureTable.kernels[i];
		
// 		for (var j in kernel.keys) {
// 			var key = kernel.keys[j];
// 			var targetKernel = lrClosureTable.kernels[kernel.gotos[key]];
// 			result += "<tr><td>goto(" + kernel.index + ", " + key + ")</td><td>{" + formatItems(targetKernel.items) +
// 					"}</td><td style=\"color: blue;\">" + targetKernel.index + "</td><td>" +
// 					(isElement(targetKernel.index, done) ? "&nbsp;" : "{" + formatItems(targetKernel.closure) + "}") +
// 					"</td></tr>";
// 			addUnique(targetKernel.index, done);
// 		}
// 	}
	
// 	result += "</tbody>";
// 	result += "</table>";
	
// 	return result;
// }

// function formatItems(items) {
// 	var formattedItems = [];
	
// 	for (var i in items) {
// 		var item = items[i];
// 		var itemIsFinal = item.dotIndex == item.rule.development.length || EPSILON == item.rule.development[0];
		
// 		formattedItems.push(itemIsFinal ? "<span style=\"color: green;\">" + item + "</span>" : item);
// 	}
	
// 	return formattedItems.join('; ');
// }
