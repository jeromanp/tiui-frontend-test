import TaskContainer from "@/components/TaskContainer";

export default function Home() {
  return (
    <div className="container h-screen">
      <div className="row">
        <h1 className="h1 #B46558 text-center">
          <span className="gradient">To Do List App</span>
        </h1>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="h5 d-flex justify-content-center py-4">
            Utiliza esta aplicación para crear actividades de tu día a día.
          </p>
        </div>
      </div>
      <TaskContainer />
    </div>
  );
}
