// 获取所有图片元素
const images = document.querySelectorAll('img');

// 创建预览框和关闭按钮
const previewBox = document.createElement('div');
const closeButton = document.createElement('button');

// 添加样式类名
previewBox.classList.add('preview-box');
closeButton.classList.add('close-button');
closeButton.innerHTML = '×';

// 关闭按钮点击事件处理函数
closeButton.onclick = () => {
  // 隐藏预览框
  previewBox.style.display = 'none';
};

// 将预览框和关闭按钮添加到文档中
document.body.appendChild(previewBox);
previewBox.appendChild(closeButton);

// 循环所有图片元素，给它们添加点击事件处理函数
images.forEach((image) => {
  image.onclick = () => {
    // 设置预览框中图片的src属性为当前点击的图片的src属性
    previewBox.innerHTML = `<img src="${image.src}" alt="preview image">`;

    // 显示预览框
    previewBox.style.display = 'flex';

    // 根据图片宽高自适应屏幕大小
    const previewImage = previewBox.querySelector('img');
    const maxWidth = window.innerWidth * 0.8;
    const maxHeight = window.innerHeight * 0.8;
    if (previewImage.width > maxWidth || previewImage.height > maxHeight) {
      const ratio = Math.min(maxWidth / previewImage.width, maxHeight / previewImage.height);
      previewImage.style.width = `${previewImage.width * ratio}px`;
      previewImage.style.height = `${previewImage.height * ratio}px`;
    } else {
      previewImage.style.width = `${previewImage.width}px`;
      previewImage.style.height = `${previewImage.height}px`;
    }
  };
});
