import ModalForm from './ModalForm';

function App() {
  const handleSubmit = (values) => {
    console.log(values); // handle form data here
  };

  return (
    <div>
      <ModalForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
