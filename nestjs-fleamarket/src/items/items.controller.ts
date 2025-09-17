import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import type { Item } from './items.model';
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
        @Body('id') id: string,
        @Body('name') name: string, 
        @Body('price') price: number,
        @Body('description') description: string,
    ): Item {
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
