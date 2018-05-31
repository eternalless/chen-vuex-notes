<template>
  <div id="app" class="app">
    <Toolbar></Toolbar>
    <NotesList></NotesList>
    <Editor></Editor>
  </div>
</template>

<script>
  import Toolbar from './components/Toolbar';
  import NotesList from './components/NotesList';
  import Editor from './components/Editor';
  import {mapActions} from 'vuex'
  export default {
    components:{
      Toolbar,
      NotesList,
      Editor
    },
    methods:{
      ...mapActions(['initStore']),
    },
    mounted(){
      console.log(111)
      this.initStore()
    }
  }
</script>

<style>
  html, #app {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    border: 0;
    height: 100%;
    max-height: 100%;
    position: relative;
  }
</style>
