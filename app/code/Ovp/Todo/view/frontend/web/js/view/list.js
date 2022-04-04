define(['uiCollection', 'uiLayout', 'Ovp_Todo/js/model/list'], (uiCollection, uiLayout, todoListModel) => {
    'use strict';

    return uiCollection.extend({
        defaults: {
            template: 'Ovp_Todo/list'
        },

        initialize() {
            this._super();
            this.renderItems();
            return this;
        },

        renderItems() {
            todoListModel.get().map(this.renderItem.bind(this));
        },

        renderItem(item) {
            uiLayout([
                {
                    component: 'Ovp_Todo/js/view/item',
                    template: 'Ovp_Todo/item',
                    parent: this.name,
                    name: `item-${item.id}`,
                    item,
                    itemStatus: item.status,
                    textInput: item.text,
                    editState: false
                }
            ])
        }
    })
})

