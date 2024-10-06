// Named export: exporting a variable 'name'
export let name = "Moin Khan";
export default greet

// Default export: exporting a function 'greet'
const greet = () => {
  console.log(`Hello ${name}`);
}
