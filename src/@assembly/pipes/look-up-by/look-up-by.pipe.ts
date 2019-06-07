import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'lookUpBy',
    pure: false
})
export class AsmLookUpByPipe implements PipeTransform
{
    /**
     * Constructor
     */
    constructor()
    {
    }

    /**
     * Transform
     *
     * @param value
     * @param property
     * @param source
     */
    transform(value: string | string[], property: string, source: any[]): any
    {
        const transformedDestination = [];

        if ( Array.isArray(value) )
        {
            value.forEach((item) => {
                transformedDestination.push(source.find(sourceItem => sourceItem[property] === item));
            });

            return transformedDestination;
        }

        return source.find(sourceItem => sourceItem[property] === value);
    }
}
