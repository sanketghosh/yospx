import prisma from "../lib/prisma";

async function seed() {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  const kyle = await prisma.user.create({ data: { username: "Kyle" } });
  const sally = await prisma.user.create({ data: { username: "Sally" } });

  const post1 = await prisma.post.create({
    data: {
      body: "JSpent the afternoon experimenting in the kitchen and whipped up a delicious new recipe! 🍽️🌱 This creamy coconut curry with tofu and vegetables turned out even better than I expected. It's packed with flavor and just the right amount of spice to warm you up on a chilly day. Cooking is such a therapeutic experience for me, and there's something incredibly satisfying about creating a tasty meal from scratch. Plus, it's a great way to get creative and try out new ingredients! What's your go-to comfort food recipe? Share your culinary adventures below! #HomeCooking #ComfortFood #RecipeIdeas",
      userId: kyle.id,
    },
  });
  const post2 = await prisma.post.create({
    data: {
      body: "Just finished reading an amazing book that completely transported me to another world! 📚✨ 'The Night Circus' by Erin Morgenstern is a mesmerizing tale of magic, love, and mystery. The vivid descriptions and intricate storytelling had me captivated from start to finish. It's one of those books that linger in your mind long after you've turned the last page. Highly recommend diving into this enchanting adventure if you're in need of an escape! Have you read any good books lately? I'd love to hear your recommendations! #BookLover #TheNightCircus #MagicalReads",
      userId: sally.id,
    },
  });

  const comment1 = await prisma.comment.create({
    data: {
      comment: "I am a root comment",
      userId: kyle.id,
      postId: post1.id,
    },
  });

  const comment2 = await prisma.comment.create({
    data: {
      parentId: comment1.id,
      comment: "I am a nested comment",
      userId: sally.id,
      postId: post1.id,
    },
  });

  const comment3 = await prisma.comment.create({
    data: {
      comment: "I am another root comment",
      userId: sally.id,
      postId: post1.id,
    },
  });
}

seed();
