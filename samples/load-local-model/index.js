var modelId = "5ro3GWrL";
//可自定义模型Id
 appToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDY3LCJ1c2VybmFtZSI6IndhbnJ1aXpoaW5lbmciLCJpc1Blcm1hbmVudCI6dHJ1ZSwiaWF0IjoxNjE2NDE3NDE2LCJleHAiOjMzMTUyNDE3NDE2fQ.4i7AImgHG_qNwemawpzzqZgYWN-KV28JtyadJoHjLek"

Modelo.init({ endpoint: "https://build-portal.modeloapp.com", appToken });

var viewer = new Modelo.View.Viewer3D("model", {
  isMobile: isMobile()
});

viewer.loadModel(modelId, progress => {
  // second parameter is an optional progress callback
  
  const c = document.getElementById("progress");
  c.innerHTML = "Loading: " + Math.round(progress * 100) + "%";
},true,true,'./sample').then(() => {
  viewer.addInput(new Modelo.View.Input.Mouse(viewer));
  viewer.addInput(new Modelo.View.Input.Touch(viewer));
  // add keyboard callback.
  const keyboard = new Modelo.View.Input.Keyboard(viewer);
  viewer.addInput(keyboard);
  keyboard.addKeyUpListener(keyboard => {
      if (keyboard.key === 27) {
          viewer.destroy();
      }
  });
});
