// noo now this is a java mod /j
// Thanks to maboroshiX | Reind
Events.run(ClientLoadEvent, () => {
  // Definition of methods
  let moddedItem = contentName => Vars.content.item(contentName);
  let moddedLiquid = contentName => Vars.content.liquid(contentName);
  let moddedPlanet = contentName => Vars.content.planet(contentName);
  // if needed for blocks or units or basically stuff that isnt an item, make a new function later but for now only Items. or add a parameter
  function addNode(contentChild, contentParent, index) {
    if(contentChild == null || contentParent == null) return;
    if(index == null) index = 0;

    contentParent.techNodes.get(index).children.add(
      TechTree.nodeProduce(contentChild, () => {}),
    );
    contentChild.shownPlanets.addAll(contentParent.shownPlanets);
    contentChild.databaseTabs.addAll(contentParent.databaseTabs);
  };

  // Application of methods
  let clexon = moddedPlanet("newunits-clexon");
  addNode(Liquids.water, moddedItem("newunits-iron"));
  addNode(Liquids.cryofluid, Liquids.water, 2);
  addNode(Liquids.slag, moddedItem("newunits-iron"));
  addNode(moddedLiquid("newunits-poison-water"), Liquids.water, 2);
  addNode(moddedLiquid("newunits-poison"), Liquids.water, 2);
  addNode(moddedItem("newunits-selevite"), moddedLiquid("newunits-poison"));
});
