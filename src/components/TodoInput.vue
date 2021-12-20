<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fa fa-plus" aria-hidden="trye"></i>
        </span>
        <!-- <button v-on:click="addTodo">추가</button> -->
        <!-- Modal all -->
        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고</h3>
            <span slot="footer" @click="showModal = false">
                할일을 입력하세요!
                <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
            </span>
        </modal>
    </div>
</template>

<script>
    //Modal.vue 불러오기
    import Modal from './common/Modal.vue'
    
    export default {
        data(){
            return {
                newTodoItem: ' ',
                //Modal 동작을 위한 flag
                showModal: false
            }
        },
        methods: {
            addTodo() {
                if(this.newTodoItem !== ""){
                    var value = this.newTodoItem && this.newTodoItem.trim()
                    // localStorage.setItem(value, value)
                    this.$emit('addTodo', value)
                    this.clearInput()
                } else {
                    this.showModal = !this.showModal
                }
            },
            clearInput() {
                this.newTodoItem = ''
            }
        },
        //Modal 컴포넌트 등록
        components: {
            Modal: Modal
        }
    }
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: inline-block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>