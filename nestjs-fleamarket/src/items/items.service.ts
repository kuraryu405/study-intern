import { Injectable } from '@nestjs/common';
import { Item } from './items.model';

@Injectable()
export class ItemsService {
    private items: Item[] = [];
    
    findAll(): Item[]{
        return this.items;
        // return 'This is ItemsService';
    }
    create(item: Item):Item{
        this.items.push(item);
        return item;
    }
    findById(id: string): Item | undefined{
        return this.items.find(item => item.id === id);
    }
}
