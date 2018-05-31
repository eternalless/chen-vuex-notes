<template>
  <div id="note-editor">
    <div class="form-group">
      <input type="text" name="title"
             class="title form-control"
             placeholder="请输入标题"
             @input="updateNote"
             v-model="currentNote.title">
      <textarea
        v-model="currentNote.content" name="content"
        class="form-control" row="3" placeholder="请输入正文"
        @input="updateNote"></textarea>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'

  export default {
    computed: {
      ...mapGetters(['activeNote']),
      currentNote(){
        return this.activeNote
      }
    },
    methods:{
      ...mapActions(['editNote']),
      updateNote() {
        this.editNote(this.currentNote);
      },
    }
  }
</script>
<style lang="scss" scoped>
  #note-editor {
    height: 100%;
    margin-left: 380px;

  .form-group{
    height: 50%;
  }

  .title{
    border:0;
  }
  textarea{
    height: 100%;
    border: 0;
    border-radius: 0;
    padding-top: 15px;
  }
  }
</style>
