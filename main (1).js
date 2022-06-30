import kaboom from "kaboom";

//This creates the background colour.
kaboom({
  background: [100,0,255],
  width: 1920,
  height: 1024,
  scale: 2,
  stretch: true,
  letterbox: true,
}),

//this loads in the sprites needed
loadRoot("sprites/");
loadSprite("melon", "melon boy.png");
loadSprite("block", "block.png");

const LEVELS = [
  [
    "                              ",
    "                              ",
    "                              ", 
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "                              ",
    "     ========     ========    ",    
    "                              ",
    "                              ",
    "                              ",
    "==============================",
  ]
];

const levelConf = {
  // grid size
  width: 64,
  height: 64,
  pos: vec2(0, 0),
  // define each object as a list of components
  "=": () => [
    sprite("block"),
    area(),
    solid(),
    origin("bot"),
    "block",
  ]
};
    
//This creates the scene for the start menu.
scene("start", () => {
//This adds the text.
  add([
    text("PRESS ENTER TO START", { size: 96 }),
    pos(vec2(970, 540)),
    origin("center"),
    color(200, 0, 255),
  ]);
//This makes the scene change to the game scene when the enter key is pressed.
  onKeyRelease("enter", () => {
    go("game");
  })
}),

go("start"),

//game scene
scene("game", (levelNumber = 0) => {
//defines the layers of objects in the game
  layers([
    "bg",
    "game",
    "ui",
  ], "game");

  const level = addLevel(LEVELS[levelNumber], levelConf);
});
