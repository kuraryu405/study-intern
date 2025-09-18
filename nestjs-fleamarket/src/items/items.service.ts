import { Injectable } from '@nestjs/common';
import { Item, ItemStatus } from '../../generated/prisma';
import { CreateItemDto } from './dto/create-item.dto';
import { NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ItemsService {
    constructor(private readonly prismaService: PrismaService) {}
    private items: Item[] = [];
    
    async findAll(): Promise<Item[]>{
        // return this.items;
        return await this.prismaService.item.findMany();
        // return 'This is ItemsService';
    }
    async create(createItemDto: CreateItemDto): Promise<Item>{
        const {name, price, description} = createItemDto;
        return await this.prismaService.item.create({
            data: {
                name,
                price,
                description,
                status: ItemStatus.ON_SALE,
                userId: '',
            }
        });
    }
    findById(id: string): Item | undefined{
        const item = this.items.find(item => item.id === id);
        if (!item) {
            throw new NotFoundException('Item not found');
        }
        return item;
    }

    updateStatus(id: string, status: 'ON_SALE' | 'SOLD_OUT'): Item | undefined{
        const item = this.findById(id);
        if (item) {
            item.status = status;
            return item;
        }
        return undefined;
    }

    delete(id: string): Item | undefined{
        const item = this.findById(id);
        if (item) {
            this.items = this.items.filter(item => item.id !== id);
            return item;
        }
        return undefined;
    }
}
