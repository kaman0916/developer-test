import fs from "fs";

export const writeFile = async (content: string) => {
  if (!fs.existsSync(process.env.RECORD_PATH)) {
    await fs.writeFile(
      process.env.RECORD_PATH,
      "id, searching key\n",
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
  }

  await fs.appendFile(process.env.RECORD_PATH, content + "\n", (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};
