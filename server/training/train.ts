import { Configuration, OpenAIApi } from "openai"
import { secrets } from "../secrets"

const openai = new OpenAIApi(
  new Configuration({
    apiKey: secrets.openai.key,
  })
)

/**
 * List all uploaded files:
 */
// openai.listFiles().then((res) => {
//   console.log(JSON.stringify(res.data, null, 2))
// })

/**
 * List all fine-tuned models:
 */
// openai.listFineTunes().then((res) => {
//   console.log(JSON.stringify(res.data, null, 2))
// })

/**
 * Attempt to fine-tune a model with a file:
 */
// openai
//   .createFineTune({
//     model: secrets.openai.getFtModel(),
//     training_file: secrets.openai.getFile(),
//   })
//   .then((res) => {
//     console.log(JSON.stringify(res.data, null, 2))
//   })

/**
 * Check status of fine-tuning request:
 */
// openai
//   .retrieveFineTune("ft-S4ShlNsMGyp8vViAobaculYr")
//   .then((res) => console.log(JSON.stringify(res.data.status, null, 2)))

/**
 * Get full details of fine-tuned model:
 */
// openai
//   .retrieveFineTune("ft-S4ShlNsMGyp8vViAobaculYr")
//   .then((res) => console.log(JSON.stringify(res.data, null, 2)))
