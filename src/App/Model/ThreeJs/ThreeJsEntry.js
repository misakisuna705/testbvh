import SkeletonBVH from "./SkeletonBVH";

export default ThreeJsEntry => {
  //const canvas = createCanvas(document, containerElement);
  const sceneManager = SkeletonBVH();

  bindEventListeners();
  render();

  //function createCanvas(document, containerElement) {
    //const canvas = document.createElement("canvas");
    //containerElement.appendChild(canvas);
    //return canvas;
  //}

  function bindEventListeners() {
    window.addEventListener("resize", resizeCanvas, false);
    resizeCanvas();
  }

  function resizeCanvas() {
    //canvas.style.width = "100%";
    //canvas.style.height = "100%";
    //canvas.width = canvas.offsetWidth;
    //canvas.height = canvas.offsetHeight;
    sceneManager.onWindowResize();
  }

  function render(time) {
    requestAnimationFrame(render);
    sceneManager.update();
  }
};
