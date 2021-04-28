import { Pipe, PipeTransform } from '@angular/core';
import { DublinBikeStation } from '../models/dublinbike';

@Pipe({
  name: 'filterstations'
})
export class FilterstationsPipe implements PipeTransform {

  transform(items: DublinBikeStation[], searchText: string): DublinBikeStation[] {

    if (!items) return [];

    if(!searchText) return items;

    searchText = searchText.toLowerCase();
    console.log(`Piping search on ${searchText}`);

    return items.filter(it => { return it.name.toLowerCase().includes(searchText)})

   
  }

}
