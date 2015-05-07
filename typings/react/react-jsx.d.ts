/// <reference path="./react.d.ts"/>
declare module "react" {
		function jsx(jsx?: string): ReactElement<any>;
		function __spread(...args: any[]): any; // for JSX Spread Attributes
}