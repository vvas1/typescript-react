declare module "*.css" {
  const css:{[key: string]: string}
  export default css
}
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}