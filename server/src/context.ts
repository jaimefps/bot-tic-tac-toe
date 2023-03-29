import { OpenAiDataSource } from "./data-sources/openai"

export class Context {
  get openai() {
    return new OpenAiDataSource(this)
  }
}
