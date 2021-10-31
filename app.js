import fetch from 'node-fetch';


async function pkrdata() {
  const res = await fetch('https://v6.exchangerate-api.com/v6/1432c5d5d5094e0d050f3373/latest/USD');
  const result = await res.json();
  console.log(result['conversion_rates']['PKR']);
}
pkrdata();



async function getalldata() {
  const res = await fetch('https://v6.exchangerate-api.com/v6/1432c5d5d5094e0d050f3373/latest/USD');
  const result = await res.json();
  const diff = result['conversion_rates'];
  const testalldata = Object.entries(diff).sort((a, b) => {
    return b[1] - a[1];
  });
  console.log(testalldata);
}
getalldata();

