function hasDuplicates(components) {
    const uniqueComponents = new Set(components);
    return uniqueComponents.size !== components.length;
}

module.exports = {hasDuplicates}