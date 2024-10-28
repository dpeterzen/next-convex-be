import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createTodo = mutation({
    args: {
        text: v.string(),
    },
    handler: async (ctx, args) => {

        await ctx.db.insert("todos", {
            text: args.text,
        });
    },
});


