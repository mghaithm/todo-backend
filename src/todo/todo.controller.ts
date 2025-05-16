import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '@prisma/client'; // 👈 Add this

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() data: Pick<Todo, 'title'>) { // ✅ Only require title for now
    return this.todoService.create(data);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<Todo>) {
    return this.todoService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
