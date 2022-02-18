declare module "*.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// declare module "*/_content/welcome-message.md" {
//   // eslint-disable-next-line one-var
//   const attributes: {
//     last_updated_time: string;
//     title: string;
//   };
//   // eslint-disable-next-line one-var
//   const html: string;
//   export { attributes, html };
// }
