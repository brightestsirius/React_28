let strValue: string = `hello`;
let numberValue: number = 10;
let undefinedValue: undefined = undefined;
let nullValue: null = null;

// alias
type maybeString = string | undefined;
type StringNumber =  string | number;
let userName: maybeString = undefined;


// !generic
let userMonth: any = `hello`;
userMonth = 10;

let animals: string[] = [`cat`, `dog`, `lion`];
let ages: number[] = [10, 20, 30];
let data: string[] | number[] | (StringNumber)[] = [`10`, `20`, 30];

enum METHODS {
    GET = `GET`,
    POST = `POST`,
    DELETE = `DELETE`
}

type User = {
    name: string,
    age: number,
    country?: string
}

interface IUser {
    id?: StringNumber
    name: string,
    age: number,
    country?: string,
    children?: IChild[],
    rest?: METHODS[]
}

interface IChild {
    name: string,
    age: number
}

let user: IUser = {
    name: `Taras`,
    age: 20,
    children: [
        {
            name: `Child 1`,
            age: 3
        },
        {
            name: `Child 2`,
            age: 4
        }
    ],
    rest: [METHODS.GET, METHODS.DELETE]
}

const infoFn = (str: string, age: number): void => {
    console.log(`info`);
}

const sum = (a:number, b:number): number => a+b;

const sum_alternative = (a:number, b?:number): number => {
    return b ? a+b : a;
};

// generic
const printV = <x, y>(value_1: x, value_2: y): void => {
    console.log(value_1);
    console.log(value_2);
}

printV(10, 20);
printV(`10`, `20`);
printV(10, `20`);

interface IPost {
    title: string,
    stars: number,
    descript: string,
    users: string[]
}

type previewPost = Pick<IPost, "title" | "stars">
type TodoPreview = Omit<IPost, "descript">;

const myPostPreview:previewPost = {
    title: `title`,
    stars: 10,
}

const myPostNext:TodoPreview = {
    title: `title`,
    stars: 10,
    users: [`hello`]
}

// Pick - https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
// Omit – https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys