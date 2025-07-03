// noo now this is a java mod /j
// credits to  NEON-XZR and meep of faith
/* let mod = Vars.mods.locateMod("newunits");
mod.meta.displayName = Core.bundle.get("mod.name");
mod.meta.description = Core.bundle.get("mod.description");
// special thanks to meep for the help!!
*/
//is this relevant?^^^
let day2 = Vars.tree.loadMusic("day2"); //new-world creepy vibes like / alternate
let day3 = Vars.tree.loadMusic("day3"); //ye
let day4 = Vars.tree.loadMusic("day4"); //ye
let seq = Vars.tree.loadMusic("seq"); //seq
let game10 = Vars.tree.loadMusic("game10"); //fanmade
let boss3 = Vars.tree.loadMusic("boss3"); //fanmade boss

Events.on(ClientLoadEvent, e => {
  Vars.control.sound.ambientMusic.add(day2);
  Vars.control.sound.darkMusic.add(day3);
  Vars.control.sound.darkMusic.add(day4);
  Vars.control.sound.darkMusic.add(game10);
  Vars.control.sound.bossMusic.add(boss3);
  Vars.control.sound.bossMusic.add(seq); //duck it, seq is boss music
  //duck it, seq is boss music
  //duck it, seq is boss music
  //duck it, seq is boss music
  Vars.control.sound.darkMusic.add(seq);
});
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
  };

  // Application of methods
  let clexon = moddedPlanet("newunits-clexon");
  addNode(Liquids.water, moddedItem("newunits-iron"));
  addNode(Liquids.cryofluid, Liquids.water, 2);
  Liquids.water.shownPlanets.add(clexon);
  Liquids.cryofluid.shownPlanets.add(clexon);
});
