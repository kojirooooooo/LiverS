$(function () {
  ScrollReveal().reveal(".fadeIn", {
    delay: 300, // アニメーション開始までの時間
    duration: 1600, // アニメーション完了にかかる時間
    origin: "top", // 要素がどの方向から来るか
    distance: "50px", // 移動する距離
    reset: false, // フレームインの度に動かすか
  });
});
