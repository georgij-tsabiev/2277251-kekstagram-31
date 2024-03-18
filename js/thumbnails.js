const renderThumbnails = (images) => { // Функция, отвечающая за отображение фотографий других пользователей
  const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const thumbnailContainer = document.querySelector('.pictures');
  const thumbnailFragment = document.createDocumentFragment();
  images.forEach(({url, description, likes, comments}) => { // Перебираем изображения
    const thumbnail = thumbnailTemplate.cloneNode(true); // Клонируем шаблон и наполняем его
    const thumbnailImage = thumbnail.querySelector('.picture__img');
    thumbnailImage.src = url;
    thumbnailImage.alt = description;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnailFragment.append(thumbnail); // Добавляем миниатюру к фрагменту
  });
  thumbnailContainer.append(thumbnailFragment); // Добавляем фрагмент в контейнер
};

export {renderThumbnails};
