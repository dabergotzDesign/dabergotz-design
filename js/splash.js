const r_load = new rive.Rive({
    src: "./rive/loader.riv",
    // OR the path to a discoverable and public Rive asset
    // src: '/public/example.riv',
    canvas: document.getElementById("canvas-loading"),
    autoplay: true,
    artboard: "loading", // Optional. If not supplied the default is selected
    stateMachines: "Load State",
    onLoad: () => {
      r_load.resizeDrawingSurfaceToCanvas();
    },
});

window.addEventListener("DOMContentLoaded", ()=>{
    const loader = document.querySelector(".loading"),
        page = document.querySelector(".main");

    loader.style.display = "none";
    page.style.visibility = "visible";
})