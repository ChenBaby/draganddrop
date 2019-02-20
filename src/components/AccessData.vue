<template>
    <div>
        <div class="col-md-3">
            <draggable class="list-group" element="ul" v-model="list1" :options="dragOptions" :move="onMove" :clone="clone" @start="isDragging=true" @end="Onend" >
                <transition-group name="list-complete">
                    <li class="list-group-item" v-for="element in list1" :key="element.id">
                    {{element.name}}
                    </li>
                </transition-group>
            </draggable>
        </div>
        <div class="col-md-3">
            <draggable element="span" v-model="list2" :options="{group:'name'}" :move="onMove">
                <transition-group name="no" class="list-group" tag="ul">
                    <li class="list-group-item" v-for="element in list2" :key="element.id" @click="click(element)">{{element.name}}</li>
                </transition-group>
            </draggable>
        </div>
        <div class="col-md-3">
            <pre>{{list1String}}</pre>
        </div>
        <div class="col-md-3">
            <pre>{{list2String}}</pre>
        </div>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
    name: 'AccessData',
    components: {
        draggable
    },
    data () {
        return {
            list1: [
                {
                    id: 1,
                    name: 'John'
                },
                { id: 2, name: 'Joao' },
                { id: 3, name: 'Jean' }
            ],
            list2: [],
            isDragging: false,
            delayedDragging: false
        }
    },
    methods: {
        Onend (evt) {
            console.log(evt.oldIndex)
            console.log(evt.newIndex)
        },
        onMove ({ relatedContext, draggedContext }) {
            const relatedElement = relatedContext.element
            const draggedElement = draggedContext.element
            return (
                (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
            )
        },
        clone (originalel) {
            var element = {}
            for (var key in originalel) {
                if (originalel.hasOwnProperty(key)) {
                    element[key] = originalel[key]
                }
            }
            return element
        },
        click (item) {
            item.name = 'IT GETS CLONED'
        }
    },
    computed: {
        dragOptions () {
            return {
                animation: 0,
                group: {
                    name: 'name',
                    pull: 'clone',
                    put: false // 禁止拖动元素到这
                },
                ghostClass: 'sortable-ghost', // Class name for the drop placeholder
                chosenClass: 'sortable-chosen', // Class name for the chosen item
                dragClass: 'sortable-drag' // Class name for the dragging item
            }
        },
        list1String () {
            return JSON.stringify(this.list1, null, 2);
        },
        list2String () {
            return JSON.stringify(this.list2, null, 2);
        }
    }
}
</script>

<style scoped>
.list-group-item {
  padding: 4px;
  margin-top: 4px;
  border: solid 1px;
  transition: all 1s;
  cursor: move;
}
.list-group-enter,
.list-group-leave-active {
  opacity: 0;
}
/* ghostClass */
.sortable-ghost {
  opacity: .5;
  background: red;
}
.sortable-drag {
    background: gold;
}
</style>
