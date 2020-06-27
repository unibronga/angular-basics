import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "mult"
})

export class MultByPipe implements PipeTransform{
    transform(num: number, num2: number = num): number {
        return num * num2
    }

}
