const storyElement = document.getElementById('story');
   const choicesElement = document.getElementById('choices');

   let currentScene = 'intro';

   const scenes = {
       intro: {
           text: "你站在一片神秘森林的入口。前方有两条路：一条通往黑暗的洞穴，另一条通向茂密的树林。你需要做出选择，找到宝藏并安全离开。",
           choices: [
               { text: "进入洞穴", next: "cave" },
               { text: "进入树林", next: "forest" }
           ]
       },
       cave: {
           text: "你走进了黑暗的洞穴。突然，一只巨大的蝙蝠飞了过来！",
           choices: [
               { text: "战斗", next: "cave_fight" },
               { text: "逃跑", next: "cave_escape" }
           ]
       },
       cave_fight: {
           text: "你勇敢地与蝙蝠战斗，但蝙蝠太强大了，你被打败了。",
           choices: [
               { text: "重新开始", next: "intro" }
           ]
       },
       cave_escape: {
           text: "你迅速逃出了洞穴，回到了森林入口。",
           choices: [
               { text: "重新选择", next: "intro" }
           ]
       },
       forest: {
           text: "你走进了茂密的树林。你发现了一条小路，路边有一个闪闪发光的宝箱！",
           choices: [
               { text: "打开宝箱", next: "forest_treasure" },
               { text: "继续前进", next: "forest_lost" }
           ]
       },
       forest_treasure: {
           text: "你打开了宝箱，发现里面装满了黄金和宝石！你成功找到了宝藏，成为了最富有的探险家！",
           choices: [
               { text: "重新开始", next: "intro" }
           ]
       },
       forest_lost: {
           text: "你决定继续前进，但很快迷路了。",
           choices: [
               { text: "重新开始", next: "intro" }
           ]
       }
   };

   function loadScene(sceneId) {
       const scene = scenes[sceneId];
       storyElement.textContent = scene.text;
       choicesElement.innerHTML = '';
       scene.choices.forEach(choice => {
           const button = document.createElement('button');
           button.textContent = choice.text;
           button.addEventListener('click', () => loadScene(choice.next));
           choicesElement.appendChild(button);
       });
   }

   loadScene(currentScene);
