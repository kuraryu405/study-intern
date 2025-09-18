import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import type { Item } from '../../generated/prisma';
import { CreateItemDto } from './dto/create-item.dto';
import { ParseUUIDPipe } from '@nestjs/common';
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
    findById(@Param('id', ParseUUIDPipe) id: string): Item | undefined{
        return this.itemsService.findById(id);
    }

    @Post()
    async create(
        @Body() createItemDto: CreateItemDto,
    ): Promise<Item> {
        return await this.itemsService.create(createItemDto);
    }

    @Put(':id')
    updateStatus(@Param('id', ParseUUIDPipe) id: string, @Body('status') status: 'ON_SALE' | 'SOLD_OUT'): Item | undefined{
        return this.itemsService.updateStatus(id, status);
    }

    @Delete(':id')
    delete(@Param('id', ParseUUIDPipe) id: string): Item | undefined{
        return this.itemsService.delete(id);
    }
}
