"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../lib/prisma"));
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma_1.default.post.deleteMany();
        yield prisma_1.default.user.deleteMany();
        const kyle = yield prisma_1.default.user.create({ data: { username: "Kyle" } });
        const sally = yield prisma_1.default.user.create({ data: { username: "Sally" } });
        const post1 = yield prisma_1.default.post.create({
            data: {
                body: "JSpent the afternoon experimenting in the kitchen and whipped up a delicious new recipe! 🍽️🌱 This creamy coconut curry with tofu and vegetables turned out even better than I expected. It's packed with flavor and just the right amount of spice to warm you up on a chilly day. Cooking is such a therapeutic experience for me, and there's something incredibly satisfying about creating a tasty meal from scratch. Plus, it's a great way to get creative and try out new ingredients! What's your go-to comfort food recipe? Share your culinary adventures below! #HomeCooking #ComfortFood #RecipeIdeas",
                userId: kyle.id,
            },
        });
        const post2 = yield prisma_1.default.post.create({
            data: {
                body: "Just finished reading an amazing book that completely transported me to another world! 📚✨ 'The Night Circus' by Erin Morgenstern is a mesmerizing tale of magic, love, and mystery. The vivid descriptions and intricate storytelling had me captivated from start to finish. It's one of those books that linger in your mind long after you've turned the last page. Highly recommend diving into this enchanting adventure if you're in need of an escape! Have you read any good books lately? I'd love to hear your recommendations! #BookLover #TheNightCircus #MagicalReads",
                userId: sally.id,
            },
        });
        const comment1 = yield prisma_1.default.comment.create({
            data: {
                comment: "I am a root comment",
                userId: kyle.id,
                postId: post1.id,
            },
        });
        const comment2 = yield prisma_1.default.comment.create({
            data: {
                parentId: comment1.id,
                comment: "I am a nested comment",
                userId: sally.id,
                postId: post1.id,
            },
        });
        const comment3 = yield prisma_1.default.comment.create({
            data: {
                comment: "I am another root comment",
                userId: sally.id,
                postId: post1.id,
            },
        });
    });
}
seed();
