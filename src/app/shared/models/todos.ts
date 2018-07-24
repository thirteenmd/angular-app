interface Todos {
  id: number;
  name: string;
  finished: boolean;
  finishedAt:{
    date:string;
    description: string;
  }
}

export default Todos;
