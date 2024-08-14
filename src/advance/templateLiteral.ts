// TypeScript では、型でもテンプレートリテラルを使用することができる
// テンプレートリテラル型
type FirstName1 = 'John';
type LastName1 = 'Lennon';
type UserName1 = `${FirstName1} ${LastName1}`;
// type UserName1 = "John Lennon"

type FirstName2 = 'John' | 'Paul';
type LastName2 = 'Lennon' | 'McCartney';
type UserName2 = `${FirstName2} ${LastName2}`;
// type UserName2 = "John Lennon" | "John McCartney" | "Paul Lennon" | "Paul McCartney"
// Union を組み合わせた型になっている。

