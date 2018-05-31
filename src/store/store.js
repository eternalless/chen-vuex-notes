import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import getters from './getters.js';

Vue.use(Vuex);

// 需要维护的状态
const state = {
  notes: [],
  activeNote: {},
  show: ''
};

const mutations = {
  INIT_STORE(state, data) {
    console.log(data.activeNote)
    state.notes = data.notes;
    state.show = data.show;
    state.activeNote = data.activeNote;
  },
  // 新增笔记
  NEW_NOTE(state) {
    var newNote = {
      id: +new Date(),
      title: '笔记标题',
      content: '内容',
      favorite: false
    };
    state.notes.push(newNote);
    state.activeNote = newNote;
  },
  // 修改笔记
  EDIT_NOTE(state, note) {
    state.activeNote = note;
    // 修改原始数据
    for (var i = 0; i < state.notes.length; i++) {
      if(state.notes[i].id === note.id){
        state.notes[i] = note;
        break;
      }
    };
  },
  // 删除笔记
  DELETE_NOTE(state) {
    let note=state.activeNote;
    var a;
    console.log(note.id)
    for (var i = 0; i < state.notes.length; i++) {
      if(state.notes[i].id === note.id){
       a=i;
      }
    };
    console.log(a)
    state.notes.splice(a,1);
    state.activeNote = state.notes[0] || {};
  },
  // 切换笔记的收藏与取消收藏
  TOGGLE_FAVORITE(state) {
    state.activeNote.favorite = !state.activeNote.favorite;
  },
  // 切换显示数据列表类型：全部 or 收藏
  SET_SHOW_ALL(state, show){
    state.show = show;
    // 切换数据展示，需要同步更新 activeNote
    if(show === 'favorite'){
      state.activeNote = state.notes.filter(note => note.favorite)[0] || {};
    }else{
      state.activeNote = state.notes[0] || {};
    }
  },
  // 设置当前激活的笔记
  SET_ACTIVE_NOTE(state, note) {
    state.activeNote = note;
  }

}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
