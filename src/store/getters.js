export default {
  filteredNotes: (state) => {
    if(state.show === 'all'){
      return state.notes || {};
    }else if(state.show === 'favorite'){
      return state.notes.filter(note => note.favorite) || {};
    }
  },
  show: (state) => {
    return state.show;
  },
  activeNote: (state) => {
    console.log(state.activeNote)
    return state.activeNote;
  }
}
