// Typescript
import { getData } from 'https://raw.githubusercontent.com/Jareechang/utils-test/master/src/fetch-data.ts?loader=ts';

async function run() {
  const data = await getData();
  console.log(data);
}

run();

