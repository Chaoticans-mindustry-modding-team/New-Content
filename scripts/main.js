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
Events.run(ClientLoad, () => {
  function moddedItem(content) {
    return Vars.content.item(content)
  };
  function moddedLiquid(content) {
    return Vars.content.liquid(content)
  };
  function addVanillaNode(child, parent, parentNodeID) {
    let childContent = child;
    let parentContent = parent;
    let node = TechTree.nodeProduce(childContent, () => {});
    let parentNode = parentContent.techNodes.get(parentNodeID);
    parentNode.children.add(node);
  };
  addVanillaNode(Liquids.water, moddedItem("newunits-iron"), 0);
  addVanillaNode(Liquids.cryofluid, Liquids.water, 2);
})
