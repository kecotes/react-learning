import "./task.css";
import {Button} from "./Button"; 

export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h2>Mi primera tarea</h2>
      <p>Primera tarea</p>

        <span className={ready ? 'bg-green' : 'bg-red' }>
          {ready === true ? "Tarea realizada" : "Tarea pendiente"}
      </span>
        <Button title="hey" />
    </div>
  );
}
