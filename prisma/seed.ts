import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const boards = ["Federal Board", "Punjab Board", "KPK Board", "Sindh Board"];
  const classes = ["6th", "7th", "8th", "9th", "10th", "11th", "12th"];
  const subjects = [
    "English", "Maths", "Biology", "Chemistry", "Physics",
    "Islamic Studies", "Pak Studies", "Urdu", "Computer Sciences",
    "History", "Geography", "Tarjamat-ul-Quran", "General Maths"
  ];

  for (const boardName of boards) {
    const board = await prisma.board.create({
      data: {
        name: boardName,
        classes: {
          create: classes.map(cls => ({
            name: cls,
            subjects: {
              create: subjects.map(subj => ({
                name: subj
              }))
            }
          }))
        }
      }
    });

    console.log(`Seeded board: ${board.name}`);
  }
}

main()
  .then(() => {
    console.log('✅ Seeding complete');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
