'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function deleteNote(noteId: string, pathToRevalidate: string) {
  await prisma.note.delete({ where: { id: noteId } });
  revalidatePath(pathToRevalidate);
}
