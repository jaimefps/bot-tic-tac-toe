// import { TaskDataSource } from "./data-sources"
import { OpenAiDataSource } from "./data-sources/openai"
import { prisma } from "./prisma"

export class Context {
  prisma = prisma
  member: MemberInfo

  constructor(member: MemberInfo) {
    this.member = member
  }

  get openai() {
    return new OpenAiDataSource(this)
  }
}
