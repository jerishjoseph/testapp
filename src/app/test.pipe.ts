import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  pure: false
})
export class TestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log("pipe triggered");
    return value + 'test' + args[0];
  }

}
