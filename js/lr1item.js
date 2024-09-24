

function Item(rule, dotIndex) {
	// <PUBLIC>
	
	extend(this, new BasicLR1Item(rule, dotIndex));
	
	// </PUBLIC>
}

Item.prototype.grammarType = 'LR(1)';
