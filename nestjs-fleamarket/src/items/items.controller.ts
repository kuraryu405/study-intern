import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {
        this.itemsService = itemsService;
    }
    @Get()
    findAll(){
        return this.itemsService.findAll();
    }
}
