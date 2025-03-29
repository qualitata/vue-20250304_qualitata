# Удаляемые Email-ы

👷🏻 _Задача нормальной сложности_\
📚 _Закрепление материала_

<!--start_statement-->

Дано решение задачи **Отмеченные Email-ы**, разбитое на компоненты:
- В корневом компоненте `MarkedEmailsApp` доступна функция `removeEmailByIndex(index)`, которая удаляет Email из списка по индексу
- В компоненте `EmailListItem` добавлена кнопка удаления

Требуется закончить реализацию компонента так, чтобы нажатие на кнопку удаления удаляло соответствующий Email из списка функцией `removeEmailByIndex` в корневом компоненте.

В решении используйте **события**. Постарайтесь не передавать с событием лишние данные.

### Результат

<img src="https://i.imgur.com/dsVft6U.gif" alt="Example">

<!--end_statement-->

---

### Инструкция

📝 Для решения задачи отредактируйте файлы: `MarkedEmailsApp.js`, `EmailList.js`, `EmailListItem.js`.

🚀 Команда запуска для ручного тестирования: `npm run dev`\
Приложение будет доступно на [http://localhost:5173/03-components/30-removable-emails/](http://localhost:5173/03-components/30-removable-emails/).

✅ Доступно автоматическое тестирование: `npm test removable-emails`
