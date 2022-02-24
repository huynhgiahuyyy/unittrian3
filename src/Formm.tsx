import React , {useState}from 'react'
import Form from './Components/Form'
import List from './Components/List'
export interface IState{
  people: {
      name: string,
      age: number,
      bio: string
  }[]
}
export default function App2(){
  const [people, setPeople] = useState<IState["people"]>([{name:"(DEMO): Huy Huỳnh",age:23,bio:"Lập Trình Viên"}]);
  return (
    <div>
    <Form people={people} setPeople={setPeople} />
    <List people={people} />
    </div>

)
}
