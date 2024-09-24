

function LRTable(closureTable) {
	// <PUBLIC>
	
	this.grammar = closureTable.grammar;
	this.states = [];
	
	// </PUBLIC>
	
	// <INITIALIZATION>
	
	for (var i in closureTable.kernels) {
		var kernel = closureTable.kernels[i];
		var state = new State(this.states);
		
		for (var j in kernel.keys) {
			var key = kernel.keys[j];
			var nextStateIndex = kernel.gotos[key];
			
			getOrCreateArray(state, key).push(new LRAction((isElement(key, closureTable.grammar.terminals) ? 's' : ''), nextStateIndex));
		}
		
		for (var j in kernel.closure) {
			var item = kernel.closure[j];
			
			if (item.dotIndex == item.rule.development.length || item.rule.development[0] == EPSILON) {
				for (var k in item.lookAheads) {
					var lookAhead = item.lookAheads[k];

					getOrCreateArray(state, lookAhead).push(new LRAction('r', item.rule.index));
				}
			}
		}
	}
	
	// </INITIALIZATION>
}

/**
 * @param states
 * <br>Input-output
 */
function State(states) {
	// <PUBLIC>
	
	this.index = states.length;
	
	// </PUBLIC>
	
	// <INITIALIZATION>
	
	states.push(this);

	// <//INITIALIZATION>
}

function LRAction(actionType, actionValue) {
	// <PUBLIC>
	
	this.actionType = actionType;
	this.actionValue = actionValue;
	
	this.toString = function() {
		return this.actionType + this.actionValue;
	};
	
	// </PUBLIC>
}

function chooseActionElement(state, token) {
	var action = state[token];
	
	if (action == undefined) {
		return undefined;
	}
	
	var radios = document.getElementsByName(state.index + "_" + token);
	
	for (var i = 0; i < radios.length; ++i) {
		if (radios[i].checked) {
			return action[i];
		}
	}

	return action[0];
}
