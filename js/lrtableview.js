

function formatLRTable(lrTable) {
	var result = "<table border=\"1\">";
	var grammar = lrTable.grammar;
	result += "<thead>";
	result += "<tr><th colspan=\"" + (1 + grammar.terminals.length + 1 + grammar.nonterminals.length) + "\">LR table</th></tr><tr><th rowspan=\"2\">State</th><th rowspan=\"1\" colspan=\"" + (grammar.terminals.length + 1) + "\">ACTION</th><th colspan=\"" + grammar.nonterminals.length + "\">GOTO</th></tr>\n<tr>";
	
	for (var i in grammar.terminals) {
		result += "<th>" + grammar.terminals[i] + "</th>";
	}
	
	result += "<th>$</th>";
	
	for (var i in grammar.nonterminals) {
		result += "<th>" + grammar.nonterminals[i] + "</th>";
	}
	
	result += "</tr>";
	result += "</thead>";
	result += "<tbody>";
	
	for (var i in lrTable.states) {
		var state = lrTable.states[i];
		
		result += "<tr><td style=\"color: blue;\">" + i + "</td>";
		
		for (var j in grammar.terminals) {
			var terminal = grammar.terminals[j];
			
			result += "<td>" + formatAction(state, terminal, true) + "</td>";
		}
		
		result += "<td>" + formatAction(state, '$', true) + "</td>";
		
		for (var j in grammar.nonterminals) {
			var nonterminal = grammar.nonterminals[j];
			
			result += "<td>" + formatAction(state, nonterminal, true) + "</td>";
		}
		
		result += "</tr>\n";
	}
	
	result += "</tbody>";
	result += "</table>";
	
	return result;
}

function formatAction(state, token, isInTable) {
	var action = state[token];
	
	if (action == undefined) {
		return "&nbsp;";
	}
	
	var formattedActionElements = [];
	
	if (1 < action.length && isInTable) {
		for (var i in action) {
			formattedActionElements.push("<input type=\"radio\" name=\"" + state.index + "_" + token + "\" " + (i == 0 ? "checked=\"true\"" : "") + " onchange=\"parseInput();\">" + formatActionElement(action[i]) + "</input>");
		}
	} else {
		formattedActionElements.push(formatActionElement(chooseActionElement(state, token)));
	}
	
	var result = formattedActionElements.join(" / ");
	
	if (1 < action.length) {
		result = "<span style=\"background-color: pink;\">" + result + "</span>";
	}
	
	return result;
}
	
function formatActionElement(actionElement) {
	return actionElement.toString()
			.replace("r0", "<span style=\"color: green;\">acc</span>")
			.replace(/(s|\b)([0-9]+)/g, "$1<span style=\"color: blue;\">$2</span>")
			.replace(/r([0-9]+)/g, "r<sub style=\"color: green;\">$1</sub>");
}
