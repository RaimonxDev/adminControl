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
    transform(value: string[], property: string, source: any[]): any
    {
        const transformedDestination = [];

        value.forEach((item) => {
            transformedDestination.push(source.filter(sourceItem => sourceItem[property] === item)[0]);
        });

        return transformedDestination;
    }
}
