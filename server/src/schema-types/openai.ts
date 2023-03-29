import { nonNull, objectType, queryField, stringArg } from "nexus"

export const AIDataType = objectType({
  name: "AI",
  description: "Information about the AI being used",
  definition(t) {
    t.int("v")
    t.id("id")
    t.list.field("models", {
      type: "String",
      async resolve(root, args, ctx) {
        const response = await ctx.openai.models()
        const ids = response.data.data.map((d: any) => d.id)
        return ids
      },
    })
    t.field("move", {
      type: "String",
      description: "Get the bot's move relative to your current game state",
      args: {
        boardState: nonNull(stringArg()),
      },
      async resolve(root, args, ctx) {
        return ctx.openai.getBotMove(args.boardState)
      },
    })
  },
})

export const aiDataQuery = queryField("aiData", {
  type: AIDataType,
  description: "Get underlying AI information",
  async resolve(root, args, ctx) {
    return {
      v: 1,
      id: String(Date.now()),
    }
  },
})
