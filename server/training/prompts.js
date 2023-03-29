/**
 *
 * How to train your model:
 * https://platform.openai.com/docs/guides/fine-tuning
 *
 */
const fs = require("fs")
const path = require("path")

const prompts = [
  // section
  {
    prompt: [
      [null, null, null],
      [null, "X", "O"],
      [null, "X", null],
    ],
    completion: {
      position: {
        x: 1,
        y: 0,
      },
    },
  },
  {
    prompt: [
      [null, "O", "X"],
      [null, "X", "O"],
      [null, "X", null],
    ],
    completion: {
      position: {
        x: 0,
        y: 2,
      },
    },
  },
  {
    prompt: [
      ["X", "O", "X"],
      [null, "X", "O"],
      ["O", "X", null],
    ],
    completion: {
      position: {
        x: 2,
        y: 2,
      },
    },
  },
  // section
  {
    prompt: [
      [null, null, null],
      ["X", "X", null],
      ["O", null, null],
    ],
    completion: {
      position: {
        x: 2,
        y: 1,
      },
    },
  },
  {
    prompt: [
      [null, "X", null],
      ["X", "X", "O"],
      ["O", "O", null],
    ],
    completion: {
      position: {
        x: 1,
        y: 2,
      },
    },
  },
  {
    prompt: [
      [null, "X", null],
      ["X", "X", "O"],
      ["O", "O", "X"],
    ],
    completion: {
      position: {
        x: 0,
        y: 0,
      },
    },
  },
  // section
  {
    prompt: [
      [null, null, null],
      [null, null, null],
      ["X", "X", null],
    ],
    completion: {
      position: {
        x: 2,
        y: 2,
      },
    },
  },
  {
    prompt: [
      [null, null, null],
      [null, null, null],
      [null, "X", "X"],
    ],
    completion: {
      position: {
        x: 0,
        y: 2,
      },
    },
  },
  {
    prompt: [
      [null, null, null],
      [null, null, null],
      ["X", null, "X"],
    ],
    completion: {
      position: {
        x: 1,
        y: 2,
      },
    },
  },
  // section
  {
    prompt: [
      [null, null, null],
      ["X", "X", null],
      [null, null, null],
    ],
    completion: {
      position: {
        x: 2,
        y: 1,
      },
    },
  },
  {
    prompt: [
      [null, null, null],
      [null, "X", "X"],
      [null, null, null],
    ],
    completion: {
      position: {
        x: 0,
        y: 1,
      },
    },
  },
  {
    prompt: [
      [null, null, null],
      ["X", null, "X"],
      [null, null, null],
    ],
    completion: {
      position: {
        x: 1,
        y: 1,
      },
    },
  },
  // section
  {
    prompt: [
      ["X", "X", null],
      [null, null, null],
      [null, null, null],
    ],
    completion: {
      position: {
        x: 2,
        y: 0,
      },
    },
  },
  {
    prompt: [
      [null, "X", "X"],
      [null, null, null],
      [null, null, null],
    ],
    completion: {
      position: {
        x: 0,
        y: 0,
      },
    },
  },
  {
    prompt: [
      ["X", null, "X"],
      [null, null, null],
      [null, null, null],
    ],
    completion: {
      position: {
        x: 1,
        y: 0,
      },
    },
  },
  // section
  {
    prompt: [
      ["X", null, null],
      ["X", null, null],
      [null, null, null],
    ],
    completion: {
      position: {
        x: 0,
        y: 2,
      },
    },
  },
  {
    prompt: [
      [null, null, null],
      ["X", null, null],
      ["X", null, null],
    ],
    completion: {
      position: {
        x: 0,
        y: 0,
      },
    },
  },
  {
    prompt: [
      ["X", null, null],
      [null, null, null],
      ["X", null, null],
    ],
    completion: {
      position: {
        x: 0,
        y: 1,
      },
    },
  },
  // section
  {
    prompt: [
      [null, "X", null],
      [null, "X", null],
      [null, null, null],
    ],
    completion: {
      position: {
        x: 1,
        y: 2,
      },
    },
  },
  {
    prompt: [
      [null, null, null],
      [null, "X", null],
      [null, "X", null],
    ],
    completion: {
      position: {
        x: 1,
        y: 0,
      },
    },
  },
  {
    prompt: [
      [null, "X", null],
      [null, null, null],
      [null, "X", null],
    ],
    completion: {
      position: {
        x: 1,
        y: 1,
      },
    },
  },
  // section
  {
    prompt: [
      [null, null, "X"],
      [null, null, "X"],
      [null, null, null],
    ],
    completion: {
      position: {
        x: 2,
        y: 2,
      },
    },
  },
  {
    prompt: [
      [null, null, null],
      [null, null, "X"],
      [null, null, "X"],
    ],
    completion: {
      position: {
        x: 2,
        y: 0,
      },
    },
  },
  {
    prompt: [
      [null, null, "X"],
      [null, null, null],
      [null, null, "X"],
    ],
    completion: {
      position: {
        x: 2,
        y: 1,
      },
    },
  },
  // section
  {
    prompt: [
      [null, null, "X"],
      [null, "X", null],
      [null, null, null],
    ],
    completion: {
      position: {
        x: 0,
        y: 2,
      },
    },
  },
  {
    prompt: [
      [null, null, "X"],
      [null, null, null],
      ["X", null, null],
    ],
    completion: {
      position: {
        x: 1,
        y: 1,
      },
    },
  },
  {
    prompt: [
      [null, null, null],
      [null, "X", null],
      ["X", null, null],
    ],
    completion: {
      position: {
        x: 2,
        y: 0,
      },
    },
  },
  // section
  {
    prompt: [
      ["X", null, null],
      [null, "X", null],
      [null, null, null],
    ],
    completion: {
      position: {
        x: 2,
        y: 2,
      },
    },
  },
  {
    prompt: [
      [null, null, null],
      [null, "X", null],
      [null, null, "X"],
    ],
    completion: {
      position: {
        x: 0,
        y: 0,
      },
    },
  },
  {
    prompt: [
      ["X", null, null],
      [null, null, null],
      [null, null, "X"],
    ],
    completion: {
      position: {
        x: 1,
        y: 1,
      },
    },
  },
]

// turn prompts and completions into pure strings,
// cannot submit JSON in these fields:
const objects = prompts.map((t) => ({
  // start with single whitespace
  // for tokenization reasons:
  prompt: ` ${JSON.stringify(t.prompt)}`,
  completion: ` ${JSON.stringify(t.completion)}`,
}))

// generate jsonl file format:
let fileData = JSON.stringify(objects[0])
objects.slice(1).forEach((obj) => {
  fileData += `\n${JSON.stringify(obj)}`
})

// write new file:
fs.writeFileSync(path.join(__dirname, `./file-${Date.now()}.jsonl`), fileData)
