import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import type { Item } from './items.model';
import { CreateItemDto } from './dto/create-item.dto';
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {
        this.itemsService = itemsService;
    }
    @Get()
    findAll(): Item[]{
        return this.itemsService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string): Item | undefined{
        return this.itemsService.findById(id);
    }

    @Post()
    create(
        @Body() createItemDto: CreateItemDto,
    ): Item {
        const { id, name, price, description } = createItemDto;
        const item: Item = { id, name, price, description, status: 'ON_SALE'};
        return this.itemsService.create(item);
    }

    @Put(':id')
    updateStatus(@Param('id') id: string, @Body('status') status: 'ON_SALE' | 'SOLD_OUT'): Item | undefined{
        return this.itemsService.updateStatus(id, status);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Item | undefined{
        return this.itemsService.delete(id);
    }
}
