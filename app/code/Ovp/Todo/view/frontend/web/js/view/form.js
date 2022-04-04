define(['uiElement', 'Ovp_Todo/js/model/item', 'Ovp_Todo/js/action/item/add'], (uiElement, todoItemModel, todoItemActionAdd) => {
    'use strict';

    return uiElement.extend({
        defaults: {
            template: 'Ovp_Todo/form',
            textInput: '',
            tracks: {
                textInput: true
            },
            modules: {
                listComponent: 'todo.list'
            }
        },

        submit() {
            if (!this.textInput) return false;

            this.add();
            this.reset();
        },

        add() {
            const item = {
                id: todoItemModel.generateId(),
                text: this.textInput,
                status: false
            }

            todoItemActionAdd(item);
            this.listComponent().renderItem(item);
        },

        reset() {
            this.textInput = '';
        }
    })
})

