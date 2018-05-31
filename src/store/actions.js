function makeAction(type) {
  return ({commit},...args)=>commit(type,...args)
}
const initNote = {
  id: +new Date(),
  title: '我的笔记',
  content: '第一篇笔记内容',
  favorite: false
};
// 模拟初始化数据
const initData = {
  show: 'all',
  notes: [initNote],
  activeNote: initNote
};

export default{
  //初始化数据
  initStore: ({commit})=>{
    commit('INIT_STORE', initData);
  },
  updateActiveNote: makeAction('SET_ACTIVE_NOTE'),
  newNote: makeAction('NEW_NOTE'),
  deleteNote: makeAction('DELETE_NOTE'),
  toggleFavorite: makeAction('TOGGLE_FAVORITE'),
  editNote: makeAction('EDIT_NOTE'),
  updateShow: makeAction('SET_SHOW_ALL'),
}


