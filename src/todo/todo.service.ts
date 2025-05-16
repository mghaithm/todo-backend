import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Todo } from '@prisma/client'; // 👈 Use this instead of Prisma.TodoCreateInput

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  create(data: Pick<Todo, 'title'>) {
    return this.prisma.todo.create({ data });
  }

  findAll() {
    return this.prisma.todo.findMany();
  }

  findOne(id: number) {
    return this.prisma.todo.findUnique({ where: { id } });
  }

  update(id: number, data: Partial<Todo>) {
    return this.prisma.todo.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.todo.delete({ where: { id } });
  }
}
