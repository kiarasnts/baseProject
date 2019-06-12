import {Component} from "@angular/core";

@Component({
    selector:'app-lista-sono',
    templateUrl: './app-lista-sono.component.html',
    styleUrls: ['./app-lista-sono.component.css']
})
export class AppListaSonoComponent{
    people: any[]=[
        {
            age:23,
            name: 'Igor',
            level: 'G',
        },
        {
            age:58,
            name: 'Marli',
            level: 'G',
        },
        {
            age:25,
            name: 'Antonio Jeff',
            level: 'M',
        },
        {
            age: 23,
            name: 'Kiara',
            level: 'D',
        }
    ]   ;
}