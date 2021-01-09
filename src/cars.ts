export interface Car{
    make: string;
    type: string;
    modelyrno: number;
    cost: number;
    id: number;
    class: string;
}

export const cars: Car[]=[
    {make: 'tesla', type: 'sedan', modelyrno: 2001, cost: 313, id: 1, class: 'A'},
    {make: 'tesla', type: 'suv', modelyrno: 2003, cost: 300, id: 2, class: 'B'},
    {make: 'benz', type: 'sedan', modelyrno: 2021, cost: 201, id: 3, class: 'A'},
    {make: 'tata', type: 'sedan', modelyrno: 2011, cost: 102, id: 4, class: 'C'},
    {make: 'bmw', type: 'sedan', modelyrno: 2001, cost: 99, id: 5, class: 'C'},
]