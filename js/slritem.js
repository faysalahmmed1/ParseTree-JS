

function Item(rule, dotIndex) {
	// <PUBLIC>
	
	extend(this, new BasicItem(rule, dotIndex));
	
	this.lookAheads = rule.grammar.follows[rule.nonterminal];
	
	// </PUBLIC>
}

Item.prototype.grammarType = 'SLR';
