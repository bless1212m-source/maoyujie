// 获取DOM元素
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const imageContainer = document.getElementById("image-container");
const resultImage = document.getElementById("result-image");

// 正确选项点击事件
option1.addEventListener("click", () => {
  resultImage.src = "correct.jpg"; // 替换为你的正确图片路径
  imageContainer.style.display = "block"; // 显示图片区域
});

// 错误选项点击事件
option2.addEventListener("click", () => {
  resultImage.src = "wrong.jpg"; // 替换为你的错误图片路径
  imageContainer.style.display = "block"; // 显示图片区域
});