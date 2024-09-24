

function formatGrammar(grammar) {
	var result = "<div>" + Item.prototype.grammarType + " grammar ('' is &epsilon;):</div>";
	result += "<table><tbody><tr>";
	result += "<td><textarea style=\"text-align: right; border: 0; color: green; background-color: #F0F0F0\" id=\"ruleIndices\" rows=\"25\" cols=\"3\" readonly=\"true\">";
	result += "</textarea></td>";
	result += "<td><textarea id=\"grammar\" rows=\"25\" cols=\"20\" onfocus=\"$('ruleIndices').value = ''\" onblur=\"displayRuleIndices();\" onchange=\"grammarChanged();\">";
	
	for (var i in grammar.rules) {
		result += grammar.rules[i] + "\n";
	}
	
	result += "</textarea></td>";
	result += "</tr></tbody></table>";
	
	return result;
}

function displayRuleIndices() {
	var rules = $('grammar').value.split('\n');
	var ruleIndex = 0;
	
	$('ruleIndices').value = "";
	
	for (var i in rules) {
		if (rules[i].trim() != '') {
			$('ruleIndices').value += "(" + (ruleIndex++) + ")";
		}
		
		$('ruleIndices').value += "\n";
	}
}

function formatFirstFollow(grammar) {
	var result = "<table border=\"1\">";
	
	if (Item.prototype.grammarType == 'SLR') {
		result += "<thead><tr><th colspan=\"3\">FIRST / FOLLOW table</th></tr><tr><th>Nonterminal</th><th>FIRST</th><th>FOLLOW</th></thead>"
		result += "<tbody>";
		
		for (var i in grammar.nonterminals) {
			var nonterminal = grammar.nonterminals[i];
			
			result += "<tr><td>" + nonterminal + "</td><td>{" + grammar.firsts[nonterminal] + "}</td><td>{" + grammar.follows[nonterminal] + "}</td></tr>";
		}
	} else {
		result += "<thead><tr><th colspan=\"2\">FIRST table</th></tr><tr><th>Nonterminal</th><th>FIRST</th></thead>"
		result += "<tbody>";
		
		for (var i in grammar.nonterminals) {
			var nonterminal = grammar.nonterminals[i];
			
			result += "<tr><td>" + nonterminal + "</td><td>{" + grammar.firsts[nonterminal] + "}</td></tr>";
		}
	}
	
	result += "</tbody>"
	result += "</table>";
	
	return result;
}
