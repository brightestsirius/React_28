let strValue: string = `hello`;
let undefinedValue: undefined = undefined;
let nullValue: null = null;

// alias
type maybeString = string | undefined;

let userName: maybeString = `Taras`;

// generic
let userMonth: any = 9

let animals: string[] = [`cat`, `dog`, `lion`];
let ages: number[] = [10, 20, 30];
let data: string[] | number[] | (string | number)[] = [10, `Tatas`];

type User = {
    name: string,
    age: number,
    country?: string
}

enum METHODS {
    GET = `GET`,
    POST = `POST`,
    DELETE = `DELETE`
}

interface IChild {
    name: string
}

interface IUser {
    name: string,
    age: number,
    children?: IChild[],
    rest?: METHODS[]
}

let user: IUser = {
    name: `Taras`,
    age: 20,
    children: [
        {
            name: `Child 1`
        },
        {
            name: `Child 2`
        }
    ],
    rest: [METHODS.GET, METHODS.DELETE]
}

const infoFn = (str: string): void => {
    console.log(`info`);
}

const sum = (a:number, b:number): number => a+b;

// generic
const printValue = <x, y>(value_1:x, value_2:y): void => {
    console.log(value_1);
    console.log(value_2);
}

interface IPost {
    title: string,
    starts: number,
    descript: string,
    users: string[]
}

type previewPost = Pick<IPost, "title" | "starts">

// Pick - https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
// Omit – https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys