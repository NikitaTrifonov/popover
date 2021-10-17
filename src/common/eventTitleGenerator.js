const titles = ["Пропущенный вызов", "Загрузка завершена", "Напоминание!", "Новое сообщение", "Будильник"];

export const getRandomTitle = () => {
    const index = Math.floor(Math.random() * 5);

    return titles[index];
};
