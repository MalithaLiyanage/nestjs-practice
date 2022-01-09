import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable() // This will be registerd as a service in DI container
export class MessagesRepository {
  async findOne (id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    return JSON.parse(contents);
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);
    messages[id] = {
      id,
      content
    }

    await writeFile('../messages/messages.json', JSON.stringify(messages))
  }
}