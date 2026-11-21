import { store } from '../store';

import template from './ViewRecord.html';

export default {
    template: template,
    props: ['record', 'domain', 'id'],
    data: function() {
        return {
            clicked: false,
        };
    },
    methods: {
        toggle: function() {
            this.clicked = !this.clicked;
        },
        confirmDelete: async function() {
            if (confirm('¿Seguro que quieres eliminar este registro?')) {
                await store.deleteRecord(this.id);
            }
        },
        cancel: function() {
            this.clicked = false;
        },
    }};
