import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(
  request: NextRequest,
  context: { params: { noteId: string } }
) {
  const noteId = context.params.noteId; // access params correctly inside the function

  try {
    await prisma.note.delete({
      where: { id: noteId },
    });

    return NextResponse.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Failed to delete note:', error);
    return NextResponse.json({ error: 'Failed to delete note' }, { status: 500 });
  }
}
