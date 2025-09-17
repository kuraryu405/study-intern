import { Injectable } from '@nestjs/common';
import { Item } from './items.model';

@Injectable()
export class ItemsService {
    private items: Item[] = [];
    
    findAll(): Item[]{
        return this.items;
        // return 'This is ItemsService';
    }
    create(CreateItemDto: CreateItemDto):Item{
        const item: Item = {
            ...CreateItemDto,
            status: 'ON_SALE'
        }
        this.items.push(item);
        return item;
    }
    findById(id: string): Item | undefined{
        return this.items.find(item => item.id === id);
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
