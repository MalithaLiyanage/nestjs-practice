import { MessagesRepository } from "src/repositories/messages.repository";

export class MessagesService {
  messagesRepo: MessagesRepository;
  constructor() {
    // Dont do this in real apps. Dont create other class instances in the constructor. Use dependency injection instead
    // According to this service is creating its own dependency
    this.messagesRepo = new MessagesRepository(); 
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}