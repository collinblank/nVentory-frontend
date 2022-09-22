function separateBySections(allLocations = []) {
  const sectionHash = new Set();
  const sectionList = {};

  allLocations.forEach((location) =>
    !sectionHash.has(location.sections)
      ? (sectionHash.add(location.sections),
        (sectionList[location.sections] = []),
        sectionList[location.sections].push(location))
      : sectionList[location.sections].push(location)
  );

  return [Object.keys(sectionList), sectionList];
}

function orderByShelf(locations = []) {
  const shelfHash = new Set();
  const shelfList = {};

  locations.forEach((subsection) =>
    !shelfHash.has(subsection.shelf_letter)
      ? (shelfHash.add(subsection.shelf_letter),
        (shelfList[subsection.shelf_letter] = []),
        shelfList[subsection.shelf_letter].push(subsection))
      : shelfList[subsection.shelf_letter].push(subsection)
  );

  return [Object.keys(shelfList), shelfList];
}

module.exports = { separateBySections, orderByShelf };
