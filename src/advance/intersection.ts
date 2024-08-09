// intersection (交差型)

type Engineer = {
    name: string;
    role: string;
}

type Blogger = {
    name: string;
    follower: number;
}

type EngineerBlogger = Engineer & Blogger;

const shin: EngineerBlogger = {
    name: 'shin',
    role: 'FE',
    follower: 4000
}

// number or boolean
type NumberOrBoolean = number | boolean;
// string or number
type StringOrNumber = string | number;

// Mix: number
type Mix = NumberOrBoolean & StringOrNumber;

// interface でも同じことができる。