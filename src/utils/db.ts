import { v4 as id } from 'uuid';

export const db = {
    createNote(note: any) {
        const notes = this.getNotes() ?? [];

        const newNotes = [...notes, { ...note, id: id(), content: '' }];

        localStorage.setItem('notes', JSON.stringify(newNotes));
    },

    getNotes() {
        return JSON.parse(localStorage.getItem('notes'));
    },

    getNote(noteId: string) {
        const notes = this.getNotes();
        console.log(notes)
        return notes.find((note: { id: string; }) => note.id === noteId);
    },
};
