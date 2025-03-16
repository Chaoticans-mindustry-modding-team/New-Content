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

Events.on(ClientLoadEvent, e => {
  vars.control.sound.ambientMusic.add(day2);
  vars.control.sound.ambientMusic.add(day3);
  vars.control.sound.ambientMusic.add(day4);
  Vars.control.sound.darkMusic.add(game10);
  vars.control.sound.bossMusic.add(seq); //duck it, seq is boss music
  //duck it, seq is boss music
  //duck it, seq is boss music
  //duck it, seq is boss music
});
