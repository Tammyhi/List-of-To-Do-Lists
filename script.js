let todos = [];
let currFilter = 'all';

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
        const clearButton = event.target.closest('.btn__clearCompleted');
        if (clearButton) {
            console.log('Clear button found!');
            const todoContainer = clearButton.closest('.todo');
            if (todoContainer) {
                console.log('Parent list found');
                const completedItems = todoContainer.querySelectorAll('.todo__list__item.completed');
                completedItems.forEach(item => {
                    item.remove();
                });
            }
        }
    });
});