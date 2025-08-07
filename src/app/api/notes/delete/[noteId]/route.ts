import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(
  req: NextRequest,
  contextPromise: Promise<{ params: { noteId: string } }>
) {
  const { params } = await contextPromise;
  const noteId = params.noteId;

  try {
    await prisma.note.delete({
      where: { id: noteId },
    });

    return NextResponse.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Delete note error:', error);
    return NextResponse.json({ error: 'Failed to delete note' }, { status: 500 });
  }
}
